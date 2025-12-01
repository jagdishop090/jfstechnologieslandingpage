import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section id="contact" className="contact">
      <div className="bg-pattern"></div>
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={itemVariants}
          >
            Let's discuss how our digital transformation services can drive growth and innovation for your organization.
          </motion.p>
          
          <motion.div
            className="contact-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn-contact-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
            <motion.button
              className="btn-contact-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>
          
          <motion.div
            className="contact-info"
            variants={itemVariants}
          >
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <div className="info-label">Email</div>
                <div className="info-value">info@jfstechnologies.com</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <div className="info-label">Phone</div>
                <div className="info-value">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <div className="info-label">Location</div>
                <div className="info-value">Global Services</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-text">JFS</span>
                <span className="logo-tech">Technologies</span>
              </div>
              <p className="footer-description">
                Best Data-Driven Digital Transformation Services, seamless digital experiences, and tailored strategies that drive growth and innovation.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" className="social-link" aria-label="Twitter">Twitter</a>
                <a href="#" className="social-link" aria-label="Facebook">Facebook</a>
                <a href="#" className="social-link" aria-label="Instagram">Instagram</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><a href="#services">Data-Driven Solutions</a></li>
                <li><a href="#services">Digital Experiences</a></li>
                <li><a href="#services">Tailored Strategies</a></li>
                <li><a href="#ai">AI Capabilities</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><a href="#hero">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📧</span>
                  <span>info@jfstechnologies.com</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Global Services</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 JFS Technologies. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact

