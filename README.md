# Pxolly-API
## Информация
Оболочка для API @Pxolly, который позволяет установить и почти ничего не делать, кроме авторизации и вызова методов с параметрами. Модуль поддерживает автоисправление и подсказки в таких приложениях как VS Code и т.п.

Made with Love ❤️ (100% JavaScript)

Owner: Семён Болотов (https://vk.com/nemolayn)

API: @pxolly (https://vk.com/pxolly)

Open Source: https://github.com/semen-bol/PxollyAPI

## Использование
Перед началом использования, нужно установить зависимость
```
npm i pxolly-api
npm i axios // В случае если не работает модуль
```
Пример использования:
```
const pxolly = require("pxolly-api"); // Инициализация модуля

const api = new pxolly.api({token: "PXOLLY TOKEN", v: "2.01"}) // Делаем настройку (token, version), версию можно не указывать, будет использоваться дефолтная версия

async function getInfo() { // Описание функции
    let request = await api.acc.getInfo() // Await тут идет как обязательная вещь
    console.log(request) // Выводим результат
}

getInfo() // Вызов функции 
```
