import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Loading.css'

const Loading = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(() => {
        onComplete()
      }, 500) // Fade out duration
    }, 2000) // Total loading time

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="logo-text"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            JFS
          </motion.div>
        </motion.div>

        <motion.div
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Technologies
        </motion.div>

        <motion.div
          className="loading-spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loading

