import React from 'react'
import Right_content from './Right_content'
import Left_content from './Left_content'

const Page1Content = () => {
  return (
    <div className='h-full flex items-center justify-between'>
      <Left_content />
      <Right_content />
    </div>
  )
}

export default Page1Content