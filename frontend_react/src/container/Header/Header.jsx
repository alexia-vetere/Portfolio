import React from 'react';
import {motion} from 'framer-motion';

import AppsWrap from '../../wrapper/AppsWrap';
import {images} from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1, 
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'> 
    <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{duration: 0.5}}
    className="app__header-info"
    >
      <div className='app__header-badge'> 
      <div className='badge-cmp app__flex'>
        <div>
          <p className='p-text'>Hello, I am</p>
          <p className='head-text'> <span> Alexia</span> </p>
        </div>
      </div>
      <div className='tag-cmp app__flex'>
          <p className='header-text' style={{ color: 'var(--gray-color)', textTransform: 'capitalize' }}>a Software Developer</p>
      </div>
      </div>
    </motion.div>

    <motion.div
    whileInView={{opacity: [0, 1] }}
    transition={{duration: 0.5, delayChildren: 0.5}}
    className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
      whileInView={{scale: [0, 1] }}
      transition={{duration: 1, ease: 'easeInOut'}}
      src={images.circle}
      alt="profile_circle"
      className="overlay_circle"
       />
    </motion.div>

     <motion.div
     variant={scaleVariants}
     whileInView={scaleVariants.whileInView}
     className="app__header-circles"
     >
      {[images.golang, images.react, images.node].map(
        (circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppsWrap(Header, 'home');