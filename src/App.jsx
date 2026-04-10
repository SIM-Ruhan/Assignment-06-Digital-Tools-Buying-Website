import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Banner from './Banner'
import Footer from './Footer'
import StarSection from './StarSection'
import Models from './Models'
import Cart from './Cart'
import StepsSection from './StepsSection'
import PricingSection from './PricingSection'

//http://localhost:5174/
function App() {

  const [activeTab, setTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <StarSection />
    {/* <ToastContainer/> */}
      {/* Tabs */}
      <div className="text-center my-10">
        <div className="tabs tabs-box justify-center bg-transparent">
          <input 
            type="radio" 
            name="tabs" 
            className="tab rounded-full w-30" 
            aria-label="Products" 
            defaultChecked 
            onClick={() => setTab("Products")} 
          />
          <input 
            type="radio" 
            name="tabs" 
            className="tab rounded-full w-30" 
            aria-label={`Cart (${carts.length})`}
            onClick={() => setTab("Cart")} 
          />
        </div>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "Products" && (
        <Models carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "Cart" && (
        <Cart carts={carts} setCarts={setCarts}/>
      )}
<StepsSection/>
<PricingSection/>
      <Footer />
    </>
  )
}

export default App
