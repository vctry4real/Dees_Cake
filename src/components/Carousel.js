"use client"

import React, { useState } from "react";

import CardContents from "./CardContents";
import MenuData from "./MenuData";


function Carousel() {

    const [cards, setCards] = useState(MenuData);

    const handleLeftClick = (isLeft) => {
        const prevState = [...cards];
        // find next inactive card index - top
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;
        // maximize pos
        prevState.find((f) => f.idx === nextCardIdx).pos =
            Math.max.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) + 1;

        // update state
        setCards(prevState);
    };

    const handleRightClick = () => {
        const prevState = [...cards];
        // find next inactive card index - bottom
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).idx;
        // minimize pos
        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) - 1;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;

        // update state
        setCards(prevState);
    };

    return (
        <div className="w-full h-full flex flex-col gap-[32px] ">
            <div className=" w-full flex items-center">
                <div className=" w-full pb-[32px]">
                    <h4 className="text-xl/[30px] text-secondaryText font-bold">our dishes</h4>
                    <h3 className="text-4xl font-bold ">New Arrivals</h3>
                </div>
                <div className=" w-full flex items-center gap-x-3 justify-end ">
                    <button
                        className="bg-yellow-300 text-xl flex items-center justify-center cursor-pointer rounded-full w-12 h-12"
                        onClick={() => handleLeftClick()}
                    >
                        {"<"}
                    </button>
                    <div
                        className="bg-lightGreen text-xl flex items-center justify-center cursor-pointer rounded-full w-12 h-12"
                        onClick={() => handleRightClick()}
                    >
                        {">"}
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center gap-x-[64px] justify-between">
                {cards
                    .filter((f) => f.active === true)
                    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                    .map((item, index) => (
                        <CardContents
                            key={index}
                            src={item.src}
                            alt={item.text}
                            title={item.title}
                            
                        />
                    ))}
            </div>

        </div>
    );
}

export default Carousel;