import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Global } from "@emotion/react";
import { reset } from "./style/global";
import SigninPage from "./pages/SigninPage/SigninPage";
import ShoppingBasket from "./pages/ShoppingBasket/ShoppingBasket";
import MainLayout from "./components/MainLayout/MainLayout";
import AdminSignin from "./pages/Admin/AdminSignin/AdminSignin";
import AdminMainPage from "./pages/AdminMainPage/AdminMainPage";

function App() {
  const location = useLocation();

  return (
    <>
      <Global styles={reset} />
      {location.pathname.startsWith("/admin") ? (
        <Routes>
          <Route path="/admin/signin" element={<AdminSignin />} />
          <Route path="/admin/main" element={<AdminMainPage />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/basket" element={<ShoppingBasket />} />
          </Routes>
        </MainLayout>
      )}
    </>
  );
}

export default App;
