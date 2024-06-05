import React from 'react'
import './Style.css'
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import Form from '../../Contact/Form';

const Contact = () => {
  
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
      delay: 0.5,
    }
  }
};

  return (
    <>    <section className='contact_us'>
    
   <div className=''> 
   <motion.div class="section-header" 
          variants={containerVariants}
          initial="hidden"
          animate="visible">
      <motion.div class="Contact_container" variants={childrenVariants}>
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </motion.div>
    </motion.div>
    
    <div class="Contact_container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
             <FaHome/>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <FaPhone/>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            <MdEmail/>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        {/* <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div> */}
        <motion.div
        
          variants={picsContainerVariants}
          initial="hidden"
          animate="visible">
              <Form/>
          </motion.div>

      
      </div>
    </div>
   </div>
  </section>
    <div class="col-sm-12 col-md-7">
   
    <div class="mb-4">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin"
        width="100%" height="450" frameborder="0"
        // style="border:0;" 
        allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
   
   
 </div>
 </>

  )
}

export default Contact