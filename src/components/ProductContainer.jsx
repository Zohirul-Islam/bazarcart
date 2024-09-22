import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { addToCart } from "../store/CartSlice";
function ProductContainer() {
  const [product, setProduct] = useState([]);
 
  
  const dispatch = useDispatch();
  const handleAdd =(product)=>{
    dispatch(addToCart(product));
  }
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      
      setProduct(data);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="product-header">
        <h4 className="d-flex justify-content-center align-items-center py-3 border-bottom">
          {" "}
          our product
        </h4>
      </div>
      <div className="product-wrapper ">
            <div className="container">
            <div className="row">
          {product.map((item) => (
            <div key={item.id} className="col-lg-3">
              <div className="card m-2">
                <img
                  className="card-img-top img-fluid cart-img"
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  <a onClick={()=>handleAdd(item)} href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
      </div>
    </div>
  );
}

export default ProductContainer;
