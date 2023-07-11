const round = (value: number) => Math.floor(value);
const endOfMonth = (date: Date)=> new Date(date.getFullYear(), date.getMonth() + 1, 0);
const dayOfYear = (date: Date) => (date.getTime() - beginOfYear(date).getTime()) / divisors.days;
const daysInYear = (date: Date) => (endOfYear(date).getTime() - beginOfYear(date).getTime()) / divisors.days;
const beginOfYear = (date: Date) => new Date(date.getFullYear(), 0, 0);
const endOfYear = (date: Date)=> new Date(date.getFullYear() + 1, 0, 0);

const divisors = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
};

export const dateDiff = (date1:Date, date2:Date):[string, number][] => {
    const diff = date2.getTime() - date1.getTime();
    let ret = (date1.getFullYear() - date2.getFullYear());
    ret += (dayOfYear(date1) - dayOfYear(date2)) / daysInYear(date2);
    const years = round(ret);

    ret = (date1.getFullYear() - date2.getFullYear()) * 12;
    ret += date1.getMonth() - date2.getMonth();
    ret += (date1.getDate() - date2.getDate()) / endOfMonth(date2).getDate();
    const months = round(ret);
    return [
        ['년', years],
        ['개월', months],
        ['일', round(diff / divisors.days)],
        ['시간', round(diff / divisors.hours)],
        ['분', round(diff / divisors.minutes)],
        ['초', round(diff / divisors.seconds)],
    ];
};