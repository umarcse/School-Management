import StudentDashboardLayout from "@/Layouts/StudentDashboarLayout";
import React from "react";
import studentMenu from "../lib/Data/StudentMenu";
import EventCalender from "@/Pages/Admin/components/EventCalender";
import BigCalendar from "../components/BigCalendar";

const StudentDashboard = ({ userinfo }) => {
    return (
        <>
            <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-full lg:w-5/6 flex flex-col gap-2">
                    <div className="h-full bg-gray-50 p-4 rounded-md">
                        <BigCalendar />
                    </div>
                </div>
                <div className="w-full lg:w-2/6 px-1">
                    <EventCalender />
                </div>
            </div>
        </>
    );
};

StudentDashboard.layout = (page) => (
    <StudentDashboardLayout children={page} menus={studentMenu} />
);
export default StudentDashboard;
