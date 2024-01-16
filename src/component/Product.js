import {useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';

const Product = () => {
const dispatch = useDispatch();
 const {ApiData: products} = useSelector(state => state.products);
   useEffect(()=>{

  // dispathc an action for fetchProducts
  dispatch(getProducts());
 //api
  // fetch('https://fakestoreapi.com/products')
  // .then(data=>data.json())
  // .then(result=>getProducts(result))
  }, [dispatch]);

const addToCart = (product)=>{
  //dispatch add action
  dispatch(add(product))
 
}

  const cards= products.map(product=>(
    <div className='col-md-3' style={{marginBottom: '10px'}}>
       <Card key={product.id} className='h-100'>
        <div className='text-center'>
      <Card.Img variant="top" src={product.image } style={{width: "100px", height: "130px"}}/>
      </div> 
      <Card.Body>
        <Card.Title>{product.title }</Card.Title>
        <Card.Text>
        INR. {product.price}
        </Card.Text>
     
      </Card.Body>
      <Card.Footer style={{backgroundColor: 'white'}}>
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ))
  return (
    <div>
      <h1>product dashboard</h1>
      <div className='row'>
      {cards}
      </div>
    </div>
  )
}

export default Product
