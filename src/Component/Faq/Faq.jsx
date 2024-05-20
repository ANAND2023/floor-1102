import React, { useState } from 'react';
import { MdArrowRight } from "react-icons/md";
import './Faq.css'
function Collapsible({ title, text }) {
  const [open, setOpen] = useState(false);
  

  const togglePanel = () => {
    setOpen(!open);
  };
 
  return (
    <div className='item'>
      <button onClick={togglePanel} className="collapsible flex justify-between ">{title}
      <span><MdArrowRight className={ ` text-xl ${open ? "rotate-90 duration-500" : "duration-500"} `}/></span>
      </button>
      <div className="faq__content duration-700">
        {open && <div className='duration-700 ease-in-out'>{text}</div>}
      </div>
    </div>
  );
}

function Container() {
  const questionsList = [
    {
      title: 'Where can I get travel vaccines?',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit?',
    },
    {
      title: 'How long do travel vaccines last?',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit?',
    },
    {
      title: 'How long do travel vaccines last?',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit?',
    },
    {
      title: 'How long do travel vaccines last?',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit?',
    },
    {
      title: 'How long do travel vaccines last?',
      text: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit?',
    },
    {
      title: 'How long do travel vaccines last?',
      text: 'text',
    },
    // Rest of your FAQ list
  ];

  const half = Math.floor(questionsList.length / 2);

  return (
    <div>
    
      <div className=''>
        <div className=''>
          {questionsList.map((item, i) =>
            <Collapsible key={i} title={item.title} text={item.text}/>
          )}

        
        </div>
        {/* <div className='col'>
          {questionsList.slice(half).map((item, i) =>
            <Collapsible key={i + half} title={item.title} text={item.text}/>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default function App() {
  return(
    <>
   
    <div

style={{ backgroundImage: "url('https://images.unsplash.com/photo-1468577374753-87c7686a392b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZsb29yJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D')",
 backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "cover",  padding:"50px 0 50px 0"
}}

>

 <div className='w-[80%] mx-auto grid md:grid-cols-2 bg-[#5e3b3b45] p-10 rounded-2xl'>
 <div className=' flex justify-center '>
    
    <img className='w-[400px] rounded-lg' src="https://static.wixstatic.com/media/fa1267_31a6ccc1764b4c6ea094561147364a95~mv2.gif" alt="" />
</div>
 <Container />;
 </div>
   </div>
    </>
  )
  
  
 
}



// import React from "react";
// const questions = [
//     {
//       id: 1,
//       question: 'Popular Articles',
//       answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//       {
//       id: 2,
//       question: 'Fix problems & request removals',
//       answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//       {
//       id: 3,
//       question: 'Browse the web',
//       answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
//         {
//       id: 4,
//       question: 'Search on your phone or tablet',
//       answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
//     },
    
//   ]
  
//  const  FaqSection=(props)=> {    
//     const [searchTerm, setSearchTerm] = React.useState('');
//     const [searchResults, setSearchResults] = React.useState([]);
//     const handleSearchChange = e => {
//       setSearchTerm(e.target.value);
//     };
    
//     // React.useEffect(() => {
//     //   const results = props.data.filter(item=>
//     //     item.question.toLowerCase().includes(searchTerm)
//     //   );
//     //   setSearchResults(results);
//     // }, [searchTerm]);
//     React.useEffect(() => {
//         const results = props.data.filter(item =>
//           item.question.toLowerCase().includes(searchTerm)
//         );
//         setSearchResults(results);
//       }, [searchTerm]);
      
    
//     return (    
//       <div className='container'>
//         <h2 className="heading">How can we help you?</h2>
//         <Searchbar onSearchChange={handleSearchChange}/> 
//         <section className='faq'>
//          {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
//         </section>      
//       </div>
//     )
//   }
//   export default FaqSection
  
//   const Searchbar = props => {
//     const [value, setValue] = React.useState('')
//     const handleChange = (e) => {
//       setValue(e.target.value)
//       props.onSearchChange(e)
//     }
//     return(
//       <form>
//         <svg viewBox="0 0 512 512" width="100" title="search">
//     <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
//   </svg>
//         <input className='searchbar' type='text' placeholder='Describe your issue' onChange={handleChange} value={value}/>      
//       </form>    
//     )
//   }
  
//   const Question = props => {
//    const [isActive, setActive] = React.useState(false);
//    const handleClick = (id) => {
//     setActive(!isActive)
//   }
//     return(
//       <div className="question-wrapper">
//       <div className='question' id={props.id}>
//         <h3>{props.question}</h3>
//         <button onClick={() => handleClick(props.id)}>
//           <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
//     <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
//   </svg>
//         </button>     
//       </div>
//       <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
//       </div>
//     )
//   }
  

//   ReactDOM.render(<FAQ data={questions}/>, document.querySelector('#root'));


// import React, { useState } from 'react';
// import './Faq.css'; // Assuming you have a CSS file for styling

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [rotateAngle, setRotateAngle] = useState(0);

//   const accordion = (index) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//     setRotateAngle((prevAngle) => (prevAngle === 90 ? 0 : 90));
//   };

//   return (
//     <main className="faq__card">
//       <div className="faq__hero">
//         <img
//           src="https://raw.githubusercontent.com/ArtemPonomarenko/FAQ-Accordion/main/images/illustration-woman-online-mobile.svg"
//           alt="section image"
//           className="img"
         
//         />
//       </div>

//       <h2 className="faq__title">FAQ</h2>

//       <div className="acc-container">
//         {data.map((item, index) => (
//           <div key={index}>
//             <button className="acc-btn" onClick={() => accordion(index)}>
//               {item.question}
//             </button>
//             <div
//               className={`acc-content ${
//                 openIndex === index ? 'is-open' : ''
//               }`}
//               style={
//                 openIndex === index
//                   ? { maxHeight: '1000px' }
//                   : { maxHeight: '0' }
//               }
//             >
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// const data = [
//   {
//     question: 'What is the definition of a will?',
//     answer: 'It is a dead giveaway.',
//   },
//   {
//     question: 'What happens to chemists when they die?',
//     answer: 'We barium [bury them].',
//   },
//   // Add more questions and answers as needed
// ];

// export default Faq;



// import React, { useState } from 'react';
// import './Faq.css'; // Assuming you have a CSS file for styling

// const Faq = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const accordion = (index) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <main className="faq__card">
//       <div className="faq__hero">
//         <img
//           src="https://raw.githubusercontent.com/ArtemPonomarenko/FAQ-Accordion/main/images/illustration-woman-online-mobile.svg"
//           alt="section image"
//           className="img"
//         />
//       </div>

//       <h2 className="faq__title">FAQ</h2>

//       <div className="acc-container">
//         {data.map((item, index) => (
//           <div key={index}>
//             <button className="acc-btn" onClick={() => accordion(index)}>
//               {item.question}
//             </button>
//             <div
//               className={`acc-content ${
//                 openIndex === index ? '' : ''
//               }`}
//               style={
//                 openIndex === index
//                   ? { maxHeight: '1000px' }
//                   : { maxHeight: '0' }
//               }
//             >
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>

   
//     </main>
//   );
// };


// const data = [
//   {
//     question: 'What is the definition of a will?',
//     answer: 'It is a dead giveaway.',
//   },
//   {
//     question: 'What happens to chemists when they die?',
//     answer: 'We barium [bury them].',
//   },
//   // Add more questions and answers as needed
// ];

// export default Faq
