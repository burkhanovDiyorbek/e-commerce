import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Login } from "./pages/Auth/Login/Login";
import { SignUp } from "./pages/Auth/SignUp/SignUp";
import { NotFound } from "./pages/NotFound/NotFound";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/sign-up" element={<SignUp />} />
        <Route path="home/cart" element={<Cart />} />
        <Route path="home/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
