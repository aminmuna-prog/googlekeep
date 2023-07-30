import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      <footer>Copyright &#169; {year}</footer>
    </div>
  )
}

export default Footer
