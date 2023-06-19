# CLI Application

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/tGmqAOTguL8yw3vtYGq3sG2hMusiGX

## Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/J5VYghPRM7bsmMtoSAjzufE9Ch7zXS
https://monosnap.com/file/R1qhRAY4pX1Ud0sF8YXtYV9GfVO4CO

## Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/EpYWbySLK0VjzqhwvZtXtP0rcMTEeP
https://monosnap.com/file/QxH6F3GE0vNVAvCydpjHVwZvotR5bS

## Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/Cs3wKqDFJYdCMLHljwAVHd9q3wDP0p
https://monosnap.com/file/dah0qVGg7Qv3qEt5QPAPieckS5QdIR