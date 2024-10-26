import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LogoWrap = styled.div`
  width: 200px;
  justify-content: space-between;
  display: flex;
  .logo {
    font-weight: 900;
  }
  .bar,
  .novel,
  .series {
    color: black;
    opacity: 0.2;
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <>
      <Wrap>
        <Link to="/">
          <LogoWrap>
            <div className="logo">NAVER 웹툰</div>
            <div className="bar">|</div>
            <div className="novel"> 웹소설 </div>
            <div className="bar">|</div>
            <div className="series"> 시리즈 </div>
          </LogoWrap>
        </Link>
      </Wrap>
    </>
  );
};

export default Header;
