## React 4-dars
- Ref
- Events
- Hight Order Components

### React-da "ref" (reference) — bu DOM elementlari yoki React komponentlariga to'g'ridan-to'g'ri murojaat qilish imkonini beruvchi usuldir. Reflar yordamida siz React komponenti ichidagi DOM elementini yoki boshqa komponent instance-ni olish va boshqarish imkoniyatiga ega bo'lasiz.
### Ref va state farqi: State o'zgarganda komponent qayta render qilinadi, ref esa faqat qiymatni saqlaydi va o'zgarganda qayta render qilinmaydi. Shuning uchun ref ko'proq komponentning ichki holatini yoki DOM elementini boshqarishda ishlatiladi.

```
import { useRef } from "react";
const ExampleRef = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div className="ref-container">
      <input className="input-ref" ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default ExampleRef;
```
### React-da eventlar — bu foydalanuvchi bilan o'zaro ta'sirlarni (masalan, klik qilish, kursorni olib o'tish, forma elementlarini to'ldirish) boshqarish uchun ishlatiladigan mexanizmdir. React event handling tizimi DOM event handling-ga o'xshash, lekin ba'zi sintaksis farqlari mavjud.
### Event Handler (Voqea boshqaruvchisi) — bu foydalanuvchi harakati yuzaga kelganda chaqiriladigan funksiya. Masalan, tugmani bosganda ishlaydigan funksiya.
### Event Handler qo'shish: JSX elementga onClick, onChange, onSubmit kabi atributlar orqali event handler funksiyasini uzatamiz. Masalan:
```
function handleClick() {
  alert('You clicked me!');
}
<button onClick={handleClick}>Click me</button>
```
### React-da Higher-Order Components (HOC) — bu komponentlarni qayta ishlatish va ularning funksionalligini kengaytirish uchun ishlatiladigan dizayn patternidir. HOC — bu oddiygina bir komponentni qabul qilib, uni yangi, kengaytirilgan komponentga aylantiruvchi funksiyadir.

- Qayta ishlatish (Reusability): Bir nechta komponentlarda takrorlanuvchi mantiqni HOC ichida jamlab, kodni takrorlamaslik.

- Kod ajratish (Separation of concerns): Murakkab xatti-harakatlarni alohida joyga olib, komponentlarni soddalashtirish.

- Cross-cutting concerns: Masalan, autentifikatsiya, xatoliklarni boshqarish, ma’lumot yuklash kabi umumiy funksiyalarni bir joyda boshqarish.
### Qachon HOC ishlatiladi?
- Bir nechta komponentlarga o‘xshash, lekin to‘liq bir xil bo‘lmagan logikani ulash kerak bo‘lsa.

- Masalan, ma’lumotlarni yuklash paytida yuklanish indikatorini ko‘rsatish, foydalanuvchi autentifikatsiyasi, xatoliklarni tutish
```
function withLoading(Component) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };
}
export default withLoading;
```