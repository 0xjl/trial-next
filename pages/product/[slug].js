import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Link from 'next/link';
import { fetcher } from '../../lib/api';

const Product = ({product}) => {
return(
    <Layout>
        <div className='bg-gray-200 mx-auto xs:w-1/2 lg:w-3/4 rounded-lg my-16 p-8'>
        <li className='p-4 list-none relative'>
            <Link className='absolute top-0 right-0' href="/products"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
        </li>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r from-[#bddebd] to-teal-400 py-2">
            {product.attributes.NAME}
          </span>
        </h1>
    
        <div>
            <h4 className="font-bold">Appearance:</h4>
            <p>{product.attributes.appearance}</p>
        </div>

        <br />

        <div>
            <h4 className="font-bold">Color Range:</h4>
            <p>{product.attributes.color}</p>
        </div>
      
        <br />

        <div>
            <h4 className="font-bold">Specifications:</h4>
            <p>{product.attributes.ingredient1}</p>
            <p>{product.attributes.ingredient2}</p>
        </div>

        <br />

        <div>
            <Modal/>
        </div>
        </div>
    </Layout>
    )
}

export async function getServerSideProps({params}) {
    const { slug } = params;
    const productResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/product/${slug}`
        )
    return {
        props: {
            product: productResponse.data
        }
    }
}

export default Product;