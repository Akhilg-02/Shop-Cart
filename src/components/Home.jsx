import { CartState } from "../Context/context"
import { SingleProduct } from "./singleProduct";
import "../Css/style.css"
import { Filter } from "./Filters";

export const Home = () =>{
   const {state:{products}} = CartState();

    console.log(products);
    return(
        <div className="home">
            <Filter/>


            <div className="productBox">
                {
                    products.map((item)=>{
                        return(
                            <>
                            <SingleProduct item={item}  key={item.id} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}