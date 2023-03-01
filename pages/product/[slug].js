import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import Link from 'next/link';
import { fetcher } from '../../lib/api';

const Product = ({ product }) => {
    
    return (
        <Layout>
            <div className='bg-gray-200 mx-auto xs:w-1/2 lg:w-1/2 rounded-lg my-16 p-8'>
                <li className='p-4 list-none relative'>
                    <Link className='absolute top-0 right-0' href="/products">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 sm:mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </li>
                <div className='max-w-xs mx-auto'>
                <h1 className="text-4xl font-medium text-center">
                    {product.attributes.NAME}
                </h1>               
                {product.attributes.primaryFunction &&
                <div className='text-center pb-1 pt-10'>
                <h4 className="text-lg font-semibold">Primary Function:</h4>
                <p className='text-lg'>{product.attributes.primaryFunction}</p>
                </div>
                } 
             
                {product.attributes.benefits && <div className='text-center'>
                    <h4 className="text-lg font-semibold pt-3">Benefits:</h4>
                    <p className='text-lg'>{product.attributes.benefits}</p>
                </div>}
       
                <div className='text-center pb-1 pt-3'>
                    <h4 className="text-lg font-semibold">Specifications:</h4>
                    <p className='text-lg'>{product.attributes.specification1}</p>
                    <p className='text-lg'>{product.attributes.specification2}</p>
                    <p className='text-lg'>{product.attributes.specification3}</p>
                    <p className='text-lg'>{product.attributes.specification4}</p>
                </div>
                </div>

                <br />

                <div>
                    <Modal />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const pathResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?pagination[pageSize]=400`
    )
    const paths = pathResponse.data.map((path) => ({
      params: { slug: `${path.attributes.slug}` },
    }))
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    const { slug } = params;
    const productResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/product/${slug}?pagination[pageSize]=400`
    )
    return {
        props: {
            product: productResponse.data
        }
    }
}

export default Product;