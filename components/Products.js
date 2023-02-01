import Link from 'next/link';
import { useState } from 'react';


const Products = ({ products }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <>
      <div className="container mx-auto flex flex-col text-center">
        <h1 className='text-5xl font-bold mb-5'>
          Products
        </h1>
        <div className='flex'>
          <input
            className='p-0 max-w-[175px] text-base'
            type="text"
            placeholder="Search Product"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className=''>
          <ul className="mx-auto mt-2 xs:columns-1 md:columns-2 xl:columns-3 gap-0">
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
                          <div className="flex border border-black pl-4 select-none cursor-pointer bg-gradient-to-r from-[#def6e2c0] to-[#f3fff4b8] text-[#002401] rounded-sm transition duration-500 ease-in-out hover:text-green-700 transform hover:shadow-lg p-1">
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