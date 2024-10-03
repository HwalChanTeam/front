import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { Global } from "@emotion/react";
import { reset } from "./style/global";

function App() {
  return (
    <>
      <Global styles={reset} />
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </>
  );
}

export default App;
