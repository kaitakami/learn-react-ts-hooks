import NavTitle from '../components/NavTitle'

const Memoization = () => {
    return (
        <>
            <NavTitle title='Memoization' />
            <article className='mt-14 text-left flex flex-col gap-8'>
                <p>Memoization is a technique used in computer science to improve the performance of a function by caching its results. In React, memoization can be used to prevent unnecessary re-renders of components by comparing the previous props and state with the next ones, and only re-rendering the component if they have changed.</p>

                <h3 className='font-bold'>Example:</h3>
                <pre>
                    <code>
                        {`const MyComponent = React.memo(function MyComponent({data}) {
                            // component render logic here
                        });`}
                    </code>
                </pre>
                <p>In this example, the <code>React.memo</code> function is used to wrap a functional component. This tells React to compare the previous props with the next ones, and only re-render the component if they have changed. It's important to note that React.memo only shallowly compare props, meaning if the props are objects or arrays, it only compares their references, not their content.</p>

                <p>Another way to achieve memoization is by using the <code>useMemo</code> hook, which allows you to memoize a value that is computed inside a component, so that it will only be recomputed if one of its dependencies has changed:</p>
                <pre>
                    <code>
                        {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
                    </code>
                </pre>
                <p>In this example, the <code>useMemo</code> hook is used to memoize the result of the <code>computeExpensiveValue</code> function, so that it will only be recomputed if the values of <code>a</code> or <code>b</code> have changed.</p>

                <p>Both, <code>React.memo</code> and <code>useMemo</code> are powerful tools to improve the performance of your React application by avoiding unnecessary re-renders and recomputations.</p>
            </article>
        </>
    )
}

export default Memoization
