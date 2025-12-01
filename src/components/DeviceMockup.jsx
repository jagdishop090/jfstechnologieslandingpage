import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './DeviceMockup.css'

const DeviceMockup = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const DashboardCard = ({ id, children, className = '' }) => (
    <motion.div
      className={`dashboard-card ${className}`}
      onHoverStart={() => setHoveredCard(id)}
      onHoverEnd={() => setHoveredCard(null)}
      animate={{
        scale: hoveredCard === id ? 1.05 : 1,
        zIndex: hoveredCard === id ? 10 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )

  return (
    <div className="device-mockup-container-3d">
      {/* Payment Cards - Upper Left */}
      <motion.div 
        className="device-wrapper payment-card-wrapper"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="payment-card payment-reminder">
          <div className="payment-header">
            <div className="payment-logo-small">V</div>
            <div className="payment-company">S Sunil Stores</div>
          </div>
          <div className="payment-amount">₹3,568.50</div>
          <div className="payment-due">Due on 25 July 2022</div>
          <div className="payment-phone">📞 +91 98765 43210</div>
        </div>
        <div className="payment-card collect-payment">
          <div className="upi-logo">UPI</div>
          <div className="collect-text">Collect Payments</div>
        </div>
      </motion.div>

      {/* Central Monitor Dashboard */}
      <motion.div 
        className="device-wrapper monitor-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="device-frame monitor-frame">
          <div className="monitor-stand"></div>
          <div className="device-screen monitor-screen">
            <div className="dashboard-container business-dashboard">
              {/* Top Bar */}
              <div className="dashboard-topbar">
                <div className="business-name">Business Name</div>
                <div className="topbar-actions">
                  <div className="search-icon">🔍</div>
                  <button className="btn-add-sale">Add Sale</button>
                  <button className="btn-add-purchase">Add Purchase</button>
                </div>
              </div>

              <div className="dashboard-layout">
                {/* Sidebar */}
                <div className="dashboard-sidebar-nav">
                  <div className="sidebar-item active">Home</div>
                  <div className="sidebar-item">Sales</div>
                  <div className="sidebar-item">Purchase</div>
                  <div className="sidebar-item">Customers</div>
                  <div className="sidebar-item">Suppliers</div>
                  <div className="sidebar-item">Cash & Bank</div>
                  <div className="sidebar-item">My Online Store</div>
                  <div className="sidebar-item">Reports</div>
                </div>

                {/* Main Content */}
                <div className="dashboard-main-area">
                  <div className="dashboard-scrollable">
                    <div className="dashboard-cards-grid">
                      {/* Sale Card */}
                      <DashboardCard id="sale-card" className="metric-card sale-card">
                        <div className="metric-label">Sale</div>
                        <div className="metric-value">₹25000</div>
                        <div className="metric-chart">
                          <svg viewBox="0 0 200 60" className="chart-svg">
                            <path
                              d="M 10 50 Q 30 40, 50 35 T 90 25 T 130 20 T 170 15 T 190 10"
                              stroke="#10b981"
                              strokeWidth="2.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <div className="metric-growth">+20% This Month Growth</div>
                        <div className="metric-date">Report from 27 May to 27 May</div>
                      </DashboardCard>

                      {/* Expenses Card */}
                      <DashboardCard id="expenses-card" className="metric-card expenses-card">
                        <div className="metric-label">Expenses</div>
                        <div className="metric-value">₹5200</div>
                        <div className="metric-chart">
                          <svg viewBox="0 0 200 60" className="chart-svg">
                            <path
                              d="M 10 45 Q 30 40, 50 38 T 90 35 T 130 32 T 170 30"
                              stroke="#10b981"
                              strokeWidth="2.5"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <div className="metric-growth">This Month</div>
                      </DashboardCard>

                      {/* You'll Receive Card */}
                      <DashboardCard id="receive-card" className="metric-card receive-card">
                        <div className="metric-label">You'll Receive</div>
                        <div className="metric-value">₹25000</div>
                        <div className="payment-list">
                          <div className="payment-item">Ramesh Singh ₹4000</div>
                          <div className="payment-item">Malay ₹300</div>
                          <div className="payment-item">Sumit Kumar Sing ₹500</div>
                          <div className="payment-more">+3 more</div>
                        </div>
                      </DashboardCard>

                      {/* You'll Pay Card */}
                      <DashboardCard id="pay-card" className="metric-card pay-card">
                        <div className="metric-label">You'll Pay</div>
                        <div className="metric-value">₹3860</div>
                        <div className="payment-list">
                          <div className="payment-item">Ramesh Singh ₹4000</div>
                          <div className="payment-item">Malay ₹80</div>
                          <div className="payment-item">Sumit Kumar Sing ₹550</div>
                          <div className="payment-more">+3 more</div>
                        </div>
                      </DashboardCard>

                      {/* Purchases Card */}
                      <DashboardCard id="purchases-card" className="metric-card purchases-card">
                        <div className="metric-label">Purchases</div>
                        <div className="metric-value">₹7860</div>
                        <div className="purchase-categories">
                          <div className="category-item">Books ₹4000</div>
                          <div className="category-item">Grocery ₹80</div>
                        </div>
                      </DashboardCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Invoice Document - Right Side */}
      <motion.div 
        className="device-wrapper invoice-doc-wrapper"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="invoice-document">
          <div className="invoice-header">
            <div className="invoice-logo">Vyapar</div>
            <div className="invoice-title">INVOICE</div>
          </div>
          
          <div className="invoice-company">
            <div className="company-name">Vyapar Tech Solutions</div>
            <div className="company-address">49/1, Outer Ring Road, Koramangala, Bangalore 34</div>
            <div className="company-contact">📞 +91 98765 43210 | ✉️ info@vyapar.com | 🌐 www.vyapar.com</div>
          </div>

          <div className="invoice-bill-to">
            <div className="bill-label">Bill To:</div>
            <div className="bill-name">Dheeraj Garg</div>
            <div className="bill-address">Varshahell Road Bangalore</div>
            <div className="bill-contact">📞 +91 98765 43210</div>
          </div>

          <div className="invoice-details">
            <div className="invoice-detail-item">
              <span>Invoice No:</span> 1122334455
            </div>
            <div className="invoice-detail-item">
              <span>Date:</span> 08-02-2019
            </div>
            <div className="invoice-detail-item">
              <span>Due Date:</span> 18-02-2019
            </div>
          </div>

          <div className="invoice-table">
            <div className="table-header">
              <div>S.No</div>
              <div>Item</div>
              <div>Qty</div>
              <div>Rate</div>
              <div>Amount</div>
            </div>
            <div className="table-row">
              <div>1.</div>
              <div>Sample Item 1</div>
              <div>1</div>
              <div>₹100</div>
              <div>₹90</div>
            </div>
            <div className="table-row">
              <div>2.</div>
              <div>Sample Item 2</div>
              <div>1</div>
              <div>₹100</div>
              <div>₹90</div>
            </div>
          </div>

          <div className="invoice-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹18,000.00</span>
            </div>
            <div className="summary-row">
              <span>Discount:</span>
              <span>₹1,000.00</span>
            </div>
            <div className="summary-row">
              <span>CGST(9%):</span>
              <span>₹826.20</span>
            </div>
            <div className="summary-row">
              <span>SGST(9%):</span>
              <span>₹826.20</span>
            </div>
            <div className="summary-row total">
              <span>TOTAL:</span>
              <span>₹18,652.40</span>
            </div>
            <div className="summary-row balance">
              <span>BALANCE DUE:</span>
              <span>₹4,750</span>
            </div>
            <div className="summary-row">
              <span>Payment Mode:</span>
              <span>Cash</span>
            </div>
          </div>

          <div className="invoice-signature">AUTHORIZED SIGNATORY</div>
        </div>
      </motion.div>

      {/* Mobile Phone - Lower Left */}
      <motion.div 
        className="device-wrapper phone-invoice-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="device-frame phone-invoice-frame">
          <div className="device-screen phone-invoice-screen">
            <div className="phone-invoice-container">
              <div className="phone-invoice-header">
                <div className="phone-logo">JFS</div>
                <div className="phone-cart">🛒</div>
              </div>
              
              <div className="phone-invoice-content">
                <div className="phone-company">Vyapar Tech Solutions</div>
                <div className="phone-address">49/1, Outer Ring Road, Koramangala</div>
                
                <div className="phone-bill-to">
                  <div className="phone-bill-label">Bill To:</div>
                  <div className="phone-bill-name">Dheeraj Garg</div>
                </div>

                <div className="phone-invoice-info">
                  <div>Invoice No: 1122334455</div>
                  <div>Date: 08-02-2019</div>
                </div>

                <div className="phone-items">
                  <div className="phone-item">Sample Item 1 - ₹90</div>
                  <div className="phone-item">Sample Item 2 - ₹90</div>
                </div>

                <div className="phone-total">
                  <div className="phone-total-label">TOTAL</div>
                  <div className="phone-total-value">₹18,652.40</div>
                </div>

                <button className="phone-action-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default DeviceMockup
