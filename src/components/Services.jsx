import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '📊',
      title: 'Data-Driven Solutions',
      description: 'Leverage the power of data to make informed decisions and drive business growth.',
      gradient: 'gradient-1'
    },
    {
      icon: '✨',
      title: 'Seamless Digital Experiences',
      description: 'Create intuitive and engaging digital experiences that delight your customers.',
      gradient: 'gradient-2'
    },
    {
      icon: '🎯',
      title: 'Tailored Strategies',
      description: 'Customized solutions designed specifically for your business needs and goals.',
      gradient: 'gradient-3'
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Best Data-Driven Digital Transformation Services, seamless digital experiences, 
            and tailored strategies that drive growth and innovation.
          </p>
        </motion.div>
        
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${service.gradient}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

