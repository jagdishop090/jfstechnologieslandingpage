import React from 'react'
import { motion } from 'framer-motion'
import './Features.css'

const Features = () => {
  const features = [
    { name: 'Master Setup', icon: '⚙️' },
    { name: 'Company Management', icon: '🏢' },
    { name: 'Human Resource Management', icon: '👥' },
    { name: 'Project Management', icon: '📋' },
    { name: 'Finance Management', icon: '💰' },
    { name: 'Inventory Management', icon: '📦' },
    { name: 'Business and Marketing Management', icon: '📈' },
    { name: 'Reception and Visitor Management', icon: '🚪' },
    { name: 'Inbuilt Expense Tracking', icon: '💳' },
    { name: 'Project Based Expense', icon: '📊' },
    { name: 'Time Tracking', icon: '⏱️' },
    { name: 'WhatsApp + Mobile App Based Functionalities', icon: '📱' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Comprehensive Features</h2>
          <p className="section-subtitle">
            All-in-one platform to manage every aspect of your business
          </p>
        </motion.div>
        
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -3
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-name">{feature.name}</h3>
              <div className="feature-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

