function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Tomás!</h1>
      <h2>Today is {currDate.toLocaleDateString()}.</h2>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;