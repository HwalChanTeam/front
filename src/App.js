import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Global } from "@emotion/react";
import { reset } from "./style/global";
import SigninPage from "./pages/SigninPage/SigninPage";
import ShoppingBasket from "./pages/ShoppingBasket/ShoppingBasket";
import MainLayout from "./components/MainLayout/MainLayout";
import AdminSignin from "./pages/Admin/AdminSignin/AdminSignin";
import AdminMainPage from "./pages/Admin/AdminMainPage/AdminMainPage";
import TestExam from "./pages/Test/TestExam";
import { QueryClient, useQuery } from "react-query";
import ProductPage from "./pages/ProductPage/ProductPage";
import { instance } from "./apis/util/instance";
import { useEffect, useState } from "react";
import OrderPage from "./pages/OrderPage/OrderPage";
import MainFooter from "./components/MainFooter/MainFooter";
import WishListPage from "./pages/WishListPage/WishListPage";

function App() {
  const token = localStorage.getItem("accessToken");
  const queryClient = new QueryClient();
  const location = useLocation();
  // const navigate = useNavigate();
  const [authRefresh, setAuthRefresh] = useState(true);


  useEffect(() => {
    if (!authRefresh) {
      setAuthRefresh(true);
    }
  }, [location.pathname]);

  const accessTokenValid = useQuery(
    ["accessTokenValidQuery"],
    async () => {
      setAuthRefresh(false);
      return await instance.get("/user/access", {
        params: {
          accessToken: localStorage.getItem("accessToken"),
        },
      });
    },
    // {
    //   enabled: authRefresh,
    //   retry: 0,
    //   refetchOnWindowFocus: false,
    //   onSuccess: (response) => {
    //     const permitAllPaths = ["/user"];
    //     for (let permitAllPath of permitAllPaths) {
    //       if (location.pathname.startsWith(permitAllPath)) {
    //         navigate("/");
    //         break;
    //       }
    //     }
    //   },
    //   onError: (error) => {
    //     const authPaths = ["/profile"];
    //     for (let authPath of authPaths) {
    //       if (location.pathname.startsWith(authPath)) {
    //         navigate("/user/login");
    //         break;
    //       }
    //     }
    //   },
    // }
  );

  // const userInfo = useQuery(
  //   ["userInfoQuery"],
  //   async () => {
  //     return await instance.get("");
  //   },
  //   {
  //     enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
  //     refetchOnWindowFocus: false,
  //   }
  // );


  return (
    <>
      <Global styles={reset} />
      {location.pathname.startsWith("/admin") ? (
        <Routes>
          <Route path="/admin" element={<AdminSignin />} />
          <Route path="/admin/main/*" element={token ? <AdminMainPage/> : <AdminSignin/>} />
        </Routes>
      ) : (
        <>
        <MainLayout>
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/product/:id/*" element={<ProductPage />} />
            <Route path="/user/signup" element={<SignupPage />} />
            <Route path="/user/signin" element={<SigninPage />} />
            <Route path="/basket" element={<ShoppingBasket />} />
            <Route path="/product/like" element={<WishListPage />} />
            <Route path="/order/*" element={<OrderPage />} />
            <Route path="/test" element={<TestExam />} />
          </Routes>
        </MainLayout>
        <MainFooter />
        </>
      )}
    </>
  );
}

export default App;
