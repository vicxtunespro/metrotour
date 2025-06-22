'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const imageHoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const numberVariants = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
}

export default function TourAreas() {
  return (
    <motion.div 
      className='flex flex-col gap-8 md:gap-12'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div 
        className='py-8 flex justify-center items-center flex-col'
        variants={itemVariants}
      >
        <motion.h1 
          className='text-center text-2xl md:text-4xl font-bold max-w-3xl'
          whileHover={{ scale: 1.02 }}
        >
          Everything Your Child Needs To Know About Eastern Uganda.
        </motion.h1>
        <motion.p 
          className='text-center text-xs md:text-sm py-2 max-w-2xl'
          whileHover={{ scale: 1.01 }}
        >
          Eastern Uganda is a region rich in natural beauty, cultural heritage, and adventure.<br/> 
          Here are some of the highlights it's known for:
        </motion.p>
      </motion.div>

      {/* Sipi Falls */}
      <motion.div 
        className='grid grid-cols-8 gap-4 md:gap-6'
        variants={itemVariants}
      >
        <motion.div 
          className='col-span-8 row-start-2 lg:row-start-1 lg:col-span-5 w-full h-72 md:h-80 rounded-lg overflow-hidden relative'
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <div className='w-full h-full bg-gradient-to-t from-black/70 to-transparent absolute top-0 left-0 p-4 flex items-end'>
            <p className='text-white font-medium text-sm md:text-base'>Sipi Falls Area View</p>
          </div>
          <Image 
            src={'/images/feature2.jpg'} 
            alt='Sipi WaterFall' 
            width={800} 
            height={600} 
            className='w-full h-full object-cover'
          /> 
        </motion.div>
        <motion.div 
          className='col-span-8 lg:col-span-3 w-full h-72 md:h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg relative overflow-hidden'
          whileHover={{ y: -5 }}
        >
          <div className='absolute bottom-4 p-4 md:p-6'>
            <motion.div 
              className='text-red-600 font-bold text-2xl rounded-full h-12 w-12 flex justify-center items-center bg-white mb-4'
              variants={numberVariants}
              whileHover="hover"
            >
              01
            </motion.div>
            <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>Sipi Falls</h2>
            <p className='text-xs md:text-sm text-gray-200 font-light'>
              Located on the slopes of Mount Elgon in Eastern Uganda, Sipi Falls is a stunning series of three waterfalls—perfect for an educational adventure. Students can enjoy scenic hikes, learn about local geology, and discover how Arabica coffee is grown.
            </p>
          </div>
        </motion.div> 
      </motion.div>

      {/* Murchison Falls */}
      <motion.div 
        className='grid grid-cols-8 gap-4 md:gap-6'
        variants={itemVariants}
      >
        <motion.div 
          className='col-span-8 lg:col-span-3 w-full h-72 md:h-80 bg-gradient-to-br from-amber-900 to-amber-700 rounded-lg relative overflow-hidden'
          whileHover={{ y: -5 }}
        >
          <div className='absolute bottom-4 p-4 md:p-6'>
            <motion.div 
              className='text-red-600 font-bold text-2xl rounded-full h-12 w-12 flex justify-center items-center bg-white mb-4'
              variants={numberVariants}
              whileHover="hover"
            >
              02
            </motion.div>
            <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>Murchison Falls Game Drive</h2>
            <p className='text-xs md:text-sm text-gray-200 font-light'>
              Murchison Falls National Park, Uganda's largest and oldest park, offers an unforgettable game drive experience across its vast savannah plains. Home to over 76 mammal species and 450 bird species.
            </p>
          </div>
        </motion.div>
        <motion.div 
          className='col-start-1 col-span-8 lg:col-span-5 w-full h-72 md:h-80 rounded-lg overflow-hidden relative'
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <div className='w-full h-full bg-gradient-to-t from-black/70 to-transparent absolute top-0 left-0 p-4 flex items-end'>
            <p className='text-white font-medium text-sm md:text-base'>Murchison Game Drive</p>
          </div>
          <Image 
            src={'/images/wildlife.jpg'} 
            alt='Murchison Game Drive' 
            width={800} 
            height={600} 
            className='w-full h-full object-cover'
          /> 
        </motion.div> 
      </motion.div>

      {/* Butiaba Escarpment */}
      <motion.div 
        className='grid grid-cols-8 gap-4 md:gap-6'
        variants={itemVariants}
      >
        <motion.div 
          className='col-span-8 row-start-2 lg:row-start-1 lg:col-span-5 w-full h-72 md:h-80 rounded-lg overflow-hidden relative'
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <div className='w-full h-full bg-gradient-to-t from-black/70 to-transparent absolute top-0 left-0 p-4 flex items-end'>
            <p className='text-white font-medium text-sm md:text-base'>Butiaba Escarpments Road View</p>
          </div>
          <Image 
            src={'/images/escap.jpg'} 
            alt='Butiaba Escarpments' 
            width={800} 
            height={600} 
            className='w-full h-full object-cover'
          /> 
        </motion.div>
        <motion.div 
          className='col-span-8 lg:col-span-3 w-full h-72 md:h-80 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg relative overflow-hidden'
          whileHover={{ y: -5 }}
        >
          <div className='absolute bottom-4 p-4 md:p-6'>
            <motion.div 
              className='text-red-600 font-bold text-2xl rounded-full h-12 w-12 flex justify-center items-center bg-white mb-4'
              variants={numberVariants}
              whileHover="hover"
            >
              03
            </motion.div>
            <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>Butiaba Escarpments</h2>
            <p className='text-xs md:text-sm text-gray-200 font-light'>
              Perched above the eastern shores of Lake Albert, the Butiaba Escarpment offers stunning views and a glimpse into Uganda's past. Once a key transport hub in the 1930s, it now draws visitors for its dramatic landscapes.
            </p>
          </div>
        </motion.div> 
      </motion.div>

      {/* Mise Caves */}
      <motion.div 
        className='grid grid-cols-8 gap-4 md:gap-6'
        variants={itemVariants}
      >
        <motion.div 
          className='col-span-8 lg:col-span-3 w-full h-72 md:h-80 bg-gradient-to-br from-purple-900 to-purple-700 rounded-lg relative overflow-hidden'
          whileHover={{ y: -5 }}
        >
          <div className='absolute bottom-4 p-4 md:p-6'>
            <motion.div 
              className='text-red-600 font-bold text-2xl rounded-full h-12 w-12 flex justify-center items-center bg-white mb-4'
              variants={numberVariants}
              whileHover="hover"
            >
              04
            </motion.div>
            <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>Mise Caves</h2>
            <p className='text-xs md:text-sm text-gray-200 font-light'>
              Tucked away in the lush hills of Kapchorwa near Sipi Falls, Mise Caves offer a unique blend of natural beauty and cultural heritage. Surrounded by waterfalls and coffee plantations.
            </p>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-8 lg:col-span-5 w-full h-72 md:h-80 rounded-lg overflow-hidden relative'
          whileHover="hover"
          variants={imageHoverVariants}
        >
          <div className='w-full h-full bg-gradient-to-t from-black/70 to-transparent absolute top-0 left-0 p-4 flex items-end'>
            <p className='text-white font-medium text-sm md:text-base'>Mise Caves</p>
          </div>
          <Image 
            src={'/images/cave2.jpg'} 
            alt='Mise Caves' 
            width={800} 
            height={600} 
            className='w-full h-full object-cover'
          /> 
        </motion.div> 
      </motion.div>
    </motion.div>
  )
}