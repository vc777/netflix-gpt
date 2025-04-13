import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <a href='/'>
        <img className='w-44 object-contain bg-transparent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1t8dI8RjtpYsRAy3o2YyRFMcmtJMrKRlUA&s' alt='logo'/>
    </a>

    {/* Logo on the right */}
    <a href='/'>
        <img className='w-44' src='https://dosmioss.com/admin/img/logo.png' alt='logo'/>
    </a>
</div>
  )
}

export default Header