const ExampleRenderList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
    <h1>React Render bo'yicha misol</h1>
      <ul className="list">
        {numbers.map((number) => (
          <li className="list-item" key={number.toString()}>
            {number}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ExampleRenderList;
