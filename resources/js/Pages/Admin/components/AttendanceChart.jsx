import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
    const data = [
        {
            name: "Sunday",
            present: 40,
            absent: 20,
        },
        {
            name: "Monday",
            present: 50,
            absent: 20,
        },
        {
            name: "Tuesday",
            present: 70,
            absent: 15,
        },
        {
            name: "Wednesday",
            present: 80,
            absent: 12,
        },
        {
            name: "Thrusday",
            present: 90,
            absent: 24,
        },
    ];
    return (
        <>
            <div className="w-full shadow-md h-full rounded-xl">
                <div className="flex justify-between px-2 py-2">
                    <h2> Attendance </h2>
                    <HiOutlineDotsHorizontal className="size-6 cursor-pointer text-slate-600" />
                </div>

                <div className="w-full  h-full ">
                    <div className="w-full h-[90%]">
                        <ResponsiveContainer>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="present"
                                    fill="#8884d8"
                                    activeBar={
                                        <Rectangle fill="pink" stroke="blue" />
                                    }
                                />
                                <Bar
                                    dataKey="absent"
                                    fill="#82ca9d"
                                    activeBar={
                                        <Rectangle
                                            fill="gold"
                                            stroke="purple"
                                        />
                                    }
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AttendanceChart;
