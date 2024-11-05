import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Global } from "@emotion/react";
import { UserReset, adminReset } from "./style/global";
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
import MyPage from "./pages/MyPage/MyPage";
import TestExam2 from "./pages/Test/TestExam2";
import PopularityProduct from "./components/User/BestProductView/BestProduct";
import Category from "./components/Category/Category";
import MainHeader from "./components/MainHeader/MainHeader";
import MainMenu from "./components/MainMenu/MainMenu";
import { AdminRoute, UserPrivateRoute } from "./Hooks/RouterHook";
import ProductSearchPage from "./pages/ProductSearchPage/ProductSearchPage";
import OAuth2LoginPage from "./pages/OAuth2LoginPage/OAuth2LoginPage";



function App() {
    const token = localStorage.getItem("accessToken");
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
            return await instance.get("/user/public/access", {
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
                        // navigate("/");
                        break;
                    }
                }
            },
            onError: (error) => {
                const authPaths = ["/profile"];
                for (let authPath of authPaths) {
                    if (location.pathname.startsWith(authPath)) {
                        navigate("/user/signin");
                        break;
                    }
                }
            },
        }
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
            {location.pathname.startsWith("/admin") ? (
                <>
                    <Global styles={adminReset} />
                    <Routes>
                        <Route path="/admin" element={<AdminSignin />} />
                        <Route path="/admin/main/*" element={<AdminRoute element={<AdminMainPage />} />} />
                    </Routes>
                </>
            ) : (
                <>
                    <MainHeader />
                    <MainMenu />
                    <Global styles={UserReset} />
                    <Routes>
                        <Route path="/*" element={<MainPage />} />
                        <Route path="/product/:productId/*" element={<ProductPage />} />
                        <Route path="/user/signup" element={<SignupPage />} />
                        <Route path="/user/signin" element={<SigninPage />} />
                        <Route path="/user/signin/oauth2" element={<OAuth2LoginPage />} />
                        <Route path="/user/public/product/category" element={<Category />} />
                        <Route path="/user/products/search" element={<ProductSearchPage />} />
                        <Route path="/cart" element={<UserPrivateRoute element={<ShoppingBasket />} />} />
                        {/* <Route path="/order/*" element={<UserPrivateRoute element={<OrderPage />} />} /> */}
                        <Route path="/order/*" element={<OrderPage />} />
                        <Route path="/mypage/*" element={<UserPrivateRoute element={<MyPage />} />} />
                        <Route path="/test" element={<TestExam />} />
                        <Route path="/test2" element={<TestExam2 />} />
                        <Route path="/test3" element={<PopularityProduct />} />
                    </Routes>
                    <MainFooter />
                </>
            )}
        </>
    );
}

export default App;



/*
**퀴숑 (Cuisson)**은 현대인의 바쁜 일상 속에서도 건강하고 맛있는 식사를 즐길 수 있도록 돕는 밀키트 전문 브랜드입니다. 우리는 고객이 가정에서 손쉽게 고급 레스토랑의 맛을 경험할 수 있도록 정성과 노력을 다하고 있습니다. 퀴숑의 밀키트는 신선한 재료와 다양하고 풍부한 레시피로 구성되어 있어, 고객이 집에서도 전문 셰프가 만든 듯한 요리를 손쉽게 완성할 수 있도록 설계되었습니다.

1. 신선한 재료: 퀴숑은 품질 높은 재료를 엄선하여 사용합니다. 신선한 채소, 고기, 해산물 등 모든 식자재는 철저한 품질 관리 아래에서 수확되며, 고객에게 최고의 맛을 선사합니다. 우리는 지속 가능한 방식으로 재배된 원재료를 우선적으로 선택하여 건강을 고려한 제품을 제공합니다.

2. 다양한 메뉴: 고객의 다양한 입맛을 충족시키기 위해 퀴숑은 다양한 종류의 밀키트를 제공합니다. 이탈리안, 아시안, 비건 등 여러 종류의 요리를 손쉽게 시도할 수 있는 레시피를 통해 새로운 미식 경험을 선사합니다. 매주 업데이트되는 새로운 메뉴를 통해 고객은 늘 신선한 선택지를 갖게 됩니다.

3. 간편한 조리법: 퀴숑의 밀키트는 간편한 조리법으로 누구나 쉽게 요리를 즐길 수 있도록 제작되었습니다. 각 밀키트에는 자세한 조리법과 필요한 도구, 그리고 예상 조리 시간이 포함되어 있어, 요리에 익숙하지 않은 분들도 부담 없이 요리를 시작할 수 있습니다. 또한, 요리 과정에서 필요한 모든 재료가 한 박스에 담겨 있어, 추가적인 준비 없이 간편하게 요리를 시작할 수 있습니다.

4. 고객 맞춤형 서비스: 퀴숑은 고객의 피드백을 소중히 여기며, 이를 바탕으로 지속적으로 서비스와 제품을 개선하고 있습니다. 고객이 원하는 제품을 신속하게 배송받을 수 있도록 편리한 주문 시스템과 빠른 배송 서비스를 제공하여, 언제든지 원할 때 맛있는 밀키트를 즐길 수 있도록 노력합니다. 또한, 고객의 건강과 안전을 최우선으로 생각하여 모든 밀키트는 위생적인 환경에서 포장 및 배송됩니다.

5. 커뮤니티와 소통: 퀴숑은 고객과의 소통을 중요시합니다. 우리는 고객이 자신의 요리 경험을 나누고 서로의 팁을 공유할 수 있는 온라인 커뮤니티를 운영하고 있으며, 이를 통해 고객의 만족도를 높이고 있습니다. 고객의 후기를 바탕으로 새로운 메뉴를 개발하고, 지속적으로 더욱 맛있고 건강한 밀키트를 제공하기 위해 노력하고 있습니다.

결론적으로, 퀴숑은 단순한 밀키트 판매를 넘어 고객의 건강과 행복을 지키는 파트너로 자리매김하고자 합니다. 맛과 품질에 대한 확고한 신념을 바탕으로, 모든 고객이 만족할 수 있는 다양한 밀키트를 제공하며, 앞으로도 지속적으로 발전하는 브랜드가 되겠습니다. 퀴숑과 함께 매일 새로운 요리의 즐거움을 경험해 보세요!
*/