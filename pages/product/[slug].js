import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';

const Product = ({product}) => {
return(
    <Layout>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
          <span className="animate-text bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
            {product.attributes.NAME}
          </span>
        </h1>

        <h4 class="font-bold">Appearance:</h4>
        <p>{product.attributes.appearance}</p>
        <br />
        <h4 class="font-bold">Color:</h4>
        <p>{product.attributes.color}</p>
        <br />
        <h4 class="font-bold">Specifications:</h4>
        <p>{product.attributes.ingredient1}</p>
        <p>{product.attributes.ingredient2}</p>
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