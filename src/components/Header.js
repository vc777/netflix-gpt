import React from 'react'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg' >
        <a href='/'>
        <img className='w-44'  src='https://dosmioss.com/admin/img/logo.png' alt='logo'/>
        </a>
    </div>
  )
}

export default Header