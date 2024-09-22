import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../store/CartSlice";
function Cart() {
  const cartData = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const handleDelete =(itemId)=>{
    dispatch(removeFromCart(itemId));
  }
  return (
    <div>
      <div className="container">
        <h3 className="text-center text-capitalize py-2 mt-4">your cart</h3>
        <hr />
        <div className="item-wrapper">
          <div className="row">
            <div className="col-lg-10">
              <table className="table w-100">
                <thead>
                  <tr>
                    <th>item</th>
                    <th>price</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartData.map((item)=>(
                      <tr  key={item.id}>
                    <td>
                      <div className="item d-flex gap-2">
                        <div className="item-img">
                            <img src={item.image} alt="productimg" style={{width:"120px",height:"80px"}} />
                        </div>
                        <div className="item-title">
                          <h3 className="px-2 fs-5">{item.title}</h3>
                        </div>
                      </div>
                    </td>
                    <td className="fs-3">{item.price}</td>
                    <td ><button onClick={()=>handleDelete(item.id)} className="btn btn-danger">remove</button></td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
