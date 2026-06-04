import React from 'react'
import Rightcontent from './Right_content'
import Left_text from './Left_text'

const Page1Content = () => {
  return (
    <div className='bg-blue-100 py-100 flex items-center justify-between '>
        <Left_text/>
        <Rightcontent/>


    </div> 
  )
}

export default Page1Content