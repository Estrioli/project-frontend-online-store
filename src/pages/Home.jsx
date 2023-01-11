import React, { Component } from 'react';
import CategorySearch from '../components/CategorySearch';
import Input from '../components/Input';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Input />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CategorySearch />
      </div>
    );
  }
}
