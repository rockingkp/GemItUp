import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'



const ProductScreen = ({match}) => {        //match is a prop
    const product = products.find(p=> p._id === match.params.id)  

    return (
        <>
        <Link className='btn btn-secondary my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
            <Image className='my-3' src={product.image} alt={product.name} fluid />

            </Col>
            <Col md={3}>
            <ListGroup variant="flush" >
                <ListGroup.Item>
                <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                <h6>{`${product.carats} carats`}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6><Rating value={product.rating} text={`${product.numReviews} reviews`} /></h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6>{`Price: Rs. ${product.price}`}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    {`Desciption: ${product.description}`}
                </ListGroup.Item>

            </ListGroup>
            </Col>
            <Col md={3}>
            <Card>
                <ListGroup variant='flush' >
                <ListGroup.Item>
                <Row>
                    <Col>
                        Price :
                    </Col>
                    <Col>
                       <strong> Rs. {product.price}</strong>
                    </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col>
                        Status :
                    </Col>
                    <Col>
                       {product.countInStock >0 ? "In Stock" : "Out of Stock" }
                    </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item className="button-center">
                    <Button className='btn-block' type='button' disabled={product.countInStock ===0} >
                    Add to Cart
                    </Button>
                </ListGroup.Item>

                </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ProductScreen
