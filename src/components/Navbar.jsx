import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'features', 'ai', 'contact']
      const scrollPosition = window.scrollY + 200 // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Check on mount
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      setActiveSection(id) // Update active state immediately
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'features', label: 'Features' },
    { id: 'ai', label: 'AI Capabilities' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          <span className="logo-text">JFS</span>
          <span className="logo-tech">Technologies</span>
        </motion.div>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <motion.button
          className="nav-cta"
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar

