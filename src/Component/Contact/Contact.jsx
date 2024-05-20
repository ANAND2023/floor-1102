import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nd2wkra', 'template_x0dx68t', form.current, {
                publicKey: 's6wMILZMNjUON6OUQ',
            })
            .then(
                (result) => {
                    console.log(result.text)
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (

        <>

            <div

                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572197661119-fe48e3b4734f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGZsb29yfGVufDB8fDB8fHww')",
                 backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: "cover" 
                }}

            >

                {/* <img
        src="https://images.unsplash.com/photo-1572197661119-fe48e3b4734f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9mZmljZSUyMGZsb29yfGVufDB8fDB8fHww"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      /> */}
                <div className="relative bg-gray-900 bg-opacity-20">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                REQUEST FOR A SITE VISIT, <br className="hidden md:block" />
                                
                                    <span className="text-xl">TALK TO OUR EXPERTS</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                               
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-[#ac9066ab] rounded shadow-2xl p-7 sm:p-10">
                                    
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="mb-1 sm:mb-2">
                                            <label

                                                className="inline-block mb-1 text-white font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                placeholder="Anand"
                                                required

                                                className="flex-grow text-white w-full h-12 px-4 mb-2 transition duration-200 bg-[#ac9066ab] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                                type="text" name="user_name"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label

                                                className="inline-block mb-1 text-white font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="anand.doe@example.org"
                                                required

                                                className="flex-grow w-full text-white h-12 px-4 mb-2 transition duration-200 bg-[#ac9066ab] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                type="email" name="user_email"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label

                                                className="inline-block mb-1 text-white font-medium"
                                            >
                                                Message
                                            </label>
                                            <textarea 
                                            rows={7}
                                            cols="5"
                                                placeholder="message"
                                                required
                                                type="text"
                                                className="flex-grow w-full text-white px-4 mb-2 transition duration-200 bg-[#ac9066ab] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                                name="message"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit" value="Send"

                                                className="inline-flex items-center border border-gray-300 justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Send
                                            </button>
                                        </div>
                                      
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Contact