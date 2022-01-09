const { test, expect } = require('@jest/globals')
const {printOrderTotal} = require('./order-total')

describe('OrdersTotal should:', () => {
    test('Throw error if not valid response passed', () => {
        expect(
            () => printOrderTotal(null)
        ).toThrowError('Invalid server response')
        expect(
            () => printOrderTotal('')
        ).toThrowError('Invalid server response')
        expect(
            () => printOrderTotal(45)
        ).toThrowError('Invalid server response')
    })

    test('Sum all order items prices', () => {
        const order = [{price: 300}, {price: null}, {price: undefined}, {price: 'fds'},  {price: 233}]
        expect(
            printOrderTotal(JSON.stringify(order))
        ).toBe(
            'Стоимость заказа: 533 руб.'
        )
    })

    test('Show that order is free when no single price found', () => {
        const order = [{price: null}, {price: undefined}, {price: 'fds'}]
        expect(
            printOrderTotal(JSON.stringify(order))
        ).toBe(
            'Стоимость заказа: Бесплатно'
        )
    })
})