import List from "../components/List";
import '../App.css'

const Home = () => {
  return (
    <div className="App">
      <h1>Learn react Hooks ⚛️</h1>
      <p>
        Here you can learn hooks in a practical way and easy to understand
        explanations. <br /> The most used hooks are covered in this guide 👇{" "}
      </p>
      <div className="card">
        <List />
      </div>
    </div>
  );
};

export default Home;
