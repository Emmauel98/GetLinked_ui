import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Custom_Cursor = ({position}) => {
  return (
    <motion.div 
    animate={{
      scale: [1, 1.5, 1.2, 1.5, 1],
      transition:{
        type: "tween",
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }
    }}
        className='fixed bg-purple-500
        w-[1vw] h-[2vh] z-[1000] rounded-full
        ring-1 ring-purple-300 mix-blend-screen
        pointer-events-none' 
        style={{left: `${position.x}px`, top:`${position.y}px`}}
        ></motion.div>
  )
};

Custom_Cursor.propTypes = {
    position: PropTypes.object.isRequired,
}

export default Custom_Cursor;