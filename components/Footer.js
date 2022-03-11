import React from 'react'

const Footer = () => {
  return (
    <div className='h-[250px] bg-[blue] w-full text-[white]'>


      <div className=''>
        
        <div className='block flex flex-col  w-4/12 mx-8'>
          <h2 className='my-12'>E commerce</h2>

          <p>123 Web Street,<br/> Demo State</p>
          </div>


        {/* <p>FAQ</p>
        <p>Forum</p>
        <p>Terms and Conditions</p> */}
      </div>

      <div className='w-12/12 justify-center flex col  text-center '> 

      <h2 className='text-base flex flex-col justify-center pt-12'>Copyright &copy; Moyowa 2022</h2>
      

      </div>

     

        

        </div>
  )
}

export default Footer