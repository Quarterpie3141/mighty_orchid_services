
export default function Footer(){

    return(
        <section
          className='bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='pt-24 pb-0 mx-auto max-w-4xl'>
              <a className='block md:mx-auto mb-5 max-w-max' href='#'>
               <div className=" pb-11">
                <img src="https://i.imgur.com/Cmary4A.png" className=" rounded-lg md:h-24 h-12"></img>
               </div>
              </a>
              <div className='flex flex-wrap justify-center -mx-3 lg:-mx-6'>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='/#services'
                  >
                    Our Services
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='/#values'
                  >
                    About us
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='/#'
                  >
                    Events
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='/careers#'
                  >
                    Careers
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#FAQ'
                  >
                    FAQ
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='/#contact-form'
                  >
                    Contact Us
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-coolGray-100' />
          <div className='container px-4 mx-auto'>
            <p className='py-10 md:pb-10 text-lg md:text-xl text-coolGray-400 font-medium text-center'>
               Mighty Orchid Services Pty Ltd.
            </p>
          </div>
          <div className='container px-4 mx-auto'>
            <p className=' text-lg md:text-xl text-coolGray-400 font-medium text-center'>
               A proud member of:
            </p>
          </div>
          <div className=' flex justify-center px-4 mx-auto'>
            <a href="https://kdcci.com.au/"><img className="w-72 p-5 mr-40 " src="other-assets/KDCCI.jpg"></img></a>
            <a href="https://www.onslowcci.com.au/"><img className=" w-72 p-5 mt-10" src="other-assets/OCCI.svg"></img></a>
          </div>
        </section>
    )
}