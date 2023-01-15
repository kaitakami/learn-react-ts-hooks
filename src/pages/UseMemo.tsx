import { useState, useMemo } from 'react';
import NavTitle from '../components/NavTitle';

interface Item {
  id: number,
  name: string,
  price: string
}

const initialData: Item[] = [
  { id: 1, name: 'Apple', price: '$1' },
  { id: 2, name: 'Banana', price: '$2' },
  { id: 3, name: 'Grapes', price: '$3' },
  { id: 4, name: 'Mango', price: '$4' },
  { id: 5, name: 'Pineapple', price: '$5' },
];

const UseMemo = () => {
  // times memoization count
  const [memoizationCount, setMemoizationCount] = useState<number>(0)

  // useMemo application
  const [searchTerm, setSearchTerm] = useState<string>('')

  const memoizedData = useMemo(() => {
    setMemoizationCount(prevCount => prevCount + 1)
    return initialData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }



  return (
    <>
      <NavTitle title="Search term - useMemo hook " />
      <section>
        <input className='border-2 pl-3 p-2 rounded-md m-auto my-8 focus:border-gray-400 transition-all outline-0 focus:outline-0' type="text" placeholder="Search" onChange={handleSearch} />
        <ul className='p-8 rounded-md bg-slate-100 flex flex-col gap-3 h-60 overflow-y-auto'>
          {memoizedData.map((item) => (
            <li key={item.id} className='font-bold bg-slate-200 rounded-md p-3'>{item.name}</li>
          ))}
        </ul>
        <h3 className='font-bold text-lg'>Memoization has been done: {memoizationCount}</h3>
      </section>
      <section className='flex flex-col gap-8 mt-8 text-left'>
        <p>
          The useMemo hook is a React hook that allows you to memoize a value. Memoization is a technique that improves the performance of a function by caching its results. This is particularly useful when the function is expensive to compute and its results do not change frequently.
        </p>
        <h3 className='font-bold'>Example</h3>
        <div className='p-8 overflow-x-auto max-w-xs m-auto md:max-w-screen-sm lg:max-w-screen-md'>
          <pre>
            <code>
              `{`
                            import { useMemo, useState } from 'react';

                            // Initial data array
                            const initialData = [
                              { id: 1, name: 'Apple', price: '$1' },
                              { id: 2, name: 'Banana', price: '$2' },
                              { id: 3, name: 'Grapes', price: '$3' },
                              { id: 4, name: 'Mango', price: '$4' },
                              { id: 5, name: 'Pineapple', price: '$5' },
                            ];

                            function MyComponent() {
                              // State variable for the search term
                              const [searchTerm, setSearchTerm] = useState('');

                              // Memoize the filtered data
                              const memoizedData = useMemo(() => {
                                // Filter the initial data based on the search term
                                return initialData.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
                              }, [searchTerm]);

                              // Function to handle changes to the search input
                              function handleSearch(event) {
                                setSearchTerm(event.target.value);
                              }

                              return (
                                <div>
                                  <input type="text" placeholder="Search" onChange={handleSearch} />
                                  <ul>
                                    {memoizedData.map((item) => (
                                      <li key={item.id}>{item.name}</li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            }
                        `}`
            </code>
          </pre>
        </div>
      </section>
    </>
  )
}

export default UseMemo
