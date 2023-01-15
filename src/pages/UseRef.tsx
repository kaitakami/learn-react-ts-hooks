import NavTitle from '../components/NavTitle';
import { useRef } from 'react';
const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      <NavTitle title="Focus Input - useRef hook" />
      <section className='flex gap-8 justify-center mt-14'>
        <input type="text" placeholder="Enter text here" ref={inputRef} className='border-2 pl-3 focus:outline-gray-600 outline-gray-300 transition-all' />
        <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md' onClick={handleClick}>Focus Input</button>
      </section>
      <section className='mt-14 flex flex-col gap-8 text-left'>
        <p>The <code>useRef</code> hook in React allows you to create a reference to a DOM element or a component instance. This can be useful for accessing the underlying element's properties and methods, such as focus or value, as well as for creating and storing a reference to a component instance.</p>

        <h3 className='font-bold'>Example:</h3>
        <pre>
          <code>`{`
          import { useRef } from 'react';

          function MyComponent() {
            // create a ref with initial value of null
            const myRef = useRef(null);

            return (
              <div>
                {/* Attach the ref to an element using the ref prop */}
                <input ref={myRef} type="text" placeholder="Enter text here" />
                <button onClick={() => myRef.current.focus()}>Focus Input</button>
              </div>
            );
          }
      `}`
          </code>
        </pre>
        <p>In this example, the <code>useRef</code> hook is used to create a ref that is attached to the <code>input</code> element via the <code>ref</code> prop. The ref is then used to call the <code>focus</code> method on the input element when the button is clicked.</p>

        <p>The <code>useRef</code> hook returns an object with a single property called <code>current</code> which initially is set to the value passed to <code>useRef</code> . It's important to note that the <code>current</code> value of a ref will persist across re-renders, unlike state which is reset with each re-render. Also, it's not necessary to use <code>useRef</code> for every DOM element, only when you need to access the element directly.</p>
      </section>
    </>
  )
}

export default UseRef
