import withLoading from "./Loading";
const ExampleHOC = () => {
  return (
    <div>
      <h1>ExampleHOC</h1>
    </div>
  );
};
export default withLoading(ExampleHOC);
