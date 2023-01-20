import Link from 'next/link';
import { useState } from 'react';

const Products = ({ products }) => {
  const [searchTerm, setSearch] = useState('')
  return (
    <div className='flex flex-col text-center'>
      <h1 className='text-5xl md:text-6xl font-extrabold leading-tighter mb-4'>
        <span className='animate-text bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-200 py-2'>
        Products
        </span>
      </h1>
    <div>  
      <input
      className='shadow appearance-none border rounded max-w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      type="text"
      placeholder="Search our products here"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      />
    </div>
   <div> 
    <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {products &&
          products.data.filter((val) => {
            if (searchTerm === '') {
              return val;
            } else if (
              val.attributes.NAME.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
            return false;
          }).map((product) => {
            return (
              <li key={product.id} className="text-center py-1 border-b border-gray-100 truncate fill">
                <Link className='cursor-pointer text-gray-500 text-sm hover:text-gray-700' href={`product/` + product.attributes.slug}>
                 {product.attributes.NAME}
                 </Link>
              </li>
            );
          })}
      </ul>
      </div>
      </div>
 
  );
};

export default Products;