import { createContext, useState } from 'react';
import NavTitle from "../components/NavTitle";
import Container from '../components/context-class/Container';

type Theme = 'light' | 'dark'

interface ThemeContext {
    theme: Theme;
    handleThemeChange: () => void
}

export const themeContext = createContext<ThemeContext | null>(null)

const UseContext = () => {
    const [theme, setTheme] = useState<Theme>('light')

    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <NavTitle title="Dark mode - useContext hook" />
            <section className="my-8">
                <p>
                    useContext is a hook in React that allows a component to access and consume context, a way to share information between components without passing props down through multiple levels of the component tree.
                </p>
                <h3 className="text-xl font-bold my-8">How to use useContext</h3>
                <p>
                    To use useContext in a component, you first need to create a context using the createContext function from the react module. This function takes an optional default value as its argument.
                </p>
                <pre className="text-left">
                    <code>
                        `
                        {`
                            const MyContext = React.createContext();
                        `}
                        `
                    </code>
                </pre>
                <p>
                    Once you have created the context, you can use the MyContext.Provider component to provide a value for the context. This component should be placed higher in the component tree where the value is determined. The value prop is used to pass the context value down to the components that consume it.
                </p>
                <pre className="text-left">
                    <code>
                        `
                        {`
                            function App() {
                                const value = { name: "John Doe" };

                                return (
                                  <MyContext.Provider value={value}>
                                    <Child />
                                  </MyContext.Provider>
                                );
                            }
                        `}
                        `
                    </code>
                </pre>
                <p>
                    In the components that need to consume the context, you can use the useContext hook to access the context value. The hook takes the context as its argument and returns the current context value.
                </p>
                <pre className="text-left">
                    <code>
                        `
                        {`
                            function Child() {
                                const context = useContext(MyContext);
                                return <div>Hello {context.name}</div>;
                            }
                        `}
                        `
                    </code>
                </pre>
                <p>
                    When a component is consuming the context, it re-renders automatically when the context value is updated by the provider. This allows the component to always have the latest data. It's also worth noting that useContext is designed to be used with functional components, but it can also be used with class components by using the static contextType property. useContext is a powerful tool that can help simplify your component hierarchy and avoid prop drilling. It can also help make your components more reusable and independent of the component tree they are in. However, it's important to use it judiciously, as too much context can make your codebase harder to understand reason about.
                </p>
            </section>
            <section>
                <h3 className="font-bold">Dark Mode</h3>
                <div>
                    <themeContext.Provider value={{ theme: theme, handleThemeChange: handleThemeChange }}>
                        <Container />
                    </themeContext.Provider>
                </div>
            </section>
        </>
    );
};

export default UseContext;
