import { Route, Routes } from "react-router-dom";
import { Home, Shop, Plant, Blogs, ShoppingCard } from "./pages";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/shoppingcard" element={<ShoppingCard />} />
            <Route path="/plant" element={<Plant />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
