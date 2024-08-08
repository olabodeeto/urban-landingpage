export const replaceUnderscore = (value: string) => {
    let modifiedString = value.replace(/_/g, " ");
    return modifiedString;
};

export function generateUniqueString(length: number) {
    const timestamp = Date.now().toString(36); // Convert timestamp to base-36
    const randomString = Math.random()
        .toString(36)
        .substring(2, 2 + length);
    return timestamp + randomString;
}

export const convertDate = (dateparam: any) => {
    const inputDate = new Date(dateparam);

    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
};

export const reverseString = (value: string) => {
    return value.split("-").reverse().join("-");
};

export const replaceSlash = (value: string) => {
    return value.replace(/\//g, "-");
};
