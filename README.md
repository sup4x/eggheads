## Как вы думаете, что хотел сделать программист? Исправьте код и объясните свое решение

```
for (var i = 0; i <5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
```

Програмист хотел вывести значения переменной в цикле с интервалом в 1 секунду

Ожидаемый результат был такой
```
0, 1, 2, 3, 4
```
Для того чтобы код работал так как этого ожидал автор есть несколько способов

Изменить изменить объявление переменной с `var` на `let`.
Так как видимость переменной, объявленной через `let` ограничивается блоком объявления, получаем ожидаемый результат
```
for (let i = 0; i <5; i++) {
    setTimeout(function () {
        console.log(i);
    },
    i * 1000);
}
```
Также можно замкнуть текущее значение переменной в теле функции. В данном случае функция сохраняет текущее состояние переменной
```
for (let i = 0; i <5; i++) {
    setTimeout((function () {
        console.log(i);
    }), i * 1000);
}
```


## Написать функцию, которая будет работать правильно при обоих вызовах, как показано на приведенном код

```
console.log(sum(2, 3)); // результат 5
console.log(sum(2)(3)(4)...); // сумма всех элементов
```

### [Функция](./src/sum/sum.js) | [Тест](./src/sum/sum.test.js)

## Какая проблема может быть с этим кодом, если список очень длинный? Предложите и объясните свое решение

```
let list = readHugeList();
let nextListItem = function () {
    let item = list.pop();
    if (item) {
        // ... обработка записи
        nextListItem();
    }
};
```

Рекурсивный вызов при большом списке создаст множество вложенных вызовов, которые могут привести к ошибке `Maximum call stack size exceeded`. Лучше в данном кейсе избавится от рекурсии и перейти на цикл for

### [Тест](./src/huge/huge.test.js)

## Чему будет равна переменная "a" после выполнения этого участка кода?  Объясните почему.

```
let a = 1;
function foo() {
    a = 2;
    return 10;
}
a += foo();
a += foo();
```
Можно развернуть присваивание, для лучшего понимания шагов
```
let a = 1;
function foo() {
    a = 2;
    return 10;
}
// 1 + 10, так как `a` меняет свое значения внутри вызова foo, который следует после обращения к значению переменной a
a = a + foo();
// 11 + 10, аналогично как в первом шаге
a = a + foo();
```
Ответ: `21`

## Сделайте рефакторинг кода для работы с API чужого сервиса
```
Проверка на строку
function printOrderTotal(responseString) {
    var responseJSON = JSON.parse(responseString);
    responseJSON.forEach(function (item, index) {
        if (item.price = undefined) {
            item.price = 0;
        }
        orderSubtotal += item.price;
    });
    console.log("Стоимость заказа: "+ total >0 ? "Бесплатно": total + " руб.");
}
```
### [Функция после рефакторинга](./src/order-total/order-total.js) | [Тест](./src/order-total/order-total.test.js)