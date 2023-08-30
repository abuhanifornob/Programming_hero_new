import "./App.css";

function App() {
  const peopleArray = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 22 },
  ];
  return (
    <>
      <h1>Vite + React</h1>

      {peopleArray.map((people, inex) => (
        <Person key={inex} props={people}></Person>
      ))}
    </>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1 style={{ color: "red" }}>Name:{props.name} </h1>
      <p>Profession:{props.age} </p>
    </div>
  );
}
export default App;
