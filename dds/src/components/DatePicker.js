
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function DatePickerCalendar() {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <section>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
            />

        </section>

    );
};

export default DatePickerCalendar;