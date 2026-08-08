import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Real WebGL animated background: drifting starfield of glowing points
// + a few floating wireframe polyhedra. Reacts to mouse + scroll.
export default function Scene3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x05060f, 0.055)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 14

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ---- Particle starfield ----
    const COUNT = 1400
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const palette = [new THREE.Color('#7c5cff'), new THREE.Color('#22d3ee'), new THREE.Color('#f472b6')]
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 42
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      const c = palette[(Math.random() * palette.length) | 0]
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    // soft round sprite texture
    const cv = document.createElement('canvas'); cv.width = cv.height = 64
    const ctx = cv.getContext('2d')
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.4, 'rgba(255,255,255,0.6)'); grd.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grd; ctx.fillRect(0, 0, 64, 64)
    const sprite = new THREE.CanvasTexture(cv)
    const pMat = new THREE.PointsMaterial({
      size: 0.22, map: sprite, vertexColors: true, transparent: true,
      depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.9,
    })
    const points = new THREE.Points(pGeo, pMat)
    scene.add(points)

    // ---- Floating wireframe polyhedra ----
    const shapes = []
    const geos = [new THREE.IcosahedronGeometry(1.6, 0), new THREE.OctahedronGeometry(1.3, 0), new THREE.TorusGeometry(1.2, 0.4, 12, 32), new THREE.DodecahedronGeometry(1.4, 0)]
    const cols = ['#7c5cff', '#22d3ee', '#f472b6', '#8b7cff']
    const spots = [[-8, 3, -4], [8, -2, -2], [6, 5, -6], [-7, -4, -3]]
    geos.forEach((g, i) => {
      const mat = new THREE.MeshBasicMaterial({ color: cols[i], wireframe: true, transparent: true, opacity: 0.5 })
      const mesh = new THREE.Mesh(g, mat)
      mesh.position.set(...spots[i])
      mesh.userData = { rx: 0.001 + Math.random() * 0.004, ry: 0.001 + Math.random() * 0.004, fl: Math.random() * Math.PI * 2 }
      scene.add(mesh); shapes.push(mesh)
    })

    // ---- Interaction ----
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    let scrollY = 0
    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5)
      target.y = (e.clientY / window.innerHeight - 0.5)
    }
    const onScroll = () => { scrollY = window.scrollY }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    let raf, t = 0
    const animate = () => {
      raf = requestAnimationFrame(animate)
      t += 0.01
      cur.x += (target.x - cur.x) * 0.05
      cur.y += (target.y - cur.y) * 0.05
      points.rotation.y += 0.0006
      points.rotation.x = cur.y * 0.3
      shapes.forEach((m) => {
        m.rotation.x += m.userData.rx
        m.rotation.y += m.userData.ry
        m.position.y += Math.sin(t + m.userData.fl) * 0.004
      })
      // camera parallax from mouse + gentle scroll drift
      camera.position.x += (cur.x * 4 - camera.position.x) * 0.05
      camera.position.y += (-cur.y * 3 - (scrollY * 0.002) - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    if (!reduce) animate()
    else renderer.render(scene, camera)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      pGeo.dispose(); pMat.dispose(); sprite.dispose()
      geos.forEach((g) => g.dispose()); shapes.forEach((m) => m.material.dispose())
      renderer.dispose()
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="scene3d" aria-hidden="true" />
}
