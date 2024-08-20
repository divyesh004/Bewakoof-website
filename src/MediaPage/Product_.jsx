import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product_ = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);
  const [cate, setCate] = useState(null);
  const [categoryName, setCategoryName] = useState("Clothes for Men");
  const { str } = useParams()

  const fetchProducts = () => {
    setLoading(true);

    // Prepare params for category filtering
    const params = {
      catagory: str ? str : "",
    };
    if (cate) params.catagory = cate;

    // Fetch products from API
    axios.get("https://bewakoof-server.onrender.com/Product", { params })
      .then((res) => {
        let filteredProducts = res.data;

        // Apply sorting if selected
        if (order === 'asc') {
          filteredProducts.sort((a, b) => a.price[0] - b.price[0]);
        } else if (order === 'desc') {
          filteredProducts.sort((a, b) => b.price[0] - a.price[0]);
        }

        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    // Fetch products whenever category or order changes
    fetchProducts();

    // Update category name dynamically
    setCategoryName(cate ? `${cate} for Men` : "Clothes for Men");
  }, [cate, order]); // Trigger on category or sorting order change

  const clearCategoryFilter = () => {
    setCate(null); // Reset category filter
    setOrder(null)
  };

  if (loading) {
    return (
      <div style={{ padding: "160px", textAlign: "center" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="title-container">
            <h1 className="title">{categoryName}</h1>
            <div className="underline"></div>
          </div>
          <div className="col-12 d-flex flex-wrap">
            <div className="col-lg-3 col-md-4 col-12 my-5">
              <h6 className="text-secondary">Filters</h6>
              <div style={{ padding: "0px 16px", borderBottom: "1px solid #f0f0f0", borderTop: "1px solid #f0f0f0" }}>
                <div className="accordion" id="accordionExample">
                  <div>
                    <h2 className="accordion-header" id="headingOne">
                      <p className="discounte" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Category
                      </p>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body p-0">
                        <p className="discounte text-end" type="button" onClick={clearCategoryFilter}>Clear All</p>
                        <Link onClick={() => setCate("T-shirt")} className="nav-link ps-0 link-secondary">T-shirt</Link>
                        <Link onClick={() => setCate("Shirt")} className="nav-link ps-0 link-secondary">Shirt</Link>
                        <Link onClick={() => setCate("Boxer")} className="nav-link ps-0 link-secondary">Boxer</Link>
                        <Link onClick={() => setCate("Short")} className="nav-link ps-0 link-secondary">Short</Link>
                        <Link onClick={() => setCate("Jogger")} className="nav-link ps-0 link-secondary">Jogger</Link>
                        <Link onClick={() => setCate("Pant")} className="nav-link ps-0 link-secondary">Pant</Link>
                        <Link onClick={() => setCate("Cargo")} className="nav-link ps-0 link-secondary">Cargo</Link>
                        <Link onClick={() => setCate("Pajama")} className="nav-link ps-0 link-secondary">Pajama</Link>
                        <Link onClick={() => setCate("Vests")} className="nav-link ps-0 link-secondary">Vests</Link>
                        <Link onClick={() => setCate("Sliders")} className="nav-link ps-0 link-secondary">Sliders</Link>
                        <Link onClick={() => setCate("Backpack")} className="nav-link ps-0 link-secondary">Backpack</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="accordion-header" id="headingTwo">
                      <p className="discounte" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        Sort By
                      </p>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body p-0">
                        <p className="discounte text-end" type="button" onClick={clearCategoryFilter}>Clear All</p>
                        <Link onClick={() => setOrder('desc')} className="nav-link ps-0 link-secondary">Price: High to Low</Link>
                        <Link onClick={() => setOrder('asc')} className="nav-link ps-0 link-secondary">Price: Low to High</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                {products.map((el) => (
                  <Link to={`/Description/${el.id}`} className="link-dark nav-link" key={el.id}>
                    <span className="bestseller-tag">{el.offer}</span>
                    <img
                      src={el.image[0]}
                      alt={el.Description}
                      className="product-image img-fluid"
                    />
                    <span className="product-rating">{el.rating}</span>
                    <div className="product-cards1">
                      <div className="product-info">
                        <h3 style={{ fontSize: "12px", fontWeight: "700", lineHeight: "15px", color: "#4F5362" }}>{el.brand}</h3>
                        <p style={{ fontSize: "10px", fontWeight: "700", lineHeight: "10px", color: "#737373" }}>{el.Description}</p>
                        <div className="prices">
                          <span className="current-price" style={{ fontSize: "16px", lineHeight: "14px" }}>₹{el.price[0]}</span>
                          <span className="original-price" style={{ fontSize: "12px", lineHeight: "12px" }}>₹{el.price[1]}</span>
                        </div>
                        <div className="tribe-price" style={{ fontSize: "11px", fontWeight: "700", padding: "2px 8px", backgroundColor: "#F7F7F7", width: "153px" }}>
                          {el.Tribe}
                        </div>
                        <div className="material">
                          100% COTTON
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_;
