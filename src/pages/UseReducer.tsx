import NavTitle from '../components/NavTitle';
import { useReducer, useState } from 'react';

interface InputValues {
    id: string,
    task: string,
    date: string
}

type ReducerAction = {
    type: "submit",
    payload: InputValues
} | {
    type: "delete",
    payload: string
}

const reducer = (state: InputValues[], action: ReducerAction) => {
    switch (action.type) {
        case "submit":
            const newTask = action.payload
            return [...state, newTask]
        case "delete":
            const id = action.payload
            return state.filter(task => task.id !== id)
    }

}

const UseReducer = () => {
    const [inputValues, setInputValues] = useState<InputValues>({
        id: String(Math.random()),
        task: "",
        date: "",
    })

    const [tasks, dispatch] = useReducer(reducer, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({
            type: "submit",
            payload: inputValues
        })
        clearInput()
    }

    const clearInput = () => {
        setInputValues({
            id: String(Math.random()),
            task: "",
            date: "",
        })
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { id } = e.currentTarget
        dispatch({
            type: "delete",
            payload: id
        })
    }
    return (
        <>
            <NavTitle title={"Form - useReducer hook"} />
            <div className='flex flex-col gap-5 mt-14'>
                <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5 text-left text-gray-600'>
                    <label htmlFor="task" className='font-bold'>Name</label>
                    <input onChange={handleChange} value={inputValues.task} type="text" name="task" placeholder="Study 30 min..." id='task' className='border-2 h-10 pl-4' required />
                    <label htmlFor="date" className='font-bold'>Due Date</label>
                    <input onChange={handleChange} value={inputValues.date} type="date" name="date" id='date' className='border-2 h-10 pl-4' />
                    <button type="submit" className='bg-slate-200 hover:bg-slate-100 text-gray-800 font-bold py-2 px-4 rounded-md hover:border-slate-300'>Add task</button>
                </form>
                <section className='border-t-2 mt-8'>
                    <h3 className='font-bold text-xl mt-8'>Tasks</h3>
                    {tasks.length ? tasks.map(({ id, task, date }) => (
                        <div key={id} className='mt-4 flex justify-between py-6 px-14 bg-slate-100'>
                            <h4 className='my-auto font-medium'>{task}</h4>
                            <div className='flex gap-3'>
                                <p className='my-auto text-gray-500'>{date}</p>
                                <button id={id} className='bg-red-400 hover:bg-red-300 transition-colors text-white font-bold py-2 px-4 rounded-md hover:border-red-300' onClick={handleDelete}>Delete</button>
                            </div>
                        </div>
                    )) : <p className='mt-8 p-8 font-bold select-none bg-slate-200 rounded-md'>Start adding tasks :)</p>}
                </section>
            </div>
        </>

    )
}

export default UseReducer
