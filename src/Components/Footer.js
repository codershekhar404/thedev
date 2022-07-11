import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>Copyright© {year} Shekhar | All Right Reserved</p>
    </footer>
  )
}

export default Footer