import Button from "../ui/Button";
const ExampleComposition = (props) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        {/* Button komponenti composition orqali qo'shilmoqda */}
        <Button color="green">OK</Button>
      </div>
    </>
  );
};
export default ExampleComposition;