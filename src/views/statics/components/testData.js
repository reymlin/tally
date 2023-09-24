const expend = {
    curMonth: {
        values: [452, 362, 642, 453, 613],
        labels: ["05/01", "05/07", "05/14", "05/21", "05/28"]
    },
    lastMonth: {
        values: [469, 502, 346, 419, 501],
        labels: ["04/01", "04/07", "04/14", "04/21", "04/28"]
    },
    curYear: {
        values: [452, 362, 642, 453, 613],
        labels: ["01", "02", "03", "04", "05"]
    }
};

const income = {
    curMonth: {
        values: [500, 550, 530, 560, 590],
        labels: ["05/01", "05/07", "05/14", "05/21", "05/28"]
    },
    lastMonth: {
        values: [550, 580, 530, 550, 600],
        labels: ["04/01", "04/07", "04/14", "04/21", "04/28"]
    },
    curYear: {
        values: [500, 550, 530, 560, 590],
        labels: ["01", "02", "03", "04", "05"]
    }
};

const curPieData = [
    { value: 965, name: "餐饮" },
    { value: 456, name: "旅行" },
    { value: 608, name: "交通" },
    { value: 18.5, name: "读书" },
    { value: 732, name: "聚会" }
];
const lastPieData = [
    { value: 502, name: "餐饮" },
    { value: 635, name: "旅行" },
    { value: 189, name: "交通" },
    { value: 90, name: "读书" },
    { value: 200, name: "聚会" }
];

const curYearData = [
    { value: 1048 * 3, name: "餐饮" },
    { value: 735 * 3, name: "旅行" },
    { value: 350 * 3, name: "交通" },
    { value: 484 * 3, name: "读书" },
    { value: 300 * 3, name: "聚会" }
];
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                income,
                expend,
                curPieData,
                lastPieData,
                curYearData
            });
        }, 200);
    });
}
export { getData };
