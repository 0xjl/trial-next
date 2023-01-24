import Link from 'next/link';
import { useState } from 'react';

const Products = ({ products }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <div className="container flex flex-col text-center box-border ">
      <div className='flex flex-row justify-between items-center'>
      <input
      className='max-w-[300px] shadow appearance-none p-1 mt-[-10px] mb-[2em] border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-700 focus:outline-none'
      type="text"
      placeholder="Search"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      />
      </div>
    <div>
    <ul className="grid mx-auto lg:grid-cols-1 xl:grid-cols-4">
        {products &&
          products.data.filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (
              val.attributes.NAME.toLowerCase().includes(searchTerm.toLowerCase()) || val.attributes.ingredient1.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return false;
          }).map((product) => {
            return (
              <li key={product.id} className="border-gray-400 m-[2px]">
                <Link className='text-xl font-bold' href={`product/` + product.attributes.slug}>
                  <div className="flex justify-center items-center select-none cursor-pointer bg-gradient-to-r from-[#cce6d0c0] to-[#f3fff4b8] text-[#002401] hover:text-[#3b904a] rounded-md p-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
                    {product.attributes.NAME}
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
      </div>
      </div>
  );
};

export default Products;