import { useEffect, useState } from "react";

function Home() {
    const [notifications, setNotifications] = useState([]);

    const token = "YOUR_ACCESS_TOKEN";

    useEffect(() => {
        getNotifications();
    }, []);

    async function getNotifications() {
        const response = await fetch(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const data = await response.json();

        setNotifications(data.notifications);
    }

    return (
        <div>
            <h1>Campus Notifications</h1>

            {notifications.map((item) => (
                <div key={item.ID}>
                    <h3>{item.Type}</h3>

                    <p>{item.Message}</p>

                    <p>{item.Timestamp}</p>

                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Home;