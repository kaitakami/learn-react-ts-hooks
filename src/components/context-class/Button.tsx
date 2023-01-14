import { useContext } from "react"
import { themeContext } from '../../pages/UseContext';
const Button = () => {
    const { theme, handleThemeChange } = useContext(themeContext) || { theme: 'light', handleThemeChange: () => { } }

    const themeClasses: string = theme === 'light' ? "bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md" : "bg-gray-200 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md"

    return (
        <button className={themeClasses} onClick={handleThemeChange}>Change My color!</button>
    )
}

export default Button
