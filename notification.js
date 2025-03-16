function notifyUser() {
    if (Notification.permission === "granted") {
        new Notification("Daily Learning Reminder", {
            body: "Time to enhance your frontend skills! Visit now to learn more.",
            icon: "https://via.placeholder.com/100"
        });
    }
}

if (Notification.permission === "default") {
    Notification.requestPermission();
}

// Sends a notification every 24 hours
setInterval(notifyUser, 86400000);