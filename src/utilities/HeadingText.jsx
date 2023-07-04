import React from 'react'

const HeadingText = ({heading}) => {
  return (
    <div className='mb-14'>
        <h1 className='text-3xl font-bold uppercase text-center text-green-600'>{heading}</h1>
    </div>
  )
}

export default HeadingText