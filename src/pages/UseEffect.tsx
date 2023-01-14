import { useState, useEffect } from "react";
import NavTitle from "../components/NavTitle";

interface userData {
  id: number;
  email: string;
  image: string;
  username: string;
  website: string;
}

const UseEffect = () => {
  const [data, setData] = useState<userData[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakerapi.it/api/v1/users");
        const { data } = await response.json();
        setData(data);
      } catch (error: any) {
        throw Error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <NavTitle title="Fetch user data - useEffect Hook" />
      <div className="text-left mt-20 flex flex-col gap-5">
        <p>
          <code>useEffect</code> is a Hook in React that allows you to
          synchronize a component with an external system. It is a way to handle
          side effects, such as fetching data or subscribing to a event in a
          functional component.
        </p>
        <p>
          `useEffect` takes two arguments: a callback function, and a list of
          dependencies. The callback function is called after the component has
          rendered. The list of dependencies is used to determine when to re-run
          the effect, by comparing the current values of the dependencies to the
          previous values.
        </p>
        <p>
          When the component first renders, and on subsequent renders if the
          dependencies have not changed, the callback function is called. In the
          callback function, you can perform any side effects, such as fetching
          data or subscribing to an event. You can also return a cleanup
          function, which is called before the component is unmounted or the
          effect is re-run.
        </p>

        <h3 className="max-w-xl m-auto font-bold">
          It's important to note that:
        </h3>
        <ul className="list-decimal max-w-xl m-auto">
          <li>
            If you don't pass any dependencies to useEffect, your effect will
            run on every render, so it's important to be mindful of that when
            you are using it.
          </li>
          <li>
            If you are using state variables inside the useEffect, you need to
            make sure to include those variables in the dependencies array,
            otherwise the effect will not re-run when the state changes.
          </li>
        </ul>
      </div>
      {data === null ? (
        <h2 className="font-bold animate-pulse mt-10 mb-3 text-xl">
          Loading Users...
        </h2>
      ) : (
        <h2 className="font-bold mt-10 mb-3 text-xl">Users</h2>
      )}
      <div className="overflow-x-auto w-80 m-auto sm:w-full">
        <table className="table-auto h-96 w-full">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>website</th>
              <th>avatar</th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((user) => (
                <tr key={user.id}>
                  <td className="border border-slate-300">{user.username}</td>
                  <td className="border border-slate-300">{user.email}</td>
                  <td className="border border-slate-300">
                    <a href="#">{user.website}</a>
                  </td>
                  <td className="border border-slate-300">
                    <img
                      className="w-14 h-14 rounded-full m-auto"
                      src={user.image}
                    ></img>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UseEffect;
