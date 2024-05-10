import React, { useState } from 'react'

export default function Task1() {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [inputBoxes, setInputBoxes] = useState([]);
    const [error, setError] = useState("Enter the fields");
    const [loading, setLoading] = useState(false);
    const [InputBoxesQuantity,setInputBoxesQuantity]=useState([])
    console.log(inputBoxes.length)
    const handleAdd = () => {
        if (quantity > 0 && quantity <= 5 && item !== "") {
            if (inputBoxes.length >= 0 && inputBoxes.length <5) {
                setInputBoxes([...inputBoxes, { item: item, quantity: quantity }]);
                setLoading(true);
                setItem("");
                setQuantity(0);
                console.log(inputBoxes);
            } else {
                setError("Boxes should be between 1 to 5")
            }
        } else {
            setError("Please enter the valid fields");
            console.log(error)
        }
    }

    const handleremove = (key) => {
        const filter = inputBoxes.filter((item, index) => {
            return key !== index;
        })
        setInputBoxes(filter)
    }
    return (
        <div>
            <input type="text" value={item} onInput={(e) => setItem(e.target.value)} name='item name' placeholder='please enter item name' />
            <input type="number" value={quantity} onInput={(e) => setQuantity(e.target.value)} id="quantity" placeholder='Please enter quantity' />
            <button onClick={() => handleAdd()}>ADD</button>
            {loading && inputBoxes.map((item, index) => {
                return <div key={index}>
                    <input type="text" />
                    <input type="number" onInput={(e)=>setInputBoxesQuantity(prev=>Number(prev)+Number(e.target.value))} />
                    <button key={index} onClick={() => handleremove(index)}>Remove</button>
                </div>
            })}
            <h1>Total item:{inputBoxes.length}</h1>
            <h1>Sum Of Quantity:{InputBoxesQuantity+inputBoxes.length}</h1>
            <h2>{error}</h2>
        </div>
    )
}

// const handleEdit=()=>{
//     setTodoList(
//         todoList.map((item)=>{
//             if(item.id===edit){
//                 return {...item,name:todo}
//             }
//             return item;
//         })
//     )
//     setToggleSubmit(true);
//     setTodo('');
// }