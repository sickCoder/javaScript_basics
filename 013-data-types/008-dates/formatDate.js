"use-strict";

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return "right now";
    }

    let seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
        return seconds + " sec. ago";
    }

    let minutes = Math.floor(diff / 60000);

    if (minutes < 60) {
        return minutes + "min. ago";
    }

    let dateFormat = [
        "0" + date.getDate(),
        "0" + (date.getMonth() + 1),
        "" + date.getFullYear(),
        "0" + date.getHours(),
        "0" + date.getMinutes()
    ];

    dateFormat.map(item => item.slice(-2));
    return dateFormat.slice(0, 3).join(".") + " " + dateFormat.slice(3).join(":");
}