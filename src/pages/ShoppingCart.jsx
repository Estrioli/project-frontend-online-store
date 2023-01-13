import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

export default class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // console.log(cart);
    this.setState({ cart });
  }

  renderCards = (cart) => cart.map((prod) => (
    <ProductCard
      key={ prod.id }
      price={ prod.price }
      title={ prod.title }
      thumbnail={ prod.thumbnail }
      id={ prod.id }
      qty={ prod.qty }
    />
  ));

  render() {
    const { cart } = this.state;
    return cart?.length
      ? this.renderCards(cart)
      : (
        <div
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio

        </div>
      );
  }
}
