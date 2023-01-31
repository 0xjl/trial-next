import Products from '../components/Products'
import { fetcher } from '../lib/api';
import Layout from '../components/Layout'

const ProductList = ({ products }) => {
    return(
        <Layout>
              <Products products={products} />
        </Layout>
)
}

export default ProductList;

export async function getStaticProps(){
const productResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products/`
    );
    return {
    props: {
        products: productResponse,
    },
}
}