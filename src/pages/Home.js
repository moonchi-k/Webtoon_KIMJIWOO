import styled from "styled-components";
import { Link } from "react-router-dom";
const conData = [
  {
    id: 0,
    url: "https://image-comic.pstatic.net/webtoon/651673/thumbnail/thumbnail_IMAG21_fba9683b-260e-4a07-984c-deda6d87f62d.jpg",
    title: "유미의 세포들",
    author: "이동건",
  },

  {
    id: 1,
    url: "https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg",
    title: "마루는 강쥐",
    author: "모죠",
  },

  {
    id: 2,
    url: "https://image-comic.pstatic.net/webtoon/732056/thumbnail/thumbnail_IMAG21_4123103970072868196.jpg",
    title: "썸머 브리즈",
    author: "한경찰",
  },

  {
    id: 3,
    url: "https://image-comic.pstatic.net/webtoon/699415/thumbnail/thumbnail_IMAG21_7233968694859411814.jpg",
    title: "간떨어지는 동거",
    author: "나",
  },

  {
    id: 4,
    url: "https://image-comic.pstatic.net/webtoon/729326/thumbnail/thumbnail_IMAG21_4051041973629432674.jpg",
    title: "맘마미안",
    author: "미티/구구",
  },
];
const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 20px 30px;
`;

const Wrap = styled.div`
  display: flex;
  padding-left: 30px;
`;

const ConWrap = styled.div`
  width: 100%;
  /* box-sizing: border-box; */
  /* padding: 0 30px; */
  display: flex;
`;

const Con = styled.div`
  /* display: flex; */
  h3 {
    font-weight: 700;
  }
  h4 {
    font-size: 14px;
  }
`;

const ConImg = styled.div`
  width: 200px;
  height: 260px;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  img {
    display: block;
    width: 200px;
    height: 260px;
    transition-duration: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Status = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  .box {
    width: 17px;
    height: 13px;
    border: 1px solid #ff4747;
    border-radius: 3px;
    color: #ff4747;
    font-size: 14px;
    text-align: center;
    margin-right: 5px;
  }
`;

const Home = () => {
  return (
    <>
      <Title>
        <h2>지우's PICK! 웹툰</h2>
      </Title>
      <Wrap>
        {conData.map((con) => (
          <ConWrap key={con.id}>
            <Link to={`/sub/${con.id}`}>
              <Con>
                <ConImg
                  style={{
                    backgroundImage: `url(${con.url}`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <img src={con.url}></img>
                </ConImg>
                <Status>
                  <div className="box">UP</div>
                  <h3>{con.title}</h3>
                </Status>
                <h4>{con.author}</h4>
              </Con>
            </Link>
          </ConWrap>
        ))}
      </Wrap>
    </>
  );
};

export default Home;
