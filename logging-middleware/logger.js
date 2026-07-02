export async function Log(stack, level, packageName, message) {
    const response = await fetch(
        "http://4.224.186.213/evaluation-service/logs",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message
            })
        }
    );
}