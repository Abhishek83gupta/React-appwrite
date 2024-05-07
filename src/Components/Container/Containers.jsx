import React from 'react'

function Container({Children}) {
  return (
    <div className='w-Full max-w-7xl mx-auto px-4'>
        {Children}
    </div>
  )
}

export default Container
