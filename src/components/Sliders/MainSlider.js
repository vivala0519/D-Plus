import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import Slides from "./Slides";
import { Image, Text, Icon } from "../../elements";

// 리액트 슬라이더 중에 제일 많이들쓰는거
// 구글링해서 커스텀 css 만들기!
export const Slide = tw(Slider)`
    w-[30.25rem] lg:w-[30.25rem] xl:w-[50.25rem] 2xl:w-[62.5rem]
    ${(props) =>
        props.dimo
            ? `
    bg-transparent mx-auto mt-10 col-start-2 
    col-end-6 row-start-1 col-opacity-90 text-white
    font-sanss2 text-md w-[30.25rem]`
            : ""};
    ${(props) =>
        props.main
            ? `bg-transparent mx-auto
    text-white overflow-hidden text-lg`
            : ""};
`;

const SS = tw.div`
    
`;
const PrevBtn = tw.button`
  z-10 text-white
`;

const NextBtn = tw.button`
  z-10 text-white
`;

const MainSlider = (props) => {
    const slider = useRef(null);

    let hotlists = useSelector((state) => state.mainPage.artist);
    let makeSlides = () => {};
    if (hotlists) {
        makeSlides = () => {
            const arr = [];
            for (let i = 0; i < hotlists.length; i++) {
                arr.push(
                    <SS>
                        <Slides
                            type="main"
                            id={hotlists[i].account_id}
                            image={hotlists[i].account_profile}
                            nickname={hotlists[i].account_nickname}
                            thumnail1={hotlists[i].artWorks[0]}
                            thumnail2={hotlists[i].artWorks[1]}
                            job={hotlists[i].account_job}
                            follow={hotlists[i].is_follow}
                        />
                    </SS>,
                );
            }
            return arr;
        };
    }

    const settings = {
        dots: false, // 슬라이드 밑에 점 보이게
        infinite: true, // 무한으로 반복
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000, // 넘어가는 속도
        slidesToShow: 3, // 3장씩 보이게
        slidesToScroll: 1, // 1장씩 뒤로 넘어가게
        centerMode: true,
        centerPadding: "0px",
        arrows: false,

        // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        responsive: [
            // 반응형 웹 구현 옵션

            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 800, // 화면 사이즈 1200px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="flex-row hidden md:flex">
                <PrevBtn onClick={() => slider?.current?.slickPrev()}>
                    <Icon name="ArrowL" iconSize="48" />{" "}
                </PrevBtn>
                <Slide {...settings} ref={slider}>
                    {makeSlides()}
                    {/* {hotlists.map((item, index) => (<SS><Slides main key={index} info={item}/></SS>))} */}

                    {/* <SS>
                        <Slides type="main" />
                    </SS>
                    <SS>
                        <Slides type="main" />
                    </SS>
                    <SS>
                        <Slides type="main" />
                    </SS> */}
                </Slide>
                <NextBtn onClick={() => slider?.current?.slickNext()}>
                    <Icon name="ArrowR" iconSize="48" />
                </NextBtn>
            </div>
        </>
    );
};

export default MainSlider;
