
import { motion ,AnimatePresence} from "framer-motion"
import React,{ Fragment, useState } from "react";


// variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    }
  }
};
const childrenVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 100,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      mass: 1.5,
      stiffness: 200,
    }
  }
};

const picsContainerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: 2.5,
    }
  }
};

const picsVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 4,
    }
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    originX: "left",
  }
};


export const Framer = () => {

  return (
    <Fragment>
      
      <div className="text-holder">
        <motion.div
          className="text-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="page-title" variants={childrenVariants}>
            Shakespeare's Sonnet II
          </motion.h1>
          <motion.p className="intro-paragraph" variants={childrenVariants}>
            When forty winters shall besiege thy brow, And dig deep trenches in
            thy beauty's field, Thy youth's proud livery so gazed on now, Will
            be a totter'd weed of small worth held ...
          </motion.p>
        
        </motion.div>
      </div>
      <div className="pic-holder">
        <motion.div
          className="pics"
          variants={picsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://images.unsplash.com/photo-1593180803950-3b92a937555d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="The world of Shakespeare"
            className="pic1"
          />
          <img
            src="https://images.unsplash.com/photo-1591522347564-fc8444afdc33?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
            className="pic2"
          />
        
        </motion.div>
      </div>
    </Fragment>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
