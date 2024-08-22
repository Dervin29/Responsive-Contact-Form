import React from 'react'
import img from '../assets/images/icon-success-check.svg'
import { motion } from 'framer-motion'

const SubmitModal = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    //position top center of the screen
     className='absolute top-0    grid place-content-start gap-2 bg-[#084f42] my-4 p-4 rounded-md'>
      <div className=' flex items-center gap-2'>
        <img src={img} className='' />
        <p className=' text-lg text-white text-center'>Message Sent!</p>
      </div>
      <p className=' text-left text-white  '>Thanks for completing the form. We'll be in touch soon!</p>
    </motion.div>
  )
}

export default SubmitModal