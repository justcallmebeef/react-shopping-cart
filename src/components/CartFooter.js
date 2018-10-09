import React, { Component } from 'react';

const CartFooter = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{this.state.copyright} {this.state.year}</a>
        </nav>
    );
}

export default CartFooter;
