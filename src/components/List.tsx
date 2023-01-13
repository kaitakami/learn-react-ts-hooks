import ListEl from "./ListEl";
import { hooksData } from "../data/hooksData";

const List = () => {
  return (
    <>
      <ul className="flex flex-col gap-5">
        {hooksData.map(({ title, description, slug }) => (
          <ListEl
            key={slug}
            title={title}
            description={description}
            slug={slug}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
