import React from 'react'

const Contact = () => {
  return (

    <div className='h-6/6 bottom-0 w-[100%]'>
    <div className=' bg-[black] text-white '>
        <h2 className='text-3xl text-center py-6'>Contact Us</h2>
        <div className='flex flex-col w-6/12 ml-[12rem] pt-12 ' >
            <div className='flex flex-row '>
                <div><label>FirstName</label>
                <br/>
                <input
                className='mb-4 py-1 pl-2 text-black'
                 />
                </div>



                <div className='ml-[4rem]'><label>LastName</label>
                <br/>
                <input
                className='mb-4 py-1 pl-2 text-black' />
                </div>



                </div>


                <div className='flex flex-col w-7/12'>
                    <label>Enter Your Email</label>
                    <input 
                    className='mb-4 py-1 pl-2 text-black'/>

                    <label>Enter your Subject</label>
                    <input 
                    className='mb-4 py-2 pl-2 text-black'/>

                    <label>Enter Your Message</label>
                    <textarea className='resize-none h-[10rem] pt-2 pl-2 text-black'></textarea>

                </div>



                <button className='mt-2 mb-6 bg-[none] w-16 border-2 border-white text-white'>Send</button>

                
            </div>
    
    
    </div>
    </div>
  )
}

export default Contact