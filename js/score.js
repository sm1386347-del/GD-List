export const store = {
    dark: false,
};

export function score(rank, outOf, percent) {
    if (rank > outOf) {
        return 0;
    }
    let score = round(
        (toScore(percent) / toScore(100)) * 
        ((outOf - rank + 1) / outOf) * 
        50
    );
    return Math.max(0, score);
}

function toScore(percent) {
    return Math.floor((percent ** 3) / 10000);
}

function round(num) {
    return Math.round(num * 10) / 10;
}

export default store;
