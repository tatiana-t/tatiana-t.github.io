import {getCorrectWord} from "src/lib/grammar";

export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export function getDateString(string: string) {
    return new Date(string).toLocaleString();
}

export function getHoursAge(string: string) {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const commentDate = new Date(string);
    const commentDay = commentDate.getDate();
    const commentMonth = commentDate.getMonth();
    const commentYear = commentDate.getFullYear();

    if (currentYear === commentYear && currentMonth === commentMonth) {
        if (currentDay === commentDay) {
            const hoursDiff = date.getHours() - commentDate.getHours();
            return `${hoursDiff} ${getCorrectWord(hoursDiff, [
                "час",
                "часа",
                "часов",
            ])} назад`;
        } else if (currentDay - commentDay === 1) {
            return "вчера";
        }
    }
    return getDateString(string);
}
