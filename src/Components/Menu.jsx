import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
    const [loading, setLoading] = useState(true);
    const [foods, setFoods] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/foods');
                const starterItems = [];
                const biryaniRiceItems = [];
                const pizzaItems = [];
                
                // Organize food items into respective arrays based on categories
                response.data.forEach(foodItem => {
                  switch (foodItem.CategoryName) {
                    case "Starter":
                      starterItems.push(foodItem);
                      break;
                    case "Biryani/Rice":
                      biryaniRiceItems.push(foodItem);
                      break;
                    case "Pizza":
                      pizzaItems.push(foodItem);
                      break;
                    default:
                      break;
                  }
                });
                
                // Create an array to hold all category arrays
                const categorizedFoodItems = [
                  { category: "Starter", items: starterItems },
                  { category: "Biryani/Rice", items: biryaniRiceItems },
                  { category: "Pizza", items: pizzaItems }
                ];
                
                setFoods(categorizedFoodItems);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching food data:', error.message);
            }
        };

        fetchData();
    }, []);

    // Function to add item to cart
    const addItemToCart = (item, option) => {
        // Add your logic to add item to cart here
        const newItem = { 
            id: item._id, 
            name: item.name, 
            price: option === 'half' ? item.options[0].half : item.options[0].full,
            option: option
        };
        setCartItems(prevItems => [...prevItems, newItem]);
    };

    // Count the number of times each item appears in the cart
    const itemCounts = cartItems.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
    }, {});

    // Log the items in the cart to the console
    useEffect(() => {
        console.log('Items in cart:', cartItems);
    }, [cartItems]);

    return (
      <>
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            {foods.map(category => (
              <div key={category.category}>
                <h1 style={{ color: 'white' }}>{category.category}</h1>
                <div className="row g-5">
                  {category.items.map(item => (
                    <div key={item._id} className="col-lg-3 col-md-6">
                      <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{item.name}</h4>
                      <img src={item.img} alt={item.name} className="img-fluid mb-3" />
                      <p className="mb-2">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <button className="btn btn-primary btn-sm rounded-pill" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => addItemToCart(item, 'half')}>
                            Half ${item.options[0].half}
                            {itemCounts[item._id] && <span className="badge bg-secondary ms-1 position-relative" style={{ top: '-0.5rem' }}>{itemCounts[item._id]}</span>}
                          </button>
                          <button className="btn btn-primary btn-sm rounded-pill ms-2" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => addItemToCart(item, 'full')}>
                            Full ${item.options[0].full}
                            {itemCounts[item._id] && <span className="badge bg-secondary ms-1 position-relative" style={{ top: '-0.5rem' }}>{itemCounts[item._id]}</span>}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <br /> {/* Add a break after displaying all items of a category */}
              </div>
            ))}
          </div>
          {/* Footer */}
        </div>
      </>
    );
};

export default Booking;
