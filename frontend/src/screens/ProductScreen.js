import {useState,useEffect} from 'react';
import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col, Image, Card, ListGroup, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios';




const ProductScreen = ({match}) => {        //match is a prop
    const [product,setProduct] = useState({});  //empty object as individual product is an object not an array.
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data);
        }
        fetchProduct();
    },[])

    return (
        <>
        <Link className='btn btn-secondary my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
            <Image className='my-4' src={product.image} alt={product.name} fluid />

            </Col>
            <Col md={3} className='product-details'>
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
            <Card className='card-layout'>
                <ListGroup variant='flush' >
                <ListGroup.Item>
                <Row>
                    <Col>
                        Price:
                    </Col>
                    <Col>
                       <strong> Rs. {product.price}</strong>
                    </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                <Row>
                    <Col>
                        Status:
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
