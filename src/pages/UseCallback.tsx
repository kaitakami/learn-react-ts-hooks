import { useCallback, useState } from 'react';
import NavTitle from '../components/NavTitle';

interface User {
    name: string;
    email: string;
}

const handleFetchUser = (userId: string, setUser: React.Dispatch<React.SetStateAction<User | null>>, setError: React.Dispatch<React.SetStateAction<string>>) => {
    if (userId !== "") {
        setError("")
        // Fetch user data from an API
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("User not found")
                }
            })
            .then(data => setUser(data))
            .catch(error => {
                setError(error.message)
                setUser(null)
            })
    } else {
        setError("UserId is null")
        setUser(null)
    }
}

const UseCallback: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string>("");
    const [userId, setUserId] = useState<string>("");

    const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value);
    };

    const handleFetchUserCallback = useCallback(() => handleFetchUser(userId, setUser, setError), [userId]);

    return (
        <>
            <NavTitle title='useCallback - hook' />
            <div className='mt-8'>
                <input type="text" placeholder="User ID" onChange={handleUserIdChange} />
                <button onClick={handleFetchUserCallback}>Fetch User</button>
                <div className='h-14 mt-8'>
                    {error && <p className='bg-gray-100 text-red-400 p-4 font-bold rounded-md'>{error}</p>}
                    {user?.name && <p className='font-bold'>Name: {user.name}</p>}
                    {user?.email && <p className='font-bold'>Email: {user.email}</p>}
                </div>
            </div>
            <div className='text-left mt-8 flex flex-col gap-8'>
                <p>The <code>useCallback</code> hook is a React hook that allows you to memoize a callback function, so that it is only recreated when one of its dependencies change. This can be useful for performance optimization, as it prevents unnecessary re-renders of a component when the function does not change.</p>
                <h3 className='font-bold'>Syntax</h3>
                <pre>`{`
                    const callback = useCallback(() => {
                        //function body
                    }, [dependencies]);
                    `}`
                </pre>
                <h3 className='font-bold'>Example</h3>
                <p>Here is an example of how you might use the <code>useCallback</code> hook in a React component that renders a button and a child component:</p>
                <pre>`{`
                    import React, {useCallback} from 'react';
                    function ParentComponent({userId}) {
                    const handleClick = useCallback(() => {
                                            alert(Button clicked with userId: ${userId});
                        }, [userId]);

                        return (
                        <div>
                            <button onClick={handleClick}>Click me</button>
                            <ChildComponent onClick={handleClick} userId={userId} />
                        </div>
                        );
                    }

                    function ChildComponent({onClick, userId}) {
                        return <button onClick={onClick}>Click me too (userId: {userId})</button>
                    }`}`
                </pre>

                <p>In this example, the <code>ParentComponent</code> renders a button and a <code>ChildComponent</code>. Both buttons have an <code>onClick</code> event handler that calls the <code>handleClick</code> function.
                    The <code>handleClick</code> function is created using the <code>useCallback</code> hook. The <code>handleClick</code> function is memoized, and its only dependency is the <code>userId</code> prop.
                    The memoized <code>handleClick</code> function is then passed as a prop to the <code>ChildComponent</code>. Because the <code>handleClick</code> function is memoized, it will not change unless the <code>userId</code> prop changes, preventing unnecessary re-renders of the <code>ChildComponent</code>.</p>
                <h3 className='font-bold'>Why use useCallback</h3>
                <p>In summary, <code>useCallback</code> hook is a way to prevent unnecessary recreation of callback functions in React, it only creates the function again when one of the dependencies passed as an array changes. This can help in performance optimization by avoiding unnecessary re-renders and calculations. </p>
            </div>
        </>
    );
}

export default UseCallback
