import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./ components/Header";
import Sub from "./pages/Sub";
import styled from "styled-components";
import PageNotFound from "./pages/PageNotFound";

const Wrap = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <Wrap>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sub/:id" element={<Sub />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </HashRouter>
    </Wrap>
  );
};

export default Main;
