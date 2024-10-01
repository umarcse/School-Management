import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
const localizer = momentLocalizer(moment);
import EventData from "../lib/Data/EventCalendarData";
const BigCalendar = () => {
    const [view, setView] = useState(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView) => {
        setView(selectedView);
    };
    return (
        <>
            <Calendar
                localizer={localizer}
                events={EventData}
                startAccessor="start"
                endAccessor="end"
                views={["work_week", "day"]}
                view={view}
                style={{ height: "100%" }}
                onView={handleOnChangeView}
                min={new Date(2024, 1, 0, 8, 0, 0)}
                max={new Date(2024, 1, 0, 17, 0, 0)}
            />
        </>
    );
};

export default BigCalendar;
