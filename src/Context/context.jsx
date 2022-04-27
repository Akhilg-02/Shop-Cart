import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";


export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    faker.seed(99);

    const products = [...Array(25)].map(()=>({
        id : faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.random.arrayElement([0, 2, 7, 10, 12]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),

    }))

    const init = {
        products:products,
        cart:[]
    }

    const [state , dispatch] = useReducer(cartReducer , init)

    console.log(products);
    return(
        <CartContext.Provider value={{state , dispatch}}>
                {children}
        </CartContext.Provider>
    )
}

//--------------------------------------------

export const CartState = () =>{
    return useContext(CartContext);
}