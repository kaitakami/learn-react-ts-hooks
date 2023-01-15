import NavTitle from "../components/NavTitle"

const About = () => {
    return (
        <div className="flex container flex-col justify-between">
            <NavTitle title="About" />
            <article className="mt-14 flex flex-col gap-8">
                <p className="text-left">
                    Hi! I'm Kai Takami, the developer of this site. I created this website with the intention of sharing basic examples of how the most used hooks can be applied to daily life implementations, like a form, input, data fetching, etc. The content is divided in several classes, it's made so you can go from the top to the bottom classes, however if there's something in particular that you want to learn you can access to any class, you don't need prior knowledge.
                </p>
                <p className="font-bold">
                    Hope you enjoy and learn hooks after watching the examples in this website!
                </p>
            </article>
            <div className="flex justify-around flex-col gap-4 sm:gap-0 sm:flex-row">
                <a href="https://twitter.com/kaitakami_" className="bg-white text-gray-300 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out group hover:border-gray-400 hover:text-sky-500 border-2" target="_blank" rel="noreferrer noopener">
                    <span className="font-bold">My twitter</span>
                </a>
                <a href="https://kaitakami.dev" className="bg-white text-gray-300 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out group hover:border-gray-400 hover:text-green-500 border-2" target="_blank" rel="noreferrer noopener">
                    <span className="font-bold">My website</span>
                </a>
                <a href="https://github.com/kaitakami" className="bg-white text-gray-300 font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-150 ease-in-out group hover:border-gray-400 hover:text-gray-500 border-2" target="_blank" rel="noreferrer noopener">
                    <span className="font-bold">License</span>
                </a>
            </div>
        </div>
    )
}

export default About
