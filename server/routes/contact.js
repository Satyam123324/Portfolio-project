import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

// POST /api/contact — save a contact message
router.post('/', async (req, res) => {
  try {
    const name = (req.body.name || '').trim()
    const email = (req.body.email || '').trim()
    const message = (req.body.message || '').trim()

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }
    if (!isEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message is too long.' })
    }

    const saved = await Message.create({ name, email, message })
    return res.status(201).json({ ok: true, id: saved._id })
  } catch (err) {
    console.error('Contact save error:', err.message)
    return res.status(500).json({ error: 'Server error. Please try again later.' })
  }
})

// GET /api/contact — list messages (protect this in production!)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(100)
    return res.json(messages)
  } catch (err) {
    return res.status(500).json({ error: 'Server error.' })
  }
})

export default router
