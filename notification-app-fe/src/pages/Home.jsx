import { useState } from "react";

function Home() {

    const [notifications] = useState([
        {
            ID: 1,
            Type: "Placement",
            Message: "Amazon Hiring Drive",
            Timestamp: "02-07-2026 10:30 AM"
        },
        {
            ID: 2,
            Type: "Result",
            Message: "Mid Semester Results Published",
            Timestamp: "02-07-2026 09:00 AM"
        },
        {
            ID: 3,
            Type: "Event",
            Message: "Traditional Day Celebration",
            Timestamp: "01-07-2026 04:00 PM"
        },
        {
            ID: 4,
            Type: "Placement",
            Message: "Microsoft Internship Drive",
            Timestamp: "01-07-2026 11:00 AM"
        },
        {
            ID: 5,
            Type: "Result",
            Message: "Project Review Schedule",
            Timestamp: "30-06-2026 03:00 PM"
        },
        {
            ID: 6,
            Type: "Event",
            Message: "Cultural Fest",
            Timestamp: "30-06-2026 11:30 AM"
        },
        {
            ID: 7,
            Type: "Placement",
            Message: "Apple Recruitment",
            Timestamp: "29-06-2026 09:00 AM"
        },
        {
            ID: 8,
            Type: "Event",
            Message: "Farewell Function",
            Timestamp: "28-06-2026 05:00 PM"
        },
        {
            ID: 9,
            Type: "Result",
            Message: "External Exam Results",
            Timestamp: "27-06-2026 01:00 PM"
        },
        {
            ID: 10,
            Type: "Placement",
            Message: "CSX Corporation Hiring",
            Timestamp: "26-06-2026 10:00 AM"
        }
    ]);

    return (
        <div style={{ padding: "30px" }}>
            <h1>Campus Notifications</h1>

            {notifications.map((item) => (
                <div
                    key={item.ID}
                    style={{
                        border: "1px solid gray",
                        borderRadius: "8px",
                        padding: "15px",
                        marginBottom: "15px",
                        backgroundColor: "#f5f5f5"
                    }}
                >
                    <h3>{item.Type}</h3>

                    <p><b>Message:</b> {item.Message}</p>

                    <p><b>Time:</b> {item.Timestamp}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;