import React, { useState } from 'react'
import classNames from 'classnames'

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false)

  const wrapper = classNames("h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col w-80",
  {
    ['w-80']:!toggleCollapse, ['w-20']:toggleCollapse
  }
  )
  return (
    <div className={wrapper}>
      <div className='flex flex-col'>
        <div className='flex items-center pl-1 gap-4'>
          <div>Logo</div>
          <span className={ classNames('mt-2 text-lg font-medium text-text', {
            hidden: toggleCollapse
          })}>
            Logo Name
          </span>
        </div>
      </div>
      <div>Log Out</div>
    </div>
  )
}

export default Sidebar;