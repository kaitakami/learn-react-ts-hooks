import { Link } from "react-router-dom";
import ListEl from "./ListEl";

const List = () => {
  return (
    <>
      <ul>
          <ListEl
            title={"useState"}
            description={"Learn useState with a basic counter application."}
			slug={"/useState"}
          />
      </ul>
    </>
  );
};

export default List;
