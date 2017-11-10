import React from 'react';
import {ListGroup, ListGroupItem, Grid, Row, Col, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import products from '../data/exampleData.json'
import ProductList from './ProductList.jsx'


export default class ECommerce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {products:products, filteredItems:products,filter:'NA'}
  }

  handleChangeFilter(event){//changing the filter size modifies the currently visible data
    var currentProducts  = [];
    var sizeFilter = event.target.value;
    if (sizeFilter === 'NA'){
      currentProducts = this.state.products;
    } else {
      currentProducts = this.state.products.filter(product => product.size.indexOf(sizeFilter) !== -1)
    }
    this.setState({filteredItems:currentProducts})
  }

  render() {
    return (
      <div class="container-fluid">
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={6}><h3>Women's tops</h3></Col>
            <Col xs={6} md={6}>
              <FormGroup controlId="filterId">
                <ControlLabel></ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeFilter.bind(this)}>
                  <option value="NA">Filter by size</option>
                  <option value="XS">Extra Small</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <br>
          </br>
          <ProductList products={this.state.filteredItems} />
        </Grid>
      </div>
    )
  }
}

