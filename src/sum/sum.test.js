const { test } = require('@jest/globals')
const { sum } = require('./sum')

describe('Sum should:', () => {
    test('sum arguments if more than one arguments', () => {
        expect(sum(2, 3)).toBe(5)
        expect(sum(1, 1, 5)).toBe(7)
        expect(sum(2, 2, 8)).toBe(12)
    })

    test('carry sum item if one argument is passed, and returns sum of all eliments when log invoked', () => {
        expect(
            sum(2)(3)(4)()
        ).toBe(9)
        expect(
            sum(4)(4)(4)()
        ).toBe(12)
        expect(
            sum(4)(4)(4)(8)(12)()
        ).toBe(32)
    })
})