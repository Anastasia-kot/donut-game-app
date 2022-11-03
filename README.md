# Игра-"развивашка" расставь карточки по порядку  
### [https://donut-game-app.vercel.app/](https://donut-game-app.vercel.app/ "https://donut-game-app.vercel.app/")

## Использованный стек/ технические требования:
 
+ Вёрстка по [макету Figma](https://www.figma.com/file/Ttn7siGjRcFZ0OzPbT2Xxg/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?node-id=1%3A2642 "https://www.figma.com/file/Ttn7siGjRcFZ0OzPbT2Xxg/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?node-id=1%3A2642")
+ Next.js;
+ TypeScript;
+ React;
+ Styled-components [emotion styled-components](https://emotion.sh/docs/styled "https://emotion.sh/docs/styled")
+ Кроссбраузерность в последних версиях браузеров (chrome, firefox, safari, edge);
 
+ доделать игровые стили; `(в процессе стилизации + theme styled + генерация рандомной игровой темы)`
+ настроить простые импорты картинок; `(в процессе настройки)`
+ подключить игровые звуки; `(в процессе подключения)`
+ подключить поддержку тач-устройств; `(в процессе подключения)`




 ## Стартовая страница
![image](https://github.com/Anastasia-kot/donut-game-app/blob/main/.screenshots/localhost_3000_%20(2).png)
+ Можно выбрать количество игровых предметов (2-5)
+ Можно выбрать игровые значения карточек (буквы, цифры 1-9, числа 10-19, числа 20-50, числа 51-99, числа 100-999)
+ Режим игры: в каком порядке необходимо расположить предметы (по возрастанию, по убыванию)

 ## Игровая страница
![image](https://github.com/Anastasia-kot/donut-game-app/blob/main/.screenshots/localhost_3000_%20(4).png)
+ Игрок мышкой перетаскивает предметы на свои места
+ Если игрок не поставил предмет, то предмет возвращается на место
+ Одинаковых значений быть не может

 ## Финальная страница
![image](https://github.com/Anastasia-kot/donut-game-app/blob/main/.screenshots/localhost_3000_%20(3).png)
+ Когда уровень пройден, возникает финальная страница
+ Игрок нажимает кнопку "Заново" и переходит на снова к настройке игры


 

 





# Как запустить проект

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
