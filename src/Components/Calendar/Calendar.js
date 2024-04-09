import React from "react";

const Calendar = () => {
    return(
        <div className="home_calendar_container">
            <h3>Student Homepage</h3>
            <h4>Coming up...</h4>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dGhlcGxheWdyb3VuZGRhbGxhc0BnbWFpbC5jb20&color=%239E69AF" title="Calendar"  width="800" height="600" padding="10 em"></iframe>
        </div>
    )
}

export default Calendar;