import React from 'react'
import pfp1 from '../assets/pfp1.jpg'
import pfp2 from '../assets/pfp2.jpg'
import pfp3 from '../assets/pfp3.jpg'

interface LogoComponentProps {
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        {/*1*/}
        <div className="w-10 h-10 rounded-full bg-blue-500 z-10">
           
        </div>
        
        {/*2*/}
        <div className="w-10 h-10 rounded-full bg-green-500 -ml-4 z-20"></div>
        
        {/*3*/}
        <div className="w-10 h-10 rounded-full bg-purple-500 -ml-4 z-30"></div>
      </div>
    </div>
  )
}

export default LogoComponent