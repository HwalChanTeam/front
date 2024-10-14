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

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();
  const navigate = useNavigate();
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
      return await instance.get("/auth/access", {
        params: {
          accessToken: localStorage.getItem("accessToken"),
        },
      });
    },
    {
      enabled: authRefresh,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        const permitAllPaths = ["/user"];
        for (let permitAllPath of permitAllPaths) {
          if (location.pathname.startsWith(permitAllPath)) {
            navigate("/");
            break;
          }
        }
      },
      onError: (error) => {
        const authPaths = ["/profile"];
        for (let authPath of authPaths) {
          if (location.pathname.startsWith(authPath)) {
            navigate("/user/login");
            break;
          }
        }
      },
    }
  );

  const userInfo = useQuery(
    ["userInfoQuery"],
    async () => {
      return await instance.get("/user/me");
    },
    {
      enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
      refetchOnWindowFocus: false,
    }
  );


  return (
    <>
      <Global styles={reset} />
      {location.pathname.startsWith("/admin") ? (
        <Routes>
          <Route path="/admin" element={<AdminSignin />} />
          <Route path="/admin/main/*" element={<AdminMainPage />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/user/signup" element={<SignupPage />} />
            <Route path="/user/signin" element={<SigninPage />} />
            <Route path="/basket" element={<ShoppingBasket />} />
            <Route path="/test" element={<TestExam />} />
          </Routes>
        </MainLayout>
      )}
    </>
  );
}

export default App;
