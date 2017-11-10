import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Image, Label} from 'react-bootstrap'

const ProductList = ({products}) => {

  var featurePrinter = function(product){//function displays sale, exclusive or nothing depending on product
    var result = ' ';
    if (product.isSale) {
      result = (<Label bsStyle="danger">Sale</Label>)
    } else if (product.isExclusive) {
      result = (<Label bsStyle="success">Exclusive</Label>)
    }
    return result
  }
  return (
    <Row className="show-grid">
      <ListGroup>{products.map((product, ind)=> <Col md={3} sm ={6} xs={12}>
        <ListGroupItem key={ind} >
          <Image src={"client/assets/" + product.productImage} rounded responsive />
          <h4 style={{minHeight:"20px"}}>{featurePrinter(product)}</h4>
          <p>{product.productName}</p>
          <h4>{product.price}</h4>
        </ListGroupItem></Col>)}
      </ListGroup>
    </Row>
    )
}

export default ProductList;
