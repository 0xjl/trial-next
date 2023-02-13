import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'


const Products = ({ products }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <>
      <div className="container mx-auto flex flex-col text-center z-5">
        <h1 className='text-5xl font-bold mb-5 text-[#002401]'>
          Products
        </h1>
        <div className='flex'>
          <div className='relative'>
            <input
              className='p-0 max-w-[175px] text-base rounded text-center border-[3px] hover:border-green-800 active:border-green-800 focus:border-green-600 focus:outline-none transition-all duration-300 ease-in'
              type="text"
              placeholder="Search Product"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="absolute top-2 left-1">
              <AiOutlineSearch className='h-[20px]' fill='#002401' />
            </div>
          </div>
        </div>
        <div className="z-0">
          <ul className="mx-auto mt-2 xs:columns-1 md:columns-2 xl:columns-3 gap-0 z-1">
            {products &&
              products.data
                .sort((a, b) => {
                  if (a.attributes.NAME.toLowerCase() < b.attributes.NAME.toLowerCase()) {
                    return -1;
                  }
                  if (a.attributes.NAME.toLowerCase() > b.attributes.NAME.toLowerCase()) {
                    return 1;
                  }
                  return 0;
                })
                .filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.attributes.NAME.toLowerCase().includes(searchTerm.toLowerCase()) || val.attributes.ingredient1.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                  return false;
                })
                .map((product) => {
                  return (
                    <li key={product.id}>
                      <Link className='text-base' href={`product/` + product.attributes.slug}>
                        <div className="flex border border-black pl-4 select-none cursor-pointer bg-gradient-to-r from-[#def6e2c0] to-[#f3fff4b8] text-[#002401] rounded-sm transition duration-500 ease-in-out hover:text-green-700 transform p-1">
                          {product.attributes.shortName || product.attributes.NAME}
                        </div>
                      </Link>
                    </li>
                  )
                })}
          </ul>
        </div>
      </div>
    </>
  );
};


export default Products;