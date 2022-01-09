const { expect } = require("@jest/globals")

function mockHugeList(count) {
    const hugeList = []
    for(let i = 0; i < count; ++i) {
        hugeList.push({value: i})
    }
    return hugeList
}

describe('Hugelist handler', () => {
    test('Should fail with recursion', () => {
        let list = mockHugeList(100000);
        let nextListItem = function () {
        let item = list.pop();
        if (item) {
            // ... обработка записи
                nextListItem();
            }
        };
        expect(() => nextListItem()).toThrowError('Maximum call stack size exceeded')
    })


    test('Should process all list items', () => {
        // Будет долго работать
        let list = mockHugeList(100000);
        const length = list.length
        for(let i = length - 1; i >= 0; --i) {
            // Some work
            // console.log(list[i]);
            list.pop()
        }
        expect(list.length).toBe(0)
    })
})