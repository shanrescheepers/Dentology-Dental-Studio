
export function Calendar() {


    const header = () => {
        const dateFormat = 'MMMM yyyy'
        return (
            <div className="calendar">



                <div className="calendar-header">
                    <div className="calendar-header-arrow">
                        &#9664;
                    </div>
                    <div className="calendar-ehader-title">

                    </div>
                    <div className="calendar-header-arrow right">

                    </div>
                </div>
                <div className="calendar-dow-day">

                </div>
            </div>
        )
    }
}

export default Calendar;