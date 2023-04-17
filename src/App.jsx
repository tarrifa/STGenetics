import { useCallback, useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Hambuger from "./components/shared/Hambuger";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#FAFAFA] w-full min-h-screen">
      <ShopContextProvider>
        <Sidebar showMenu={showMenu} />
        <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
        {/* Menu mobile */}
        <nav className="bg-[#4E342E] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          
          <button onClick={toggleOrders} className="text-white p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="md:p-8 p-4">
            {/* Header */}
            <Header />
            {/* Content */}
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Hambuger/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </main>
      </ShopContextProvider>
    </div>
  );
}

export default App;
