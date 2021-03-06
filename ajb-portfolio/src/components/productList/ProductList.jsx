import './productList.css'
import Product from "../product/Product";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Lama.</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that you work has been waiting for.. Beautiful homes, stunning portfolio styles & a whole lot more inside.
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}

export default ProductList;