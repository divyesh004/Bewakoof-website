import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { toast, ToastContainer, Zoom } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import Paymentpage from './Paymentpage';



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [check, setcheck] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://bewakoof-server.onrender.com/cart');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [products]);

  useEffect(() => {
    const newTotalPrice = products.reduce((acc, product) => {
      return acc + (product.price1 * (quantities[product.id] || 1));
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [products, quantities]);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const removeProduct = async (productId) => {
    try {
      await axios.delete(`https://bewakoof-server.onrender.com/cart/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
      toast.success('Product removed successfully! 🎉', {
        position: "top-right", // Use a string for position
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom, // Optional: Add transition effect
      });
    } catch (error) {
      console.error('Error removing product:', error);
      toast.error('Failed to remove product. 😞', {
        position: "top-right", // Use a string for position
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom, // Optional: Add transition effect
      });
    }
  };


  if (loading) return (
    <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spinner animation="border" />
    </div>
  );

  return (
    <div style={{ paddingTop: "150px" }}>
      <div className="container mb-5">
        <div className="product-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <div className="product-header">
                  <div className="offer">
                    <h3>Buy 3 For 999 offer applicable</h3>
                    <p>Add 2 more items to avail this offer</p>
                  </div>
                  <Link to={"/Men"}>
                    <button className="add-items">Add items</button>
                  </Link>
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <div className="price">
                    <span className="sale-price">₹{product.price1}</span>
                    <del className="sale-price" style={{ fontSize: "10px", color: "gray", fontWeight: "500" }}>₹{product.price2}</del>
                  </div>
                  <div className="offer-badge">
                    <span>%</span>
                    <p>Buy 3 For 999 offer applicable</p>
                  </div>
                  <div className="product-options">
                    <div className="quantity-select">
                      <label htmlFor={`quantity-${product.id}`}>Qty:</label>
                      <select
                        id={`quantity-${product.id}`}
                        value={quantities[product.id] || 1}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      >
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="product-images">
                      <img src={product.image} alt={product.title} />
                    </div>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="remove-button" onClick={() => removeProduct(product.id)}>Remove</button>
                  <button className="wishlist-button">Move to Wishlist</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkout-section">
          <h3>Total Price: ₹{totalPrice}</h3>
          <button className="checkout-button" onClick={() => setcheck(!check)}>{check ? (<Paymentpage totalpaymentprice={totalPrice} />) : ("Proceed to Checkout ")}</button>
        </div>
      </div>
      <ToastContainer style={{ paddingTop: "8%" }} /> {/* Include ToastContainer component */}
    </div>
  );
};

export default ProductList;
