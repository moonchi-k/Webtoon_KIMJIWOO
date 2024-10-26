import { useParams } from "react-router-dom";
import styled from "styled-components";

const subPage = [
  {
    id: 0,
    title: "유미의세포들",
    author: "이동건",
    desc: "글/그림 | 512화 완결 · 12세 이용가",
    desc_1: `유미는 지금 무슨 생각을 하고 있을까?`,
    desc_2: `그녀의 머릿속에서 바쁘게 움직이는 세포들 이야기!`,

    imgUrl:
      "https://image-comic.pstatic.net/webtoon/651673/thumbnail/thumbnail_IMAG21_fba9683b-260e-4a07-984c-deda6d87f62d.jpg",
  },
  {
    id: 1,
    title: "마루는 강쥐",
    author: "모죠",
    desc: "글/그림 | 화요웹툰 · 전체연령가",
    desc_1: `우리 집 강아지 마루가 사람이 되었다, 그것도 5살 아이로!`,
    desc_2: `강아지 + 어린아이의 무한 에너지와 호기심을 지닌 사고뭉치 강쥐 탄생!`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/796152/thumbnail/thumbnail_IMAG21_26b9c1d8-ca2d-4fc7-87ea-a3334634236a.jpg",
  },
  {
    id: 2,
    title: "썸머 브리즈",
    author: "한경찰",
    desc: "글/그림 | 13화 완결 · 전체연령가",
    desc_1: `낯선 곳에서 낯설지 않은 눈빛의 남자애를 만났다.`,
    desc_2: `여름 바람이 지나가고 나면 우리는..`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/732056/thumbnail/thumbnail_IMAG21_4123103970072868196.jpg",
  },
  {
    id: 3,
    title: "간 떨어지는 동거",
    author: "나",
    desc: "글/그림 | 184화 완결 · 전체연령가",
    desc_1: `어른이 되고자 900년간 노력해왔지만 불의의 사고로 한 여대생에게 여우구슬을 빼앗기게 된 구미호 어르신.`,
    desc_2: `어르신은 사태를 해결하기 위해 그녀에게 동거를 제안하게 되는데...`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/699415/thumbnail/thumbnail_IMAG21_7233968694859411814.jpg",
  },
  {
    id: 4,
    title: "맘마미안",
    author: "미티/구구",
    desc: "글 미티/그림 구구 | 102화 완결 · 12세 이용가",
    desc_1: `아들보다 어려진 엄마?!`,
    desc_2: `다 큰 아들의 목숨을 건 엄마의 뒷바라지!`,
    imgUrl:
      "https://image-comic.pstatic.net/webtoon/729326/thumbnail/thumbnail_IMAG21_4051041973629432674.jpg",
  },
];

const Wrap = styled.div`
  display: flex;
  padding: 30px;
`;

const Con = styled.div``;

const Img = styled.div`
  width: 193px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
  img {
    width: 100%;
    transition-duration: 0.5s;
  }
  &:hover img {
    transform: scale(1.05);
  }
`;

const Text = styled.div`
  h2 {
    font-weight: 900;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    /* margin-top: 10px; */
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .desc {
    display: flex;
    margin-top: 10px;
  }

  h4 {
    font-size: 12px;
    color: #666;
  }

  p {
    font-size: 14px;
    /* width: 250px; */
  }
`;

const Tag = styled.div`
  display: flex;
  margin-top: 10px;
  .tag {
    padding: 3px;
    background-color: #f6f6f6;
    color: #666;
    font-size: 12px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
`;
const Sub = () => {
  const { id } = useParams();
  return (
    <Wrap>
      <Con>
        <Img>
          <img src={subPage[id].imgUrl} alt="썸네일" />
        </Img>
      </Con>
      <Text>
        <h2>{subPage[id].title}</h2>
        <div className="desc">
          <h3>{subPage[id].author}</h3>
          <h4>{subPage[id].desc}</h4>
        </div>
        <p>{subPage[id].desc_1}</p>
        <p>{subPage[id].desc_2}</p>
      </Text>
    </Wrap>
  );
};

export default Sub;
