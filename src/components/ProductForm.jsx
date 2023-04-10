import { useState } from "react";
import './ProductForm.css';

export default function(props){
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };

        props.onSaveProduct(productData);
        setTitle('');
        setDate('');
    }
    return(
        <form action="" onSubmit={submitHandler}>
            <div className="new-product_control">
                <label htmlFor="">Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler} />
            </div>

            <div className="new-product_control">
                <label htmlFor="">Date</label>
                <input type="date" name="" min='2023-01-01' max='2023-12-12' id="" onChange={dateChangeHandler} />
            </div>

            <div className="new-product_button">
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}