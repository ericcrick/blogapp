import React from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='h-screen flex flex-row justify-start'>
      <Sidebar/>
      <div className='bg-primary flex-1 p-4 text-white'>
        Blog Dashboard
      </div>
    </div>
  )
}

export default Layout