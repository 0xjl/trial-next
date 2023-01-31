import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Link from 'next/link';
import { fetcher } from '../../lib/api';

const Product = ({product}) => {
return(
    <Layout>
        <div className='bg-gray-200 mx-auto xs:w-1/2 lg:w-1/2 rounded-lg my-16 p-8'>
        <li className='p-4 list-none relative'>
            <Link className='absolute top-0 right-0' href="/products"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
        </li>
        <h1 className="text-4xl font-medium text-center">
            {product.attributes.NAME}
        </h1>
        <p className='text-base text-center italic'>{product.attributes.scientificName}</p>
        <div className='text-center'>
            <h4 className="font-medium p-2">Primary Function:</h4>
            <p className='text-lg'>{product.attributes.color}</p>
        </div>
        <div className='text-center'>
            <h4 className="font-medium p-2">Benefits:</h4>
            <p className='text-lg'>{product.attributes.benefits}</p>
        </div>
        <div className='text-center'>
            <h4 className="font-medium p-2">Specifications:</h4>
            <p className='text-lg'>{product.attributes.ingredient1}</p>
            <p className='text-lg'>{product.attributes.ingredient2}</p>
            <p className='text-lg'>{product.attributes.appearance}</p>
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