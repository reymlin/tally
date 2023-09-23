const data = [
    {
        name: "本月",
        income: 14569,
        expend: 7049,
        netIncome: 14569 - 6325,
        expendList: [
            { name: "餐饮", value: 2034, time: "2021-05-01" },
            { name: "交通", value: 625, time: "2021-05-03" },
            { name: "购物", value: 463, time: "2021-05-11" },
            { name: "娱乐", value: 236, time: "2021-05-02" },
            { name: "医疗", value: 56, time: "2021-05-19" },
            { name: "旅行", value: 1523, time: "2021-05-22" },
            { name: "读书", value: 200, time: "2021-05-26" },
            { name: "出差", value: 603, time: "2021-05-21" },
            { name: "团建", value: 301, time: "2021-05-22" },
            { name: "读书", value: 200, time: "2021-05-27" },
            { name: "其他", value: 36, time: "2021-05-29" }
        ]
    },
    {
        name: "上月",
        income: 15000,
        expend: 6056,
        netIncome: 8944,
        expendList: [
            { name: "餐饮", value: 1863, time: "2021-04-03" },
            { name: "交通", value: 620, time: "2021-04-04" },
            { name: "购物", value: 639, time: "2021-04-09" },
            { name: "娱乐", value: 60, time: "2021-04-11" },
            { name: "医疗", value: 0, time: "2021-04-15" },
            { name: "旅行", value: 1324, time: "2021-04-20" },
            { name: "其他", value: 523, time: "2021-04-22" }
        ]
    },
    {
        name: "今年",
        income: 15000 * 6,
        expend: 6056 * 6,
        netIncome: 8944 * 6,
        expendList: [
            { name: "餐饮", value: 2034 * 6, time: "2021-05-31" },
            { name: "交通", value: 625 * 6, time: "2021-05-31" },
            { name: "购物", value: 463 * 6, time: "2021-05-31" },
            { name: "娱乐", value: 236 * 6, time: "2021-05-31" },
            { name: "医疗", value: 56 * 2, time: "2021-05-31" },
            { name: "旅行", value: 1523 * 3, time: "2021-05-31" },
            { name: "其他", value: 36 * 6, time: "2021-05-31" }
        ]
    }
];

async function getBillData(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = data.find((item) => item.name === value);
            resolve({ data: result || {} });
        }, 500);
    });
}

export { getBillData };
