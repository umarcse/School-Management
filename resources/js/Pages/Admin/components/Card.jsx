import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Card = ({ type, attend }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return (
        <div className="w-[160px]  shadow-sm p-1 pt-2 px-3 bg-blue-500 text-white rounded-lg">
            <div className="flex items-center justify-between  ">
                <p className="text-[9px] py-[2px]  px-2 bg-white text-slate-800 rounded-3xl">{`${year}/${month}/${date}`}</p>
                <HiOutlineDotsHorizontal />
            </div>
            <div className=" flex flex-col mt-2">
                <h2 className="text-xl"> {attend} </h2>
                <h2 className="text-xs"> {type} </h2>
            </div>
        </div>
    );
};

export default Card;
