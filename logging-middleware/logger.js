export async function Log(token, stack, level, packageName, message) {
    try {
        const response = await fetch(
            "http://4.224.186.213/evaluation-service/logs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    stack,
                    level,
                    package: packageName,
                    message
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to create log");
        }

        const data = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
}