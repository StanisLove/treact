import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Catalog = ({ products }) => (
  <div>
    {
      products.map(product =>
        <Product key={product.id} {...product} />
      )
    }
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(Product.propTypes)
  )
};

export default Catalog;
