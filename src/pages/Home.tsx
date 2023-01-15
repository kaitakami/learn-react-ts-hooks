import List from "../components/List";
import '../App.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <nav className="flex justify-end mr-8 mb-4">
        <Link to="/about" className="font-bold text-slate-400">About</Link>
      </nav>
      <h1>Learn react Hooks ⚛️</h1>
      <p>
        Here you can learn hooks in a practical way and easy to understand
        explanations. <br /> The most used hooks are covered in this guide 👇{" "}
      </p>
      <div className="card">
        <List />
      </div>
      <footer>
        <p className="font-bold text-sm text-gray-500">©️2023 Kai Takami</p>
      </footer>
    </div>
  );
};

export default Home;
