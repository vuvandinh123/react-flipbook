import React from 'react'
import Brochure from './components/Brochure'
import ReactFlipBook from '@vuvandinh203/react-flipbook'
import Basic from './components/Basic'
import UsingRef from './components/UsingRef'

const App = () => {
  return (
    <div className='overflow-hidden'>
    <Brochure />
      <Basic />
      <UsingRef />
    </div>
  )
}

export default App
