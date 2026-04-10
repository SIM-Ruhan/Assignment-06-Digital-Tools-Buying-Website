import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {


  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);


  const handleRemove = (id) => {
    const updatedCart = carts.filter(item => item.id !== id);
    setCarts(updatedCart);
    toast.success("Item removed successfully");
  };


  const handlePayment = () => {
    setCarts([]);
        toast.success("Payment confirmed successfully");
  };

  return (
    <div className="p-10 mx-auto">

      <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>

   
      {carts.length === 0 ? (
        <p className="text-gray-500 text-center text-2xl p-5">No items added</p>
      ) : (
        <>
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 mb-4 p-4 rounded-xl bg-[#F2F2F2]"
            >
              <div className='flex items-center gap-4'>
                
                <img
                  className="w-12 h-12 border border-[#ddd] rounded-full p-2"
                  src={item.icon}
                  alt={item.name}
                />

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}/{item.period}</p>
                </div>
              </div>

             
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

        
          <div className="flex items-center justify-between mt-6 p-3">
            <h4 className="text-gray-600">Total:</h4>
            <div className="font-bold text-2xl">${totalPrice.toFixed(2)}</div>
          </div>

       
          <button
            onClick={handlePayment}
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-full text-white font-semibold hover:opacity-90"
          >
            Proceed To Checkout
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;
