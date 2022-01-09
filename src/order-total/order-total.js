function printOrderTotal(response) {
    if(typeof response !== 'string' || !response) {
        throw new Error('Invalid server response')
    }

    const orderItems = JSON.parse(response)
    const total = orderItems.reduce(function (carry, item) {
        carry += typeof item.price === 'number' ? item.price : 0
        return carry
    }, 0);
    return `Стоимость заказа: ${ total > 0 ? `${total} руб.` : 'Бесплатно' }`;
}

module.exports = { 
    printOrderTotal
}