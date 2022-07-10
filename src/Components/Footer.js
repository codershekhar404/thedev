import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>Made by Shekhar | Copyright© {year} | All Right Reserved</p>
    </footer>
  )
}

export default Footer