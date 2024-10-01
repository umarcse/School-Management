import React from "react";
import Card from "./Card";
import CountChart from "./CountChart";
import AttendanceChart from "./AttendanceChart";
import FinanceChart from "./FinanceChart";
import EventCalender from "./EventCalender";
const DashboardHome = () => {
    return (
        <>
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-full lg:w-2/3 flex flex-col gap-2">
                    <div className="flex gap-1 flex-wrap">
                        <Card type={"Student"} attend={2300} />
                        <Card type={"Teacher"} attend={2230} />
                        <Card type={"Parent"} attend={2200} />
                        <Card type={"Staff"} attend={1200} />
                    </div>
                    {/* //? Middle Chart */}
                    <div className="flex gap-4 flex-col lg:flex-row">
                        {/* //? Count Chart */}
                        <div className="w-full lg:w-2/5 h-[400px] ">
                            <CountChart />
                        </div>

                        {/* //? Attendance Chart */}
                        <div className="w-full lg:w-3/5 h-[400px] ">
                            <AttendanceChart />
                        </div>
                    </div>
                    {/* //? Bototm Chart */}

                    <div className="w-full h-[400px] ">
                        <FinanceChart />
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <EventCalender />
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
