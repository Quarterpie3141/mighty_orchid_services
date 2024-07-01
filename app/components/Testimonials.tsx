export default function Testimonials(){
    return(<section
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
          <div className='flex flex-wrap -mx-4 justify-center'>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8'>
              <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                <h3 className='pb-14 mb-auto text-lg md:text-xl font-medium'>
                {`"We are really happy with Mighty Orchid Services.`}<br/><br/>{`Great to have experienced and most importantly HAPPY staff on our daughter’s care team - when the staff are happy and supported by the management you can really see the difference. Mighty Orchid have been really professional and organised with onboarding, communicating and invoicing from Day 1.`}<br/><br/>{`The staff who provide care to my daughter are reliable and fantastic at what they do!"`}
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
                `}<br/><br/>{`David was very professional at all times but also very caring and understanding, he took very good care of my Brother and
                house, and I am very grateful for David's help and expertise. I didn't have to worry about anything while I
                was away, although I did check if they
                were going ok.`}
                <br/><br/>{`I Appreciate and thank David for everything."`}
                </h3>
                <h4 className='mb-1 text-lg font-semibold'>- Rosemary</h4>
                <p className='text-lg text-coolGray-400'>{`Participant's Family Member`}</p>
              </div>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0'>
              <div className='flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md'>
                <h3 className='pb-14 mb-auto text-xl md:text-xl font-medium'>
                {`
                "I wanted to express my greatest thanks and appreciation to David and his amazing, outstanding efforts for our son. David goes above and beyond for Lee!
                We've not had a supportive worker like David.`} <br/><br/> {`If Lee doesn’t want to engage, Dave will find things to do in the home to support our family,
                this means a lot and is really appreciated.
                Lee and Dave’s bond is growing and it is very noticeable!`} <br/><br/> {`
                Thank you Mighty Orchid for your amazing support to our family"
                `}
                </h3>
                <h4 className='mb-1 text-lg font-semibold'>-Tash, Gary, Lee, Nijel and Roxy</h4>
                <p className='text-lg text-coolGray-400'>
                  {`Participant's Family`}
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
      </section>)
}