import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='flex justify-end'>
    {/* hey! */}
    {/* <button className='bg-blue-700'>heyo!</button> */}
    <Button startIcon={<PlusIcon size='lg'/>} variant='primary' text='Add Content' size='sm'></Button>
    <Button startIcon={<ShareIcon size='lg'/>} variant='secondary' text='Share Brain' size='md'></Button>
    </div>
  )
}

export default App
