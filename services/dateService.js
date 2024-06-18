function convertTSToDate(ts) {
    const date = new Date(ts);

    const pad = (num) => String(num).padStart(2, '0');

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
}


module.exports = convertTSToDate;
