import React from 'react'

const Contact = () => {
  return (
    <section className="text-gray-700 body-font relative" id='contact'>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-bold mb-4 text-5xl text-[#214733]">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#002401]">
            For any inquiries please send us a message!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form>
            <div className="flex flex-wrap -m-2 text-[#002401]">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-700 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="duration-300 ease-in flex mx-auto px-8 py-3 text-lg font-semibold rounded bg-[#002401] hover:bg-[#004b01] text-gray-50">
                  Submit
                </button>
              </div>
              <div className="flex flex-col items-center p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="">
                  <span className='text-black font-semibold'>Email</span>
                  <br />
                 <a href="mailto:info.risingtiger@gmail.com">info.risingtiger@gmail.com</a> 
                </p>
                <p className="leading-normal mt-4">
                  <span className='text-black font-semibold'>Address</span>
                  <br />
                  32 Circle Dr. Cubic Homes
                  <br />
                  Brgy. Merville, Paranaque, 1709.
                </p>
                <p className="leading-normal my-5">
                  <span className='font-extrabold'>Contact Number</span>
                  <br />
                  <span></span> (+632) 8822 0355 
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact