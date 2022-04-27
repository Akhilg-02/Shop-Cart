import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "../Css/style.css"
import { Rating } from "./Rating"

export const Filter = () =>{

    const [rate , setRate] = useState(2)

    return(
        <div className="Filters">
            <span><h3>Filter Section</h3></span>
            <span>
                <Form.Check
                inline
                label="Max"
                name="group1"
                type="radio"
                id={`inline-1`}
                />
            </span>

            <span>
                <Form.Check
                inline
                label="Min"
                name="group1"
                type="radio"
                id={`inline-1`}
                />
            </span>

            <span>
                <Form.Check
                inline
                label="Plus Delivery"
                name="group1"
                type="checkbox"
                id={`inline-1`}
                />
            </span>

            <span>
                <Form.Check
                inline
                label="Stock out"
                name="group1"
                type="checkbox"
                id={`inline-1`}
                />
            </span>

            {/* ----------------------------------- Rating Part */}

            <span>
            <label>Rating:</label>
            <Rating 
             rating={rate}
             Click = {(ind)=>setRate(ind+1)}
             style={{color:"black"}}
            
            />

            </span>


            {/* ----------------------------------- */}
            <Button varient="warning">Clear Filters</Button>
        </div>
    )
}