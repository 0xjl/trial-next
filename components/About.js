import Image from 'next/image';

const About = () => {
  return (
    <section id='about-us' >
      <div className="text-center min-h-screen bg-top bg-contain bg-no-repeat xl:bg-[url('/about-bg.svg')]">
        <h2 className="xl:text-[#bddebd] text-[#004b01] text-6xl text-bold lg:p-2 xl:pt-6">
          Rising Tiger Enterprises
        </h2>
            <p className="xl:text-[#bddebd] text-[#004b01] m-3 text-2xl">We specialize in importing plant powder extracts and plant health extracts
            </p>
            <p className="xl:text-[#bddebd] text-[#004b01] text-2xl">
              Our goal is to help people achieve optimal health and well-being through the use of our products.
            </p>
            <section className="xl:mt-[10em] p-4 lg:p-8 text-[#004b01]">
            <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
              <div className='bg-fixed'>
            <Image 
              className='rounded-lg mx-auto md:max-w-xl xl:max-w-2xl'
              src={"/core1.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              />
              </div>
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-4xl font-bold">Integrity</h3>
                <p className="text-2xl my-6 lg:mx-20 text-[#004b01]">Rising Tiger Enterprises is a company that specializes in trading health products with products that you can trust.</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
            <Image 
              className='rounded-lg mx-auto md:max-w-xl xl:max-w-2xl'
              src={"/core2.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              />
              <div className="flex flex-col justify-center flex-1 p-6 ">
                <h3 className="text-4xl font-bold">Trust</h3>
                <p className="text-2xl my-6 lg:mx-20 text-[#004b01]">We are committed to providing high-quality, safe, and effective products to our customers. 
           </p></div>
              </div>
	          </div>
          </section>
          <section className="p-4 lg:p-8 text-[#004b01]">
            <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">
            <Image 
              className='rounded-lg mx-auto md:max-w-xl xl:max-w-2xl'
              src={"/core3.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-4xl font-bold">Transparency</h3>
                <p className="text-2xl my-6 lg:mx-20 text-[#004b01]">We believe in being transparent about our products and our ingredients, and we work closely with suppliers to ensure that the products we sell meet meet your expectations.</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse">
            <Image 
              className='rounded-lg mx-auto md:max-w-xl xl:max-w-2xl'
              src={"/core4.jpg"}
              width="0"
              height="0"
              sizes='100vw'
              style={{width: "100%", height: "auto"}}
              />
              <div className="flex flex-col justify-center flex-1 p-6 ">
                <h3 className="text-4xl font-bold">Customer Service</h3>
                <p className="text-2xl my-6 lg:mx-20 text-[#004b01]">We are also known for providing excellent customer service and support to our clients. Our goal is to help people achieve optimal health and well-being through the use of our products.
                </p>
                </div>
              </div>
	            </div>
          </section>
      </div>
    </section>
  )
}

export default About;