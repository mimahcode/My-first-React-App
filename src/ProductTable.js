import React from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductRow from './ProductRow';

class ProductTable extends React.Component{
render(){
    let productsAsArray = Object.keys(this.props.products).map((jid) => this.props.products[jid]);
    let rows = [];

    productsAsArray.forEach((product) => {
        rows.push(
            <ProductRow product={product} key={product.id} />
        );
    });
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <ProductTableHeader  column="name"/>
                        <ProductTableHeader  column="price"/>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}
}
export default ProductTable;