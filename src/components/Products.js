import React, {useContext} from 'react';
import { Context } from '../context/context';

// Components
import Product from './Product';

const Products = () => {
	const {products, addItem}=useContext( Context);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
