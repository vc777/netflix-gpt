import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-orange-400 z-10 rounded-lg flex justify-between items-center'>
    {/* Logo on the left */}
    <a href='/'>
        <img className='w-44 object-contain bg-transparent' src='https://dosmioss.com/admin/img/logo.png' alt='logo'/>
    </a>

    {/* Logo on the right */}
    <div className='flex'>
    <a href='/'>
        <img className='w-6 m-2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAANlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAR2LVAAAAEXRSTlMAFC85CUIhS4NadpOkaPPnxJy2bA4AAAEhSURBVHgBjc5LbgMhEEXRW1+g6bLN/jcbN+pEsTLJmaHLk4p/En0zdf6ySAdwDeVTNkRJtDd1aR9rS9oYHGLzbKMI+WjVK7h49VnYT82kqgS1t4QaJsEtuD6rOYCE0MaUxmZYb5j8PkBGyj28dkk8ns/na0A4NT0AJAEC2tr6foABmPuBOsRax3iuJQR0VACFJNjRrvlAkkRyRz/MvqO+56By6B3Txndsr7UKyZy5oznddMfLYyVGVKYAKdTEIN7h8VgvCOoQ42IcM83v5QtUfDaCS+Bx0txVwwRSKTNJLm7kMQhlM4VeNDZUOM6G2wZ6Tjfh1px5TmXLcQ5S+dGENvvM0tHPWajyixlipWefw5KWfJBmDukgFvzhGqEWpvzPFytwCiPLZUEvAAAAAElFTkSuQmCC' alt='logo'/>
    </a>
    <button className='text-xs m-2 text-orange-700'>
    <ExitToAppIcon/>
    </button>
    </div>
</div>
  )
}

export default Header