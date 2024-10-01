import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Jan",
        income: 5000,
        expense: 3000,
    },
    {
        name: "Feb",
        income: 4000,
        expense: 3400,
    },
    {
        name: "Mar",
        income: 1000,
        expense: 400,
    },
    {
        name: "Apr",
        income: 2000,
        expense: 500,
    },
    {
        name: "May",
        income: 4000,
        expense: 12400,
    },
    {
        name: "Jun",
        income: 3000,
        expense: 2400,
    },
    {
        name: "Jul",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Aug",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Sep",
        income: 4000,
        expense: 1400,
    },
    {
        name: "Oct",
        income: 4000,
        expense: 2400,
    },
    {
        name: "Nov",
        income: 3000,
        expense: 2400,
    },
    {
        name: "Dec",
        income: 4000,
        expense: 2400,
    },
];
const FinanceChart = () => {
    return (
        <>
            <div className="w-full h-full">
                <ResponsiveContainer>
                    <LineChart
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
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#8884d8"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#82ca9d"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default FinanceChart;
