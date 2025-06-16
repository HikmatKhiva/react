import { useEffect, useState } from "react";
const ExampleComponentLifeCycle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Mounting va Updating bosqichlari uchun
    console.log("Komponent o'rnatilgan yoki yangilangan");
    return () => {
      // Unmounting bosqichi uchun tozalash funksiyasi
      console.log("Komponent uzilib qoldi");
    };
  }, [count]); // count o'zgarganda useEffect qayta ishga tushadi
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default ExampleComponentLifeCycle;