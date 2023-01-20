import Image from 'next/image';

const Featured = () => {
  return (
    <div className="bg-transparent text-black">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl text-[#004b01] font-extrabold sm:text-4xl">Featured Products</h2> </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
      <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Acai Berry Extract'
              src={"/picture-11.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Acai Berry Extract</h2>
    </div>
    
  </div>
        </div>
      <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Black Berries'
              src={"/picture-1.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Garcinia Cambogia</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              src={"/picture-14.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Ginger Root Extract</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Black Berries'
              src={"/picture-10.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Tonkat Ali</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden "
              src={"/picture-15.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
              
          </div><div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Spirulina</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              src={"/picture-16.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Gingko Biloba</h2>
    </div>
  </div>
        </div>
      
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden "
              src={"/picture-13.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
              
          </div><div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Guarana Extract</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Black Seeds'
              src={"/picture-2.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div><div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Stevia</h2>
    </div>
  </div>
        </div>  
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              src={"/picture-12.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Inuline Powder</h2>
    </div>
  </div>
        </div>
       
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              src={"/picture-9.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Spinach Powder</h2>
    </div>
  </div>
        </div> 
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Coriander Powder'
              src={"/picture-4.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">L-Glutathione Powder</h2>
    </div>
  </div>
        </div>
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Fenugreek Seeds'
              src={"/picture-7.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div>  <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Fenugreek Seed Extract</h2>
    </div>
  </div>
        </div>
       
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Fennel Seeds'
              src={"/picture-8.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div> <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Fennel Seed Extract</h2>
    </div>
  </div>
        </div>
      <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
          <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Black Pepper'
              src={"/picture-5.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div>
             <div className="mt-2">
          <h2 className="text-xl text-center font-semibold tracking-wide">Black Pepper</h2>
          </div>
        </div>
        </div>
      
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Chili Powder'
              src={"/picture-3.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div><div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Chili Powder</h2>
    </div>
    
  </div>
        </div>
     
      
        <div className="flex">
        <div className="mx-auto max-h-80 max-w-xs p-4 rounded-3xl shadow-md bg-gradient-to-r from-[#cccce6] to-[#f3f3ff] text-black">
        <div className='rounded-3xl overflow-hidden'>  
              <Image 
              className="rounded-3xl h-auto w-full hover:scale-110 ease-in duration-300 overflow-hidden"
              alt='Picture of Celery Seeds'
              src={"/picture-6.jpg"}
              width="0"
              height="0"
              sizes="100vh"
              style={{ width: '100%', height: 'auto' }}
              />
          </div>  <div className="mt-2">
      <h2 className="text-xl text-center font-semibold tracking-wide">Celery Seed Extract</h2>
    </div>
    
  </div>
        </div>
       
      </dl>
    </div>
  </div>
  )
}

export default Featured