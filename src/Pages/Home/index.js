import React, { Component } from 'react';

import api from '../../services/api';

import { Link } from 'react-router-dom';

import { async } from 'q';
import { tsParenthesizedType } from '@babel/types';

import { Container } from './styles';

export default class Home extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page -1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page +1;

        this.loadProducts(pageNumber);
    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <Container>
                {products.map(product => (
                <article key = {product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/products/${product._id}`} >Access</Link>
                </article>
                ))}
                <div>
                    <button disabled={page === 1} onClick={this.prevPage} >Back</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage} >Next</button>
                </div>
            </Container>
        )
    }
}
