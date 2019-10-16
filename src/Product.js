import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import BuyButton from './Buy';

const Product = ({ title, price }) => (
  <table>
    <tbody>
      <tr>
        <td>Title:</td>
        <td>{title}</td>
      </tr>
      <tr>
        <td>Price:</td>
        <td><Price>{price}</Price></td>
      </tr>
      <tr>
        <td>Buy:</td>
        <td><BuyButton /></td>
      </tr>
    </tbody>
  </table>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: Price.propTypes.children
};

export default Product;
