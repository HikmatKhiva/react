# React Project Structure

```
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │── App.css    
│   │── App.jsx    
│   │── index.css    
│   │── index.css    
│   │── main.jsx    
|   |   
|   |   
├── .gitignore
├── eslint.config.js
├── index.html
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── README.md
│

```
| Fayl nomi | vazifasi 
|----------|----------|
| node_modules | Loyihaga o‘rnatilgan barcha tashqi kutubxonalar saqlanadigan papka.  |
| public  | Statik fayllar (HTML, rasm, favicon) joylashadigan papka, brauzerga to‘g‘ridan-to‘g‘ri xizmat qiladi. |
|src | src (source) papkasi — bu loyiha manba kodlari joylashadigan asosiy papka hisoblanadi.React loyihasida src ichida komponentlar, sahifalar, uslublar, yordamchi funksiyalar va asosiy index.js yoki App.js fayllari bo‘ladi.  Masalan, src/App.js fayli React komponentining asosiy qismi bo‘lib, unda ilovaning ko‘rinishi va logikasi yoziladi |
|.gitignore| .gitignore — bu Git versiya nazorati tizimiga qaysi fayl yoki papkalarni qo‘shmaslik kerakligini ko‘rsatadigan maxsus fayl. |
| eslint.config.js| eslint.config.js — bu ESLint konfiguratsiya fayli bo‘lib, JavaScript va JSX kodlarini tekshirish uchun qoidalar va sozlamalarni o‘z ichiga oladi ESLint yordamida kodning sifati, uslubiy qoidalariga rioya qilinishi va xatoliklarning oldini olish ta’minlanadi. Ushbu faylda qaysi qoidalar faollashtirilgani, qaysilari o‘chirilgani va maxsus sozlamalar yoziladi.|
|index.html| index.html — bu React yoki Vite loyihasining asosiy HTML shabloni bo‘lib, unda React ilovasi joylashadigan <div id="root"></div> kabi konteyner mavjud.|
| package-lock.json| package-lock.json — bu npm paket menejeri tomonidan avtomatik yaratiladigan fayl bo‘lib, loyihaga o‘rnatilgan barcha paketlarning aniq versiyalarini va ularning bog‘liqliklarini saqlaydi.|
|package.json| package.json — bu loyiha haqida asosiy ma’lumotlar, bog‘lamalar (dependencies), skriptlar, loyiha nomi, muallif va boshqa konfiguratsiyalarni o‘z ichiga olgan fayl. Bu fayl yordamida npm yoki yarn paketlarini boshqarish, ishga tushirish buyruqlarini belgilash mumkin.React yoki Vite loyihasini yaratishda package.json avtomatik yaratiladi va uni qo‘lda ham tahrirlash mumkin.| React yoki Vite loyihasini yaratishda package.json avtomatik yaratiladi va uni qo‘lda ham tahrirlash mumkin|
|README.md | README.md — bu loyiha haqida ma’lumot beruvchi Markdown formatidagi fayl. Unda loyiha maqsadi, o‘rnatish va ishga tushirish ko‘rsatmalari, foydalanish bo‘yicha tavsiyalar yoziladi. GitHub kabi platformalarda ushbu fayl loyiha sahifasida ko‘rinadi va foydalanuvchilarga loyiha haqida tushuncha beradi.|
|vite.config.js | vite.config.js — Vite qurilish vositasining konfiguratsiya fayli bo‘lib, unda server sozlamalari, build parametrlar, plaginlar va fayl aliaslari belgilanadi. Ushbu fayl yordamida Vite serverining ish faoliyatini sozlash, masalan, proxy o‘rnatish, maxsus plaginlar qo‘shish mumkin.React loyihalarida Vite tez va samarali ishlab chiqish muhiti yaratishda muhim rol o‘ynaydi.|  



### App.js ochib ko'ramiz!
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App
``` 
### Bu App.jsx componenti
### React js ikki uslubda component yozish mumkin bular class component yoki function component App.jsx bizda function componentga misol.
### Bugun ko'rib chiqadigan mavzular
- JSX
- Props vs State
- Conditional Rendering

### JSX  JavaScript XML degan ma'noni anglatadi. Bu JavaScript-da HTML yozish imkonini beradi va HTML teglarini React elementlariga aylantiradi.
#### JSX Ishlatilmagan holat.
`const myElement = React.createElement('h1', {}, 'I do not use JSX!')
` 
#### JSX Ishlatilgan holat.
`
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
` 
#### JSX Ishlatilgan holat.
`
const myElement = <h1>React is  times better with JSX</h1>;
` 
#### JSX Expression Ishlatilgan holat.
#### Expression Ifoda React o'zgaruvchisi yoki xossasi yoki boshqa har qanday haqiqiy JavaScript ifodasi bo'lishi mumkin. JSX ifodani bajaradi va natijani qaytaradi:
`
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
` 
### Props (properties) — bu React komponentlariga uzatiladigan argumentlar yoki ma'lumotlar bo'lib, ular komponentlar orasida ma'lumot almashish uchun ishlatiladi. Propslar komponentlarga HTML atributlari kabi qo'shiladi va ona komponentdan bola komponentlarga uzatiladi.

```
<Card title="Hello" description="world" />

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
```
#### ! Propslar ular readonly bo'ladi ularni o'zgartirib bo'lmaydi.

### Reactda state — bu komponentning ishlash davomida o'zgarishi mumkin bo'lgan ma'lumotlarni saqlovchi ob'ektdir. State komponentga xos va faqat o'sha komponent tomonidan boshqariladi, boshqa komponentlar state'ga to'g'ridan-to'g'ri kira olmaydi. State o'zgarganda, React avtomatik ravishda komponentni qayta render qiladi va yangi holatga mos ravishda interfeysni yangilaydi.
```
import  { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```
| Nomi  | Ta'rifi |
|-------|---------|
| Props | Props tashqi komponentdan uzatiladigan ma'lumotlar, o'zgarmas (read-only). |
| State | State esa komponent ichida boshqariladigan va o'zgarishi mumkin bo'lgan ma'lumotlar |

### Reactda Conditional Rendering (shartli renderlash) — bu komponent ichida turli shartlarga qarab turli JSX elementlarni ko‘rsatish yoki yashirish usulidir. Reactda bu JavaScript shart operatorlari yordamida amalga oshiriladi.
#### Conditional Rendering usullari
1. if statement yordamida
Oddiy if operatori yordamida qaysi JSX element ko‘rsatilishini aniqlash mumkin. Masalan:
```
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}
```
2. Ternary operator (? :) yordamida
Qisqa if-else sintaksisi sifatida ishlatiladi:

```
return (
  <div>
    {isLoggedIn ? <UserDashboard /> : <LoginPage />}
  </div>
);

```
- Reactda shartli renderlash JavaScript shart operatorlari yordamida amalga oshiriladi.
- if, ternary operator (? :), operatorlari eng ko‘p ishlatiladi.
- Shartli renderlash yordamida komponentlar holatiga qarab turli UI elementlar ko‘rsatiladi yoki yashiriladi.