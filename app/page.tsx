'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Collage from "./components/Collage";
import Head from "next/head";
import dynamic from "next/dynamic";
//const ReCaptcha = dynamic(() => import('./components/Captcha'), {
//  ssr: false, 
//});
declare const grecaptcha: any;

export default function Home() {
  const [navVis, setNavVis] = useState(false)
  const variants = {
    expanded: {
      backdropFilter: 'blur(0px)',
      backgroundColor: 'rgba(24,43,85,0)',
      padding: '1.5rem'
    },
    compact: {
      backdropFilter: 'blur(8px)',
      backgroundColor: 'rgba(24,43,85,0.9)',
      padding:'0.5rem'
    }
  };
  const [animate, setAnimate] = useState(false);
  const [success, setSuccess] = useState(false);
  const imageVariants = {
    compact: { height: '3.5rem' }, 
    expanded: { height: '7rem' }  
  };
  const collage_images =[
    <img key={'0'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/TQ8WpCy.png' alt=''/>,
    <img key={'1'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/13j0svE.png' alt=''/>,
    <img key={'2'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/7sQiXD6.png' alt=''/>,
    <img key={'3'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/4yOpfWH.png' alt=''/>,
    <img key={'4'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/fcCgUdF.png' alt=''/>,
    <img key={'5'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/Nl2Nish.png' alt=''/>,
    <img key={'6'} className='relative rounded-3xl h-auto' src='https://i.imgur.com/i3Uc328.png' alt=''/>
   ]
  const handleScroll = () => {
    const position = window.scrollY;
    setNavVis(position > 0);
  };
  const [formError, setFormError] = useState(false);

  useEffect(()=>{
    const interval = setInterval(() => {
      setAnimate(true)
  }, 3000);
  
    return () => clearInterval(interval);
  },[])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    const form = document.querySelector('form')
    try {
      form?.addEventListener('submit', (e: any)=>{
        e.preventDefault();
        e.stopPropagation()
        const recaptchaResponse = grecaptcha.getResponse();
        if(!(recaptchaResponse.length > 0)){
          setFormError(true)
          throw new Error('invalid captcha')
        }
        //@ts-ignore
        let email = document.getElementById('email-input').value
        if(!(email.length > 0)){
          setFormError(true)
          throw new Error('invalid email')
        }
  
        const formdata = new FormData(e.target);
        //@ts-ignore
        const params = new URLSearchParams(formdata);
  
        if (formError == false) {
          setSuccess(true)
          fetch('https://sendmail-ejqhdbrtsq-uc.a.run.app', {
            method: 'POST',
            body: params,
          })
          .then(res => res.json())
          .then(data => {
            if(data.status == 200){
              console.log('validated')
            }
            else{
              throw new Error('validation error')
            }
          })
          .catch(err => console.error(err))
        }
      })
    } catch (error) {
      console.log(error)
    }
    form?.addEventListener('click', ()=>{
      setFormError(false)
    })

    return () => {
      form?.removeEventListener('submit', (e: any)=>{
        e.preventDefault();
        e.stopPropagation()
        const recaptchaResponse = grecaptcha.getResponse();
        if(!(recaptchaResponse.length > 0)){
          setFormError(true)
          throw new Error('invalid captcha')
        }
        //@ts-ignore
        let email = document.getElementById('email-input').value
        if(!(email.length > 0)){
          setFormError(true)
          throw new Error('invalid email')
        }
  
        const formdata = new FormData(e.target);
        //@ts-ignore
        const params = new URLSearchParams(formdata);
  
        if (formError == false) {
          fetch('https://sendmail-ejqhdbrtsq-uc.a.run.app', {
            method: 'POST',
            body: params,
          })
          .then(res => res.json())
          .then(data => {
            if(data.status == 200){
              console.log('validated')
            }
            else{
              throw new Error('validation error')
            }
          })
          .catch(err => console.error(err))
        }
      });
    };
  }, [])

  return (
      <>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      <section 
      className='relative bg-transparent overflow-hidden'
      style={{
          backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
            }}>
          <div className='md:p-6 p-20'></div>
      {/* Header */}
          <section className=' bg-transparent fixed w-full top-0 z-50'>
            <motion.nav
             animate={navVis?'compact':'expanded'}
             variants={variants}
             className='flex md:justify-between justify-center px-4'>
                <a href='#'>
                  <motion.img
                  variants={imageVariants}
                  animate={navVis ? 'compact' : 'expanded'}
                    className=' md:ml-[2vw] mx-auto md:h-24 h-12 rounded-xl'
                    src='https://i.imgur.com/Cmary4A.png'
                    alt=''
                  />
                </a>
              <div className='hidden xl:flex items-center md:mr-[10vw] sm:mr-auto'>
                <ul className='flex mr-12'>
                  <li className='mr-12'>
                    <a
                      className={`${navVis?' text-white': 'text-coolGray-500'} hover:text-mto-orange font-medium`}
                      href='#services'
                    >
                      Our Services
                    </a>
                  </li>
                  <li className='mr-12'>
                    <a
                      className={`${navVis?' text-white': 'text-coolGray-500'} hover:text-mto-orange font-medium`}
                      href='#Team'
                    >
                      About us
                    </a>
                  </li>
                  <li className='mr-12'>
                    <a
                      className={`${navVis?' text-white': 'text-coolGray-500'} hover:text-mto-orange font-medium`}
                      href='#'
                    >
                      Events
                    </a>
                  </li>
                  <li className='mr-12'>
                    <a
                      className={`${navVis?' text-white': 'text-coolGray-500'} hover:text-mto-orange font-medium`}
                      href='#'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${navVis?' text-white': 'text-coolGray-500'} hover:text-mto-orange font-medium`}
                      href='#FAQ'
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
                <a
                  className='inline-block py-2 px-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium focus:ring-2 focus:ring-coolGray-500 focus:ring-opacity-50 rounded-md transition duration-150'
                  href='#contact-form'
                >
                  Contact Us
                </a>
              </div>
            </motion.nav>

          </section>
      {/* Hero */}
          <section>
            <div className='py-15 md:py-20'>
              <div className='container px-4 mx-auto'>
                <div className='flex flex-wrap xl:items-center -mx-4'>
                  <div className='w-full md:w-1/2 px-4 mb-16 md:mb-0 '>
                    <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-transparent uppercase rounded-9xl rounded'>
                      
                    </span>
                    <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight'>
                    People Looking After People.
                    </h1>
                    <p className='mb-8 text-lg md:text-xl text-coolGray-500 font-medium'>
                    Our commitment as an NDIS services provider ensures that individuals and their families receive support and services adhering to the highest standards of quality and care.
                    </p>
                    <div className='flex flex-wrap'>
                      <div className='w-full md:w-auto py-1 md:py-0 md:mr-4'>
                        <a
                          className='inline-block py-5 px-7 w-full text-base lg:bg md:text-lg leading-4 text-white font-medium text-center bg-mto-blue hover:bg-mto-orange focus:ring-2 focus:ring-white focus:ring-opacity-50 border border-mto-blue rounded-lg shadow-sm transition duration-200'
                          href='#services'
                        >
                          Explore our services
                        </a>
                      </div>
                      <div className='w-full md:w-auto py-1 md:py-0'>
                        <a
                          className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm'
                          href='#contact-form'
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4'>
                    <div className='relative mx-auto md:mr-0 max-w-max'>
                      <img
                        className='absolute z-10 -left-14 -top-12 w-28 md:w-auto'
                        src='svg/circle3-yellow.svg'
                        alt=''
                      />
                      <img className='absolute z-10 -right-7 -bottom-8 w-28 md:w-auto' src='svg/dots3-blue.svg' alt=''/>
                      <Collage items={collage_images} animate={animate}></Collage>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </section>
      {/* How can we help you */}
        <section
          className='py-24 md:pb-32 bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id='services'
        >
          <div className='container px-4 mx-auto'>
            <div className='md:max-w-4xl mb-12 mx-auto text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm'>
                Services
              </span>
              <h1 className='mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter'>
                How can we help you?
              </h1>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
              We strive to provide the highest quality support to ensure the best outcomes for our clients. These supports are some of the many ways we assist individuals with disabilities to find, retain, and thrive in suitable communities.
              </p>
            </div>
            <div className='flex flex-wrap -mx-4 align'>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src="/service-svg/home-svgrepo-com(1).svg"
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Supported Independent Living (SIL)
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  Your NDIS plan includes SIL funding, enabling you to live with friends or acquaintances who also have disabilities, while providing for a support worker to assist you.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src="/service-svg/care-treatment-heart-svgrepo-com(1).svg"
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Respite
                  </h3>
                  <p className='text-coolGray-500 font-medium pt-4'>
                    {"The NDIS refers to respite as 'short term accommodation' or STA, which is designed to offer a break to individuals serving as caregivers."}
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src="/service-svg/community-group-leader-svgrepo-com.svg"
                      />
                    
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Community Access
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Community access involves providing support to ensure you maintain connections with friends, family, and your favorite relaxation spots, as well as to participate in local community events and activities.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src='/service-svg/life-insurance-svgrepo-com.svg'
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Daily Life
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                    Daily life encompasses various activities you undertake daily to ensure your safety, health, and connection with family and friends. This may include tasks like cleaning the house, doing laundry, grocery shopping, or paying bills.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src='/service-svg/life-svgrepo-com.svg'
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    High Intensity Supports
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  High intensity supports in the Australian NDIS are specialized services for individuals with complex needs, requiring skilled providers to manage significant physical or health conditions.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <div className='h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200'>
                  <div className='inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg'>
                    <img
                      width={35}
                      height={35}
                      src="service-svg/work-svgrepo-com.svg"
                      />
                  </div>
                  <h3 className='mb-4 text-xl md:text-2xl leading-tight font-bold'>
                    Employment Related Supports 
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  Employment-related supports in the Australian NDIS are tailored services assisting individuals with disabilities to find, retain, and thrive in suitable employment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Values */}
        <section
          className='py-24 md:pb-32 bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id='services'
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
                      width={100}
                      height={100}
                      src="/values/care.webp"
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
                      width={100}
                      height={100}
                      src="/values/respect.webp"
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
                      width={110}
                      height={110}
                      src='/values/Accountability.webp'
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
                      width={110}
                      height={110}
                      src='/values/Collaboration.webp'
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
      {/* Parralax  */}
        <section
          className='pt-24 bg-white bg-fixed'
          style={{
            backgroundImage: 'url("https://i.imgur.com/sCLl6U6.png")',
            backgroundPosition: 'top',
            backgroundSize: 'cover'
          }}
        >
          <div className=" h-96">
          </div>
          <div className=" h-24">
          </div>
        </section>
      {/* Testimonials */}
        <section
          className='py-24 md:pb-28 bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
        >
          <div className='container px-4 mx-auto'>
            <div className='mb-16'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full'>
                Testimonials
              </span>
              <h2 className='mb-4 text-4xl md:text-5xl leading-tight font-semibold tracking-tighter'>
                Voices of Experience
              </h2>
              <p className='text-xl font-medium text-coolGray-500'>
                {`Discover what our participants have to say about their journey with us. Through their stories, you'll gain insight into the impact of our support and the transformative experiences our participants have undergone. From overcoming challenges to achieving milestones, these testimonials showcase the real-life successes of individuals within our community.`}
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-lg md:text-xl font-medium'>
                  {`"We are really happy with Mighty Orchid Services. <br/><br/>Great to have experienced and most importantly HAPPY staff on our daughter’s care team - when the staff are happy and supported by the management you can really see the difference. Mighty Orchid have been really professional and organised with onboarding, communicating and invoicing from Day 1.<br/><br/>The staff who provide care to my daughter are reliable and fantastic at what they do!"`}
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>
                     - Jodie Crane
                  </h4>
                  <p className='text-lg text-coolGray-400'>
                    {`Participant's Family Member`}
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-xl md:text-2xl font-medium'>
                    {`"Mighty orchid services is like my second family, always very supportive, easy to communicate with and all together wonderful."`}
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>- Rebecca Matthews</h4>
                  <p className='text-lg text-coolGray-400'>Participant</p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-lg md:text-xl font-medium'>
                  {`"I wanted to thank you for choosing David as my Brothers Carer while I was away.
                  <br/><br/>David was very professional at all times but also very caring and understanding, he took very good care of my Brother and
                  house, and I am very grateful for David's help and expertise. I didn't have to worry about anything while I
                  was away, although I did check if they
                  were going ok.
                  <br/><br/>I Appreciate and thank David for everything."`}
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>- Rosemary</h4>
                  <p className='text-lg text-coolGray-400'>{`Participant's Family Member`}</p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0 hidden'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-xl md:text-2xl font-medium'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>John Doe</h4>
                  <p className='text-lg text-coolGray-400'>
                    Customer Success
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0 hidden'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-xl md:text-2xl font-medium'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>John Doe</h4>
                  <p className='text-lg text-coolGray-400'>
                    Backend Developer
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 px-4 hidden'>
                <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                  <h3 className='pb-14 mb-auto text-xl md:text-2xl font-medium'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </h3>
                  <h4 className='mb-1 text-lg font-semibold'>
                    John Doe
                  </h4>
                  <p className='text-lg text-coolGray-400'>
                    Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Meet the team */}
        <section
          className='relative py-24 bg-white hidden'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id='Team'
        >
          <div className='relative container px-4 mx-auto'>
            <div className='mb-16 text-center'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full'>
                Team
              </span>
              <h3 className='mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter'>
                Our team is the best in the business.
              </h3>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Suraj Sathe
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    Director &amp; Founder
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    John Doe
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    Disability Care Manager
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Elen Benitez
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    Registered Nurse
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Kacy Wade
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    Support Worker
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 xl:mb-0'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Alya Levine
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                   Support Worker
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 xl:mb-0'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Rosemary Hernandez
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                   Support Worker
                  </span>
                  <div className='flex items-center justify-center'>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={18}
                        viewBox='0 0 10 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block mr-5 text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={19}
                        height={16}
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M18.8181 2.14597C18.1356 2.44842 17.4032 2.65355 16.6336 2.74512C17.4194 2.27461 18.0208 1.5283 18.3059 0.641757C17.5689 1.07748 16.7553 1.39388 15.8885 1.56539C15.1943 0.824879 14.2069 0.363636 13.1118 0.363636C11.0108 0.363636 9.30722 2.06718 9.30722 4.16706C9.30722 4.46488 9.34083 4.75576 9.40574 5.03391C6.24434 4.87512 3.44104 3.36048 1.56483 1.05894C1.23686 1.61985 1.05028 2.27342 1.05028 2.97109C1.05028 4.29106 1.72243 5.45573 2.74225 6.13712C2.11877 6.11627 1.53237 5.94476 1.01901 5.65967V5.70718C1.01901 7.54979 2.33086 9.08761 4.07031 9.43761C3.75161 9.52336 3.41555 9.57088 3.06789 9.57088C2.82222 9.57088 2.58464 9.54655 2.35171 9.50018C2.8361 11.0125 4.24067 12.1123 5.90483 12.1424C4.6034 13.1622 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4278 6.10416 15.4278C13.1026 15.4278 16.928 9.63115 16.928 4.60397L16.9153 4.11145C17.6627 3.57833 18.3094 2.90851 18.8181 2.14597Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                    <a
                      className='inline-block text-coolGray-300 hover:text-coolGray-400'
                      href='#'
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.6007 0.181818H14.3992C17.3874 0.181818 19.8184 2.61281 19.8182 5.60074V14.3993C19.8182 17.3872 17.3874 19.8182 14.3992 19.8182H5.6007C2.61276 19.8182 0.181885 17.3873 0.181885 14.3993V5.60074C0.181885 2.61281 2.61276 0.181818 5.6007 0.181818ZM14.3993 18.0759C16.4267 18.0759 18.0761 16.4266 18.0761 14.3993H18.076V5.60074C18.076 3.57348 16.4266 1.92405 14.3992 1.92405H5.6007C3.57343 1.92405 1.92412 3.57348 1.92412 5.60074V14.3993C1.92412 16.4266 3.57343 18.0761 5.6007 18.0759H14.3993ZM4.85721 10.0001C4.85721 7.16424 7.16425 4.85714 10.0001 4.85714C12.8359 4.85714 15.1429 7.16424 15.1429 10.0001C15.1429 12.8359 12.8359 15.1429 10.0001 15.1429C7.16425 15.1429 4.85721 12.8359 4.85721 10.0001ZM6.62805 10C6.62805 11.8593 8.14081 13.3719 10.0001 13.3719C11.8593 13.3719 13.3721 11.8593 13.3721 10C13.3721 8.14058 11.8594 6.6279 10.0001 6.6279C8.14069 6.6279 6.62805 8.14058 6.62805 10Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-10 md:mb-0'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Theo Morales
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    Support Worker
                  </span>
                  <div className='flex items-center justify-center'>
                    <a className='inline-block mr-4 hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/facebook.svg' alt='' />
                    </a>
                    <a className='inline-block mr-4 hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/twitter.svg' alt='' />
                    </a>
                    <a className='inline-block hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/instagram.svg' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4'>
                <div className='text-center max-w-xs mx-auto'>
                  <img
                    className='w-24 h-24 mx-auto mb-6 rounded-full'
                    src='/blank-avatar.jpg'
                    alt=''
                  />
                  <h3 className='mb-1 text-lg text-coolGray-800 font-semibold'>
                    Ishmael Dunlop
                  </h3>
                  <span className='inline-block mb-6 text-lg font-medium text-mto-orange'>
                    System Administrator
                  </span>
                  <div className='flex items-center justify-center'>
                    <a className='inline-block mr-4 hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/facebook.svg' alt='' />
                    </a>
                    <a className='inline-block mr-4 hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/twitter.svg' alt='' />
                    </a>
                    <a className='inline-block hover:opacity-80' href='#'>
                      <img src='flex-ui-assets/brands/instagram.svg' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Contact us*/}
        <section
          className='py-20 bg-white'
          style={{
            backgroundImage: 'url("svg/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id="contact-form"
        >
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap mb-24 lg:mb-18 justify-between items-center'>
              <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
                <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full'>
                  Contact
                </span>
                <h3 className='mb-4 text-4xl md:text-5xl text-darkCoolGray-900 font-bold tracking-tighter leading-tight'>
                  Let’s stay connected
                </h3>
                <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                  {"It's never been easier to get in touch with us. Call us or email and we'll get back to you as soon as possible!"}
                </p>
              </div>
              <div className='w-full lg:w-auto'>
                
              </div>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/2 px-4 mb-14 lg:mb-0'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full md:w-1/2 px-4 mb-10'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-mto-blue rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20.21 8.82L14 2.78C13.474 2.27986 12.7759 2.00095 12.05 2.00095C11.3241 2.00095 10.626 2.27986 10.1 2.78L3.89 8.78C3.61408 9.02087 3.39216 9.31731 3.23879 9.64991C3.08541 9.98251 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2193C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2193C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68623C20.6579 9.36189 20.4596 9.06752 20.21 8.82V8.82ZM11.44 4.22C11.593 4.08016 11.7927 4.00262 12 4.00262C12.2073 4.00262 12.407 4.08016 12.56 4.22L18 9.5L12.53 14.78C12.377 14.9198 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9198 11.41 14.78L6 9.5L11.44 4.22ZM19 19.29C18.9871 19.4863 18.8987 19.6699 18.7532 19.8023C18.6078 19.9347 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9347 5.24678 19.8023C5.10132 19.6699 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0726 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.97529 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8586 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8586 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0726 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Email
                      </h3>
                      <a
                        className='text-lg md:text-xl text-coolGray-500 hover:text-mto-orange font-medium transition duration-150'
                        href='mailto:info@mtos.com.au'
                      >
                        Info@mtos.com.au
                      </a>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4 mb-10'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-mto-blue rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Phone
                      </h3>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        {`(08) 5106 7301`}
                      </p>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        {`0433 362 261`}
                      </p>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4 mb-10 md:mb-0'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-mto-blue rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M18.0001 4.48C16.4088 2.8887 14.2505 1.99472 12.0001 1.99472C9.74961 1.99472 7.59135 2.8887 6.00005 4.48C4.40875 6.0713 3.51477 8.22957 3.51477 10.48C3.51477 12.7304 4.40875 14.8887 6.00005 16.48L11.2701 21.76C11.363 21.8537 11.4736 21.9281 11.5955 21.9789C11.7173 22.0297 11.848 22.0558 11.9801 22.0558C12.1121 22.0558 12.2428 22.0297 12.3646 21.9789C12.4865 21.9281 12.5971 21.8537 12.6901 21.76L18.0001 16.43C19.5847 14.8453 20.4749 12.6961 20.4749 10.455C20.4749 8.21395 19.5847 6.06468 18.0001 4.48ZM16.5701 15L12.0001 19.59L7.43005 15C6.5272 14.0963 5.91253 12.9452 5.66375 11.6923C5.41497 10.4393 5.54324 9.14075 6.03236 7.96068C6.52147 6.78062 7.34947 5.77205 8.41168 5.06248C9.4739 4.35291 10.7226 3.97418 12.0001 3.97418C13.2775 3.97418 14.5262 4.35291 15.5884 5.06248C16.6506 5.77205 17.4786 6.78062 17.9677 7.96068C18.4569 9.14075 18.5851 10.4393 18.3364 11.6923C18.0876 12.9452 17.4729 14.0963 16.5701 15ZM9.00005 7.41C8.19277 8.21977 7.73945 9.31657 7.73945 10.46C7.73945 11.6034 8.19277 12.7002 9.00005 13.51C9.59981 14.1108 10.3636 14.5211 11.1957 14.6894C12.0278 14.8577 12.891 14.7766 13.6771 14.4562C14.4632 14.1357 15.1372 13.5903 15.6145 12.8883C16.0918 12.1862 16.3512 11.3589 16.3601 10.51C16.3646 9.94321 16.2554 9.38126 16.039 8.85739C15.8225 8.33352 15.5033 7.85836 15.1001 7.46C14.7037 7.05458 14.2311 6.73154 13.7095 6.50947C13.1878 6.2874 12.6274 6.17068 12.0605 6.16603C11.4935 6.16138 10.9313 6.2689 10.406 6.48239C9.8808 6.69588 9.40297 7.01113 9.00005 7.41ZM13.6901 12.09C13.3111 12.4747 12.8103 12.7159 12.2732 12.7723C11.7361 12.8286 11.1961 12.6966 10.7456 12.3989C10.295 12.1012 9.96185 11.6562 9.80306 11.1401C9.64427 10.6239 9.6697 10.0686 9.87501 9.56916C10.0803 9.06967 10.4528 8.65702 10.9286 8.40174C11.4045 8.14646 11.9543 8.06441 12.484 8.16962C13.0137 8.27483 13.4904 8.56076 13.8326 8.97853C14.1748 9.39631 14.3612 9.91997 14.3601 10.46C14.3455 11.0773 14.0865 11.6635 13.6401 12.09H13.6901Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Office
                      </h3>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        51/5-15 Sharpe Avenue
                      </p>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        Karratha Village Business Center
                      </p>
                      <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                        Karratha, WA 6714
                      </p>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-4'>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex mb-6 items-center justify-center w-12 h-12 bg-mto-blue rounded-full'>
                        <svg
                          className='h-6 text-white'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z'
                            fill='currentColor'
                          />
                        </svg>
                      </div>
                      <h3 className='mb-9 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900'>
                        Socials
                      </h3>
                      <a
                        className='inline-block mr-8 text-mto-blue hover:text-mto-orange transition duration-150'
                        href='https://www.facebook.com/profile.php?id=61557284220147'
                      >
                        <svg
                          width={10}
                          height={18}
                          viewBox='0 0 10 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6.63482 17.7273V9.76603H9.35818L9.76676 6.66246H6.63482V4.68129C6.63482 3.78302 6.88809 3.17086 8.20285 3.17086L9.877 3.17018V0.394245C9.58748 0.357342 8.59366 0.272736 7.43696 0.272736C5.02158 0.272736 3.36797 1.71881 3.36797 4.37392V6.66246H0.636353V9.76603H3.36797V17.7273H6.63482Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                      <a
                        className=' hidden inline-block mr-8 text-mto-blue hover:text-mto-orange transition duration-150'
                        href='#'
                      >
                        <svg
                          width={19}
                          height={16}
                          viewBox='0 0 19 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className=" hidden"
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M18.8181 2.14598C18.1356 2.44844 17.4032 2.65356 16.6336 2.74513C17.4194 2.27462 18.0208 1.52831 18.3059 0.641769C17.5689 1.0775 16.7553 1.39389 15.8885 1.56541C15.1943 0.82489 14.2069 0.363647 13.1118 0.363647C11.0108 0.363647 9.30722 2.06719 9.30722 4.16707C9.30722 4.46489 9.34083 4.75577 9.40574 5.03392C6.24434 4.87513 3.44104 3.3605 1.56483 1.05895C1.23686 1.61986 1.05028 2.27344 1.05028 2.9711C1.05028 4.29107 1.72243 5.45574 2.74225 6.13713C2.11877 6.11628 1.53237 5.94477 1.01901 5.65968V5.70719C1.01901 7.5498 2.33086 9.08762 4.07031 9.43762C3.75161 9.52337 3.41555 9.57089 3.06789 9.57089C2.82222 9.57089 2.58464 9.54656 2.35171 9.50019C2.8361 11.0125 4.24068 12.1123 5.90483 12.1424C4.6034 13.1623 2.96243 13.7683 1.1801 13.7683C0.873008 13.7683 0.570523 13.7498 0.272705 13.7162C1.95655 14.7974 3.95561 15.4279 6.10416 15.4279C13.1026 15.4279 16.928 9.63116 16.928 4.60398L16.9153 4.11147C17.6627 3.57834 18.3094 2.90853 18.8181 2.14598Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                      <a
                        className='inline-block mr-8 text-mto-blue hover:text-mto-orange transition duration-150'
                        href='https://www.facebook.com/profile.php?id=61557284220147'
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox='0 0 24 22'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z'
                            fill='currentColor'
                          />
                          <mask
                            id='mask0_382_5883'
                            style={{ maskType: 'alpha' }}
                            maskUnits='userSpaceOnUse'
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M7.60057 2.18182H16.3991C19.3872 2.18182 21.8182 4.61282 21.8181 7.60075V16.3993C21.8181 19.3872 19.3872 21.8182 16.3991 21.8182H7.60057C4.61264 21.8182 2.18176 19.3873 2.18176 16.3993V7.60075C2.18176 4.61282 4.61264 2.18182 7.60057 2.18182ZM16.3992 20.076C18.4266 20.076 20.076 18.4266 20.076 16.3993H20.0759V7.60075C20.0759 5.57349 18.4265 3.92406 16.3991 3.92406H7.60057C5.57331 3.92406 3.924 5.57349 3.924 7.60075V16.3993C3.924 18.4266 5.57331 20.0761 7.60057 20.076H16.3992ZM6.85709 12.0001C6.85709 9.16424 9.16413 6.85715 11.9999 6.85715C14.8358 6.85715 17.1428 9.16424 17.1428 12.0001C17.1428 14.8359 14.8358 17.1429 11.9999 17.1429C9.16413 17.1429 6.85709 14.8359 6.85709 12.0001ZM8.62792 12C8.62792 13.8593 10.1407 15.3719 11.9999 15.3719C13.8592 15.3719 15.372 13.8593 15.372 12C15.372 10.1406 13.8593 8.62791 11.9999 8.62791C10.1406 8.62791 8.62792 10.1406 8.62792 12Z'
                              fill='white'
                            />
                          </mask>
                        </svg>
                      </a>
                      <a
                        className='inline-block text-mto-blue hover:text-mto-orange transition duration-150'
                        href='https://www.facebook.com/profile.php?id=61557284220147'
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z'
                            fill='currentColor'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2 px-4'>
                <div className='px-4 py-8 md:p-10 bg-coolGray-50 rounded-md'>
                  <form className="pb-2" id="Contact-Form">
                    <div className='mb-6'>
                      <div className='mb-6'>
                      <label
                            className=' w-1/2 pl-2 mb-2 text-coolGray-800 font-medium leading-6'
                            htmlFor=''
                          > Email*
                      </label>
                      <input
                          className={`w-full py-2 px-3 appearance-none border ${formError?'border-red-700':'border-coolGray-200'} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50`}
                          type='email'
                          placeholder='example@domain.com'
                          name="email"
                          id="email-input"
                        />
                        
                      </div>
                      <div className='flex justify-between'>
                        <div className=' w-1/2'>
                          <label
                            className=' w-1/2 pl-2 mb-2 text-coolGray-800 font-medium leading-6'
                            htmlFor=''
                          >
                            Name*
                          </label>
                        </div>
                        <div className='w-1/2 pl-2'>
                          <label
                            className=' w-1/2 mb-2 text-coolGray-800 font-medium leading-6'
                            htmlFor=''
                          >
                            Phone number
                          </label>
                        </div>
                      </div>
                      <div className='flex space-x-1'>
                        <input
                          className={`w-1/2 py-2 px-3 appearance-none border ${formError?'border-red-700':'border-coolGray-200'} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50`}
                          type='name'
                          placeholder='Your Name'
                          name="name"
                          id="name-input"
                        />
                        <input
                          className='w-1/2 py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50'
                          type='name'
                          placeholder='+61 0433 362 261'
                          name="phone"
                          defaultValue={'Not provided'}
                          id="phone-input"
                        />
                      </div>
                    </div>
                    <div className='mb-6'>
                      <label
                        className=' pl-2 block mb-2 text-coolGray-800 font-medium leading-6'
                        htmlFor=''
                      >
                        Message*
                      </label>
                      <textarea
                        className={`block h-32 md:h-52 w-full py-2 px-3 appearance-none border ${formError?'border-red-700':'border-coolGray-200'} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50 placeholder-coolGray-300 resize-none`}
                        name="message"
                        placeholder='Your message...'
                        id="message-input"
                      />
                      <p className='text-sm pb-1 pt-2 text-coolGray-500'> Fields marked with a * are required</p>
                    </div>
                    <div className='g-recaptcha' id="captcha" data-sitekey="6Le9vE4pAAAAAO9bbV569h_GxwUGcs2sE5Yiq6SH"></div>
                    {
                    //<ReCaptcha></ReCaptcha>
                    }
                    <div className='pt-3'>
                      
                      <button type="submit" value={'Submit'} className='w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-mto-blue hover:bg-mto-orange focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50 rounded-md shadow-sm transition duration-150'>
                        Send
                      </button>
                    </div>
                  </form>
                  {success?
                    <div className="flex items-center p-4 mb-4 text-sm text-black rounded-lg bg-green-300" role="alert">
                      <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                      </svg>
                      <span className="sr-only">Info</span>
                      <div>
                        <span className="font-medium">Success!</span> We will get back to you as soon as posible
                      </div>
                    </div>
                    :
                    <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* FAQ */}
        <section
          className='pt-24 bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: 'center',
          }}
          id='FAQ'
        >
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mb-16'>
              <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium rounded-full shadow-sm'>
                FAQ
              </span>
              <h2 className='mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter'>
                Frequently Asked Questions
              </h2>
              <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
                Additional information can be found on the <a href="https://www.ndis.gov.au/" className=" underline text-mto-blue">NDIS website</a>
              </p>
            </div>
            <div className='flex flex-wrap pb-16 -mx-4'>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  How to access NDIS funds?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  To access NDIS funds, first confirm your eligibility based on age, residency, and disability criteria through the NDIS website or an NDIS representative. Then, complete an Access Request Form, develop your NDIS plan with an NDIS planner or Local Area Coordinator, and choose how to manage your funds (NDIA-managed, plan-managed, or self-managed). Finally, select service providers and use the funds as outlined in your plan. For any assistance, contact the NDIS or a local NDIS provider.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  How to access NDIS services?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  To access NDIS services, start by confirming your eligibility and then become an NDIS participant by submitting an Access Request Form with necessary documentation. Once approved, work with an NDIS planner to create a plan that includes the services you need. Choose service providers that align with your plan and coordinate with them to receive your services. For guidance, reach out to the NDIS or consult with an NDIS knowledgeable professional.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  Am I eligible?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  Eligibility for NDIS depends on age (under 65 years), residency status (Australian citizen, permanent resident, or Protected Special Category Visa holder), and the nature of your disability (permanent and significant impact on your daily life). Visit the <a href="https://www.ndis.gov.au/" className=" underline text-mto-blue">NDIS website</a> or contact an NDIS representative for a detailed assessment of your eligibility.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8 xl:mb-0'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  How do I apply?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  To apply for NDIS, start by filling out an Access Request Form (ARF), available on the <a href="https://www.ndis.gov.au/" className=" underline text-mto-blue">NDIS website</a> or through an NDIS office. Provide detailed information about your disability and how it affects your daily activities, along with supporting documentation from healthcare professionals. Submit the completed form to the NDIS for review.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  How is My NDIS Plan Reviewed and Updated?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  Your NDIS plan is typically reviewed annually by the NDIA. During the review, you can discuss your current supports, the progress towards your goals, and any changes in your needs. Based on this, your plan can be adjusted and updated to ensure it continues to meet your requirements effectively. You can also request a review at any time if there are significant changes in your circumstances. 
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 px-4'>
                <div className='md:max-w-xs'>
                  <h3 className='mb-6 text-xl text-coolGray-900 font-bold'>
                  Can I Change My NDIS Service Providers?
                  </h3>
                  <p className='text-coolGray-500 font-medium'>
                  {"Yes, as an NDIS participant, you have the flexibility to change your service providers if you're not satisfied with the current services or find someone better suited to your needs. This is part of the NDIS's emphasis on participant choice and control. Inform your current provider and the NDIA about the change, especially if it affects your plan's budget or service agreements."}
                  </p>
                </div>
              </div>
            </div>
            <div className='relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-mto-blue rounded-md overflow-hidden'>
              <img
                className='absolute top-0 left-0 h-full w-full object-cover'
                src='flex-ui-assets/elements/pattern-dark.svg'
                alt=''
              />
              <div className='relative max-w-max mx-auto text-center'>
                <h3 className='mb-2 text-2xl md:text-5xl leading-tight font-bold text-white tracking-tighter'>
                  Have any additional questions?
                </h3>
                <p className='mb-6 text-base md:text-xl text-coolGray-400'>
                Feel free to send us an email, and we will respond to you with personalised information for you.
                </p>
                <a
                  className='inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-green-50 bg-mto-orange hover:bg-white hover:text-gray-950 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm transition duration-150'
                  href='#contact-form'
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div className='h-64 bg-mto-orange' />
        </section>
      {/* Footer */}
        <section
          className='bg-white'
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
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
                    href='#services'
                  >
                    Our Services
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#Team'
                  >
                    About us
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
                  >
                    Events
                  </a>
                </div>
                <div className='w-full md:w-auto p-3 md:px-6'>
                  <a
                    className='inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium'
                    href='#'
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
                    href='#contact-form'
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
            <a href="https://www.onslowcci.com.au/"><img className=" w-72 p-5 mt-10" src="other-assets/Occi.svg"></img></a>
          </div>
        </section>
      </>
  );
}


