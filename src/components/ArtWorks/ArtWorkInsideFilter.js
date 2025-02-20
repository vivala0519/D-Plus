import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { searchArtwork, orderByLike, orderByFollow, orderByTime } from "../../redux/modules/artWork";
import { useLocation } from "react-router-dom";
import { Icon, Text } from "../../elements";
import tw from "tailwind-styled-components";

const Grid = tw.div` 
flex flex-col md:flex-row justify-between md:px-4 xl:px-8
`;

const FilterBtn = tw.button`
 bg-white rounded-full max-w-[24.375rem] h-[3rem] px-7
 border-2 border-dgray-200 box-border flex flex-row justify-center items-center
`;

const InnerLine = tw.hr`
border h-6 mx-3
`;

const SInput = tw.input`
border-2 border-dgray-200 rounded-full max-w-[24.375rem] h-[3rem]
box-border px-12 relative w-full md:w-fit
`;

const TextCSS = tw.p`
flex flex-row justify-center items-center gap-1 font-min1 Text-tiny
text-dgray-300 hover:text-dgray-400
hover:border-dgray-400 active:text-dpurple-300
`;

const ColorSpan = tw.span`
hover:text-dgray-500 active:text-dpurple-300
`;

const ArtWorkInsideFilter = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const visitor_account_id = sessionStorage.getItem("account_id");
    const [category, setCategory] = useState("");

    useEffect(() => {
        setCategory(location.pathname.split("/")[3]);
    }, [location]);

    // console.log('location: ', location.pathname.split('/')[3]);
    // console.log('location state: ', location.state.category);
    console.log("category: ", category);
    // const category = location?.state.category;
    // if (location.state) {
    //     category = location?.state.category;
    // }
    // console.log(category);
    const ByLike = () => {
        dispatch(orderByLike({ category, dispatch }));
    };

    const ByTime = () => {
        dispatch(orderByTime({ category, dispatch }));
    };

    const ByFollow = () => {
        dispatch(orderByFollow({ category, visitor_account_id, dispatch }));
    };

    const keyPress = (e) => {
        if (e.key == "Enter") {
            const keyword = e.target.value;
            dispatch(searchArtwork({ keyword, visitor_account_id, dispatch }));
            // console.log('enter', e.target.value);
        }
    };

    return (
        <>
            <Grid>
                <FilterBtn>
                    <TextCSS onClick={ByLike}>
                        <Icon name="HeartE" iconSize="14" />
                        <ColorSpan>인기순</ColorSpan>
                    </TextCSS>
                    <InnerLine />
                    <TextCSS onClick={ByTime}>
                        <Icon name="Time" iconSize="14" />
                        <ColorSpan>최신순</ColorSpan>
                    </TextCSS>
                    <InnerLine />
                    <TextCSS onClick={ByFollow}>
                        <Icon name="User" iconSize="14" />
                        <ColorSpan>팔로우 디자이너</ColorSpan>
                    </TextCSS>
                </FilterBtn>
                <div className="relative">
                    <SInput placeholder="Search" type="text" onKeyPress={keyPress} />
                    <Icon name="Search" className="absolute inset-3 Text-dgray-500 w-10" />
                </div>
            </Grid>
        </>
    );
};

export default ArtWorkInsideFilter;
