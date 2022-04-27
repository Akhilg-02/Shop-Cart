import { Button, Card } from "react-bootstrap";
import { Rating } from "./Rating";
import "../Css/style.css";
import { CartState } from "../Context/context";

export const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleAdd = () =>{
      dispatch({
          type:"ADD_TO_CART",
          payload:item
      })
  }

  const handleRemove = () =>{
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:item
    })
  }

  const { image, name, price, fastDelivery, rating, inStock, id } = item;
  return (
    <div className="Products">
      <Card border="primary">
        <Card.Img variant="top" className="img" src={image} alt={name} />

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>
            <span>₹ {price.split(".")[0]}</span>
            <br />
            {fastDelivery ? <h6>Fast Delivery</h6> : <h6>3 Days delivery</h6>}
            <Rating rating={rating} />
          </Card.Subtitle>
          <br />
          {/* // <Button disabled={!inStock}>
                    // {
                    //  !inStock ? "Stock Out" : "Add to Cart"
                    // }
                    // </Button> &nbsp;&nbsp;&nbsp; 
                    <Button variant="danger"> Remove</Button>*/}

          {cart.some((e) => e.id === item.id) ? (
            <Button onClick={
                dispatch({
                    type:"ADD_TO_CART",
                    payload:item
                })
            } 
            
            disabled={!inStock}>
              {!inStock ? "Stock Out" : "Add to Cart"}
            </Button>
            
          ) : (
            <Button onClick = {
                dispatch({
                type:"REMOVE_FROM_CART",
                payload:item
            })}
             variant="danger"> Remove</Button>
            
          )}

        </Card.Body>
      </Card>
    </div>
  );
};
