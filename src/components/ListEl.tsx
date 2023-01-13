import { Link } from "react-router-dom";
import { HookData } from "../types";

const ListEl = ({ title, description, slug }: HookData) => {
  return (
    <li className="p-0 hover:bg-gray-100 border-slate-500 hover:border-slate-400 transition-all rounded-md border-2">
      <Link to={slug}>
        <div className="p-3 text-gray-600 hover:text-gray-500 hover:decoration-solid text-left">
          <h3 className="text-xl font-bold pl-4">{title}</h3>
          <p className="pl-4">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListEl;
