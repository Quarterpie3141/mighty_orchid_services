export default function Values(){
    return(
        <section
          className='py-24 md:pb-32 bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id='values'
        >
            <div className='container px-4 mx-auto'>
              <div className='max-w-4xl mb-12 text-left'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm'>
                  Values
                </span>
                <h1 className='mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter'>
                  Guiding Principles
                </h1>
                <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                At Mighty Orchid Services, our values define us. Care, Respect, Accountability and Collaboration are at the core of all we do. They guide our commitment to the well-being and success of every individual we support, driving us to create positive impact every day.</p>
              </div>
            <div className='flex flex-wrap -mx-4 align'>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-18 w-18 mb-6 mx-auto items-center justify-center text-white bg-transparent rounded-lg'>
                    <img
                      width={120}
                      height={120}
                      src={`/values/Care.png`}
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Care
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  {`At MTOS, Care is central to our mission. We prioritize empathy and kindness, ensuring each individual's well-being is our top priority. From tailored support plans to attentive staff, we create a nurturing environment where everyone feels valued and supported on their journey to success.`}
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-18 w-18 mb-6 mx-auto items-center justify-center text-white bg-transparent rounded-lg'>
                    <img
                      width={120}
                      height={120}
                      src={`/values/Respect.png`}
                      className=""
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Respect
                  </h3>
                  <p className='text-coolGray-500 font-medium pt-4'>
                    At MTOS, Respect is paramount. We prioritize listening, understanding, and honoring the rights and choices of every individual we care for. By fostering inclusivity and valuing diversity, we create a culture of mutual respect within our community.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-18 w-18 mb-6 mx-auto items-center justify-center text-white bg-transparent rounded-lg'>
                    <img
                      width={130}
                      height={130}
                      src={`/values/Accountability.png`}
                      />
                    
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Accountability
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    At MTOS, Accountability is key. We take ownership, prioritize transparency, and strive for excellence in all we do. Through clear communication and proactive problem-solving, we guarantee reliability and trustworthiness in every interaction.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-18 w-18 mb-6 mx-auto items-center justify-center text-white bg-transparent rounded-lg'>
                    <img
                      width={130}
                      height={130}
                      src={`/values/Collaboration.png`}
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Collaboration
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    At MTOS, Collaboration is key. We believe in teamwork, open communication, and leveraging diverse expertise to achieve success. By working together, we drive innovation and maximize our impact for positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}