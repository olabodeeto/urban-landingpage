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

export function convertTo12HourFormat(time24: any) {
  const [hours, minutes] = time24.split(":");
  const hoursInt = parseInt(hours, 10);
  const period = hoursInt >= 12 ? "PM" : "AM";
  const hours12 = hoursInt % 12 || 12; // Convert '00' or '12' to '12'

  return `${hours12}:${minutes} ${period}`;
}

export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + "...";
  } else {
    return str;
  }
}

export function formatDate(inputDate: any) {
  const date = new Date(inputDate);

  // Get day, month, and year
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();

  // Format the date as "MM/DD/YYYY"
  return `${month}/${day}/${year}`;
}
