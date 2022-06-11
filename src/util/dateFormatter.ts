export function prettifyDate (currentDate: Date){
    const dateTime = currentDate.toString().split(" ");
    const formattedDate = `${dateTime[2]} ${dateTime[1]}, ${dateTime[3]}`;
    return formattedDate;
}