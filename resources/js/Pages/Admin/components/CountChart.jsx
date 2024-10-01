import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPeopleRobbery } from "react-icons/fa6";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Total", count: 103, fill: "blue" },
    {
        name: "Boys",
        count: 53,

        fill: "#8884d8",
    },
    {
        name: "Grils",
        count: 50,
        fill: "#83a6ed",
    },
];
const CountChart = () => {
    return (
        <div className="w-full bg-white shadow-md rounded-lg h-full ">
            <div className="flex justify-between px-2 py-2">
                <h2> Student </h2>
                <HiOutlineDotsHorizontal className="size-6 cursor-pointer text-slate-600" />
            </div>
            <div className="w-full h-[75%] relative ">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={25}
                        data={data}
                    >
                        <RadialBar
                            label={{ position: "insideStart", fill: "#fff" }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <FaPeopleRobbery className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6 text-green-400 " />
            </div>
        </div>
    );
};

export default CountChart;
