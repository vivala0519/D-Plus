import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryArtwork, artworkPageLoad } from "../../redux/modules/artWork";
import { Title, Text, Icon } from "../../elements";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col justify-center items-center w-full h-full rounded-xl
`;

const Box = tw.div`
flex flex-col gap-2 py-4 bg-white px-5 rounded-xl mt-1
`;

const TabBtn = tw.button`
flex flex-row py-2 px-2 font-min1 text-tiny hover:bg-dpurple-100 rounded-lg gap-x-2
`;

const ArtWorkFilter = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    let dispatch = useDispatch();
    const ClickCategory = (e) => {
        // console.log(e.target.value);
        const category = e.target.value;
        console.log(category);
        // if (category === "all") {
        //     dispatch(artworkPageLoad(dispatch));
        // } else {
        dispatch(categoryArtwork({ category, dispatch }));
        navigate(`list/${category}`, {
            state: {
                category: category,
            },
        });
        // }
    };
    return (
        <>
            <Grid>
                <Box>
                    <Title size="5" className="ml-1">
                        카테고리
                    </Title>
                    <TabBtn value="all" onClick={ClickCategory}>
                        🌈 전체보기
                    </TabBtn>
                    <TabBtn value="ui" onClick={ClickCategory}>
                        📱  UI/UX
                    </TabBtn>
                    <TabBtn value="graphic" onClick={ClickCategory}>
                        🎨 그래픽디자인
                    </TabBtn>
                    <TabBtn value="branding" onClick={ClickCategory}>
                        📠 브랜딩/편집디자인
                    </TabBtn>
                    <TabBtn value="package" onClick={ClickCategory}>
                        🎁 패키지 디자인
                    </TabBtn>
                    <TabBtn value="product" onClick={ClickCategory}>
                        🏷️ 제품 디자인
                    </TabBtn>
                    <TabBtn value="typo" onClick={ClickCategory}>
                        📝 타이포그래피
                    </TabBtn>
                    <TabBtn value="video" onClick={ClickCategory}>
                        🎬 영상/모션그래픽
                    </TabBtn>
                    <TabBtn value="crafts" onClick={ClickCategory}>
                        🧶 공예
                    </TabBtn>
                    <TabBtn value="fashion" onClick={ClickCategory}>
                        👗 패션
                    </TabBtn>
                    <TabBtn value="game" onClick={ClickCategory}>
                        🎮 게임/캐릭터 디자인
                    </TabBtn>
                    <TabBtn value="interior" onClick={ClickCategory}>
                        🏠 건축/인테리어/환경 디자인
                    </TabBtn>
                    {/* <TabBtn>🗃️ 기타</TabBtn> */}
                </Box>
            </Grid>
        </>
    );
};

export default ArtWorkFilter;
