import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DimoFilter, DimoList } from "../components/Dimo";
import tw from "tailwind-styled-components";
import { Title, Button, CategoryMini, Icon } from "../elements";
import { DimoSlider } from "../components";
import { dimoPageLoad, categoryDimo } from "../redux/modules/dimo";

const SlideBox = tw.div`
row-start-2 col-span-full
`;

const Box = tw.div`
row-start-3
`;

const MobileBtn = tw.button`
bg-dpurple-200  rounded-full p-2 xl:hidden fixed bottom-10 right-5 text-white shadow-md
`;

const Dimo = () => {
    let dimos = useSelector((state) => state.dimo.dimos?.postRecommendationFeed);
    const location = useLocation();
    const navigate = useNavigate();
    const a = location.pathname;
    const b = a.split("/")[2];
    const board = b.toUpperCase();
    // console.log(b);
    const category = "uiux";
    const dispatch = useDispatch();
    // console.log(b);
    let account_id = 0;
    // const id_cookie = getCookie("account_id");
    const id_cookie = sessionStorage.getItem("account_id");
    if (id_cookie) {
        account_id = id_cookie;
        // console.log("account_id: ", account_id);
    }
    const visitor_account_id = account_id;

    const setPage = (e) => {
        console.log(e.target.value);
        const board = e.target.value;
        const category = "uiux";

        dispatch(categoryDimo({ category, dispatch, board, visitor_account_id }));
        // dispatch(dimoPageLoad({ dispatch, board, visitor_account_id }));
    };
    useEffect(() => {
        const board = b.toUpperCase();
        dispatch(categoryDimo({ category, dispatch, board, visitor_account_id }));
    }, [setPage]);

    const goToCreate = () => {
        navigate(`/dimo/create/${b}`, {
            state: {
                title: { b },
            },
        });
    };

    return (
        <>
            <div className="bg-dgray-200 min-h-screen h-[200rem]">
                <div className="xl:grid xl:grid-cols-4 ">
                    <div className="flex flex-row p-4 xl:pl-28 2xl:pl-44 gap-3 h-[7rem] justify-start items-center">
                        {b === "qna" ? (
                            <Title size="5" value="QNA" onClick={setPage} className="text-dpurple-200">
                                <Link to="/dimo/info/uiux">QNA</Link>
                            </Title>
                        ) : (
                            <Title size="5" value="INFO" onClick={setPage} className="text-dpurple-200">
                                <Link to="/dimo/qna/uiux">정보공유</Link>
                            </Title>
                        )}
                    </div>
                    <div className="hidden xl:contents">
                        <div className="col-start-4 w-36 xl:mt-10 2xl:ml-32 ">
                            <Button size="3" onClick={goToCreate}>
                                글쓰기
                            </Button>
                        </div>
                    </div>
                    <SlideBox>
                        <DimoSlider list={b} slidedimo={dimos} />
                    </SlideBox>

                    <Box>
                        <div className="top-0 h-[44rem] invisible fixed xl:visible xl:sticky">
                            <div className=" flex flex-col h-[44rem]">
                                <div className="flex flex-row justify-end items-end self-end w-[18.75rem] h-[44rem]">
                                    <DimoFilter list={b} />
                                </div>
                            </div>
                        </div>
                    </Box>

                    <div className="w-full xl:row-start-3 xl:col-start-2 xl:col-end-5">
                        <div className="w-full h-[200rem]">
                            <DimoList list={b} key="key" />
                            <CategoryMini list={b} />

                            <MobileBtn onClick={goToCreate}>
                                <Icon name="Edit" />
                            </MobileBtn>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dimo;
