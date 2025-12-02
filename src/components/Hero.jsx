import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import DeviceMockup from './DeviceMockup'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      // Initialize with center position
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: rect.width / 2,
          y: rect.height / 2
        })
      }
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  // Get hero container dimensions for constraining animation
  const [heroDimensions, setHeroDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setHeroDimensions({ width: rect.width, height: rect.height })
      }
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Create animated circles with fixed positions - optimized for smooth cursor following
  const circles = [
    { id: 0, size: 150, top: '10%', left: '10%', speed: 0.85 },
    { id: 1, size: 130, top: '20%', right: '15%', speed: 0.80 },
    { id: 2, size: 140, bottom: '15%', left: '20%', speed: 0.90 },
    { id: 3, size: 120, top: '50%', right: '10%', speed: 0.82 },
    { id: 4, size: 135, bottom: '25%', right: '25%', speed: 0.88 },
    { id: 5, size: 125, top: '30%', left: '30%', speed: 0.78 },
    { id: 6, size: 145, bottom: '40%', left: '15%', speed: 0.92 },
    { id: 7, size: 130, top: '60%', right: '30%', speed: 0.85 }
  ]

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="hero-bg-animation">
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            className="bg-animation-circle"
            style={{
              width: circle.size,
              height: circle.size,
              top: circle.top,
              left: circle.left,
              right: circle.right,
              bottom: circle.bottom,
            }}
            animate={{
              x: Math.max(-circle.size / 2, Math.min(mousePosition.x * circle.speed - circle.size / 2, heroDimensions.width - circle.size / 2)),
              y: Math.max(-circle.size / 2, Math.min(mousePosition.y * circle.speed - circle.size / 2, heroDimensions.height - circle.size / 2)),
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <motion.div
            className="hero-content-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-badge">
              Digital Transformation
            </motion.div>
            <motion.h1 variants={itemVariants} className="hero-title">
              Smart solutions, zero stress
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-description">
              We create digital experiences that resonate, perform, and last. From data-driven strategies to seamless implementations, we help you transform your business.
            </motion.p>

            {/* Service Categories */}
            <motion.div
              className="hero-services"
              variants={itemVariants}
            >
              <div className="service-pill">Data Analytics</div>
              <div className="service-pill">Digital Strategy</div>
              <div className="service-pill">AI Solutions</div>
              <div className="service-pill">Cloud Services</div>
              <div className="service-pill">Automation</div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="hero-cta"
              variants={itemVariants}
            >
              <motion.button
                className="btn-hero-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Consulting
                <span className="cta-icon">→</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-content-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-mockup-desktop">
                <DeviceMockup />
              </div>
              <div className="hero-image-mobile">
                <img 
                  src="/hero-mobile-image.jpg.png" 
                  alt="Business Dashboard" 
                  className="hero-dashboard-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

