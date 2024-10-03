import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Global } from "@emotion/react";
import { reset } from "./style/global";
import SigninPage from "./pages/SigninPage/SigninPage";
import ShoppingBasket from "./pages/ShoppingBasket/ShoppingBasket";

function App() {
  return (
    <>
      <Global styles={reset} />
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/basket" element={<ShoppingBasket />} />
    </Routes>
    </>
  );
}

export default App;
