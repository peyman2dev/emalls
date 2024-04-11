import React from 'react'
import Windows from './Windows/Windows'
import Mobile from './Mobile/Mobile'

export default function Header() {
  return (
    <header className='fixed z-20 bg-white w-full  top-0'>
        <Windows />
        <Mobile />
    </header>
  )
}
