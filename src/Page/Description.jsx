import React, { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Description = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const { id } = useParams();
  const [isProductDescriptionOpen, setIsProductDescriptionOpen] = useState(false);
  const [isReturnsOpen, setIsReturnsOpen] = useState(false);
  const [data, setData] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Added loading state

  const sizes = [
    { label: 'S', available: 7 },
    { label: 'M', available: 9 },
    { label: 'L', available: 1 },
    { label: 'XL', available: 1 },
    { label: '2XL', available: 0 },
  ];

  useEffect(() => {
    axios.get(`https://bewakoof-server.onrender.com/Product/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  const handleProductDescriptionToggle = () => {
    setIsProductDescriptionOpen(!isProductDescriptionOpen);
  };

  const handleReturnsToggle = () => {
    setIsReturnsOpen(!isReturnsOpen);
  };

  const handleAddToBag = () => {
    const productDetails = {
      size: selectedSize,
      quantity: 1,
      image: data.image ? data.image[0] : '', // Assuming you want to use the first image
      title: data.tittle,
      price1: data.price ? data.price[0] : 0,
      price2: data.price ? data.price[1] : 0,
    };

    axios.post('https://bewakoof-server.onrender.com/cart', productDetails)
      .then(response => {
        console.log('Product added to cart:', response.data);
        toast.success('Product added to cart successfully!'); // Show success message
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
        toast.error('Error adding product to cart.'); // Show error message
      });
  };

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  if (loading) {
    return (
      <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner animation="border" />
      </div>
    );
  }

  const images = data.image || [];
  const price = data.price ? data.price[0] : '';
  const price2 = data.price ? data.price[1] : '';

  return (
    <div className="container" style={{ paddingTop: "150px" }}>
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <div className="slideshow-container">
            <div id="lens"></div>
            <div id="result"></div>
            <div className="row">
              <div className='col-12'>
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className={`slideshow-thumbnails ${index === activeIndex ? 'active' : ''} img-fluid`}
                    onClick={() => changeSlide(index)}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div id="slideshow-items-container">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className={`slideshow-items ${index === activeIndex ? 'active' : ''} img-fluid`}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="tshirt-page">
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#4F5362", lineHeight: "21px" }}>{data.tittle}</h3>
              <h1 style={{ fontSize: "16px", fontWeight: "500", color: "#737373", lineHeight: "20px" }}>{data.Description}</h1>
              <p>{data.name}</p>
              <div className="rating" style={{ backgroundColor: "#F7F7F7", width: "75px", padding: "3px 8px 3px 8px", margin: "12px 0px" }}>{data.rating}</div>
              <div className="price">
                <span className="current-price" style={{ fontSize: "24px", lineHeight: "24px" }}>₹{price}</span>
                <span className="original-price" style={{ fontSize: "14px", lineHeight: "18px" }}>₹{price2}</span>
              </div>
              <p style={{ color: "#949494", fontSize: "12px", lineHeight: "15px" }}>inclusive of all taxes</p>
              <p>{data.material}</p>
              <p>{data.tribeOffer}</p>

              <div className="size-selection">
                <h3>Select Size</h3>
                <div className="sizes">
                  {sizes.map((size) => (
                    <button
                      key={size.label}
                      className={`size-button ${selectedSize === size.label ? 'selected' : ''} ${size.available === 0 ? 'out-of-stock' : ''}`}
                      onClick={() => setSelectedSize(size.label)}
                      disabled={size.available === 0}
                    >
                      {size.label} <span>{size.available} left</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="actions">
                <Link><button className="add-to-bag" onClick={handleAddToBag}>ADD TO BAG</button></Link>
                <button className="wishlist">WISHLIST</button>
              </div>

              <div className="key-highlights" style={{ borderBottom: "4px solid #ccc" }}>
                <h2>Key Highlights</h2>
                <div className="highlight-section">
                  <div className="highlight">
                    <h3>Design</h3>
                    <p>Graphic Print</p>
                  </div>
                  <div className="highlight">
                    <h3>Fit</h3>
                    <p>Oversized Fit</p>
                  </div>
                </div>
                <div className="highlight-section">
                  <div className="highlight">
                    <h3>Neck</h3>
                    <p>Round Neck</p>
                  </div>
                  <div className="highlight">
                    <h3>Occasion</h3>
                    <p>Casual Wear</p>
                  </div>
                </div>
                <div className="highlight-section">
                  <div className="highlight">
                    <h3>Sleeve Style</h3>
                    <p>Half Sleeve</p>
                  </div>
                  <div className="highlight">
                    <h3>Wash Care</h3>
                    <p>Gentle Machine Wash</p>
                  </div>
                </div>
              </div><br />

              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton onClick={handleProductDescriptionToggle}>
                      <Box flex='1' textAlign='left'>
                        Product Description
                      </Box>
                      {isProductDescriptionOpen ? (
                        <Box flex='none' textAlign='right'>
                          -
                        </Box>
                      ) : (
                        <Box flex='none' textAlign='right'>
                          +
                        </Box>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Men's Black Deadpool Graphic Printed Oversized T-shirt
                      Country of Origin - India

                      Manufactured By - Bewakoof Brands Pvt Ltd,
                      Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302

                      Packed By - Bewakoof Brands Pvt Ltd,
                      Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302

                      Commodity - Men's T-Shirt
                    </Text>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton onClick={handleReturnsToggle}>
                      <Box flex='1' textAlign='left'>
                        15 DAY RETURNS
                      </Box>
                      {isReturnsOpen ? (
                        <Box flex='none' textAlign='right'>
                          -
                        </Box>
                      ) : (
                        <Box flex='none' textAlign='right'>
                          +
                        </Box>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text>
                      Easy returns up to 15 days of delivery.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer style={{ paddingTop: "120px" }} /> {/* Add this line */}
    </div>
  );
};

export default Description;
