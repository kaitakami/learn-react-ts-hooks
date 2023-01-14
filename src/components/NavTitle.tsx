import { Link } from "react-router-dom";
interface Props {
  title: string;
}

const NavTitle = ({ title }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-8">
        <Link to="/">
          <button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-md shadow transition duration-150 ease-in-out hover:border-gray-400 align-bottom h-14 border-2">
            Go Home
          </button>
        </Link>
        <a href="https://github.com/kaitakami" className="bg-white text-gray-300 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out group hover:border-gray-400 border-2" target="_blank" rel="noreferrer noopener" >
          <svg className="text-gray-300 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </a>
      </div>
      <h1 className="flex-center">{title}</h1>
    </div>
  );
};

export default NavTitle;
