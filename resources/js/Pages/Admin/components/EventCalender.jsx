import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const EventCalender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="shadow-md rounded-xl">
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default EventCalender;
