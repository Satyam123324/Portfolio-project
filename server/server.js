import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import contactRoutes from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio'

// Allow your deployed frontend origin(s). Comma-separated in CLIENT_ORIGIN.
const origins = (process.env.CLIENT_ORIGIN || 'http://localhost:3000')
  .split(',')
  .map((s) => s.trim())

app.use(cors({ origin: origins, methods: ['GET', 'POST'] }))
app.use(express.json({ limit: '10kb' }))

// Basic rate limit on the contact endpoint to prevent spam
app.use(
  '/api/contact',
  rateLimit({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true, legacyHeaders: false })
)

app.get('/', (req, res) => res.json({ status: 'ok', service: 'portfolio-api' }))
app.use('/api/contact', contactRoutes)

async function start() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`))
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  }
}

start()
