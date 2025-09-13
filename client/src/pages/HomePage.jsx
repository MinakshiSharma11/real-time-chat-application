import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)
  return (
    <div className='border w-full h-screen sm:py-[2%]'>
       <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar selectedUser={selectedUser} setSlectedUser={setSelectedUser} />
        <ChatContainer selectedUser={selectedUser} setSlectedUser={setSelectedUser} />
        <RightSidebar selectedUser={selectedUser} setSlectedUser={setSelectedUser} />
       </div>
    </div>
  )
}

export default HomePage