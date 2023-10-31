export const stringToNums = (string) => {
    return string.split(',').map(el => Number(el));
}