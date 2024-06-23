import { useState } from "react"

function MyComponent() {
    const [foods, setFoods] =useState(["apple", "mango", "strawberry"])


    function handleAddFood() {
        
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = " ";

        // setFoods([...foods, newFood]);
        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(<div>
              <h1>List of Food</h1>

              <ul>
                {foods.map((food, index) => 
                                <li key={index} onClick={() => handleRemoveFood(index)}>
                                    {food}</li>)}
              </ul>

              <input type="text" id="foodInput" placeholder="Enter food name" />
              <button onClick={handleAddFood}>Add Food</button>

            </div>)
}

export default MyComponent