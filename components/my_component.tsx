export default function MyComponent() {
  // inline style of red background
  // 200 x 200 px
  // centered

  const style = {
    backgroundColor: "red",
    width: "200px",
    height: "200px",
    margin: "auto",
  };

  return (
    <div style={style}>
      <h1>My Component</h1>
    </div>
  );
}
