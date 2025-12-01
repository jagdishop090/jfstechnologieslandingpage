import React from 'react'
import { motion } from 'framer-motion'
import './AICapabilities.css'

const AICapabilities = () => {
  const aiFeatures = [
    {
      title: 'Real-Time KPI Dashboards',
      description: 'Monitor your business performance with live, interactive dashboards that update in real-time.',
      icon: '📊',
      gradient: 'gradient-1',
      color: '#667eea'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with advanced predictive models.',
      icon: '🔮',
      gradient: 'gradient-2',
      color: '#f093fb'
    },
    {
      title: 'AI Chat Bots',
      description: 'Intelligent conversational agents that provide 24/7 customer support and assistance.',
      icon: '🤖',
      gradient: 'gradient-3',
      color: '#4facfe'
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your business needs for automation and insights.',
      icon: '🧠',
      gradient: 'gradient-4',
      color: '#43e97b'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="ai" className="ai-capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">AI Capabilities</h2>
          <p className="section-subtitle">
            Harness the power of artificial intelligence to transform your business operations
          </p>
        </motion.div>
        
        <motion.div
          className="ai-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`ai-card ${feature.gradient}`}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                scale: 1.01
              }}
              transition={{ duration: 0.3 }}
              style={{ '--card-color': feature.color }}
            >
              <div className="ai-card-inner">
                <div className="ai-icon-wrapper">
                  <div className="ai-icon">{feature.icon}</div>
                  <div className="ai-icon-glow"></div>
                </div>
                <h3 className="ai-title">{feature.title}</h3>
                <p className="ai-description">{feature.description}</p>
                <div className="ai-card-shine"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AICapabilities

