import Article from "../../Pages/Article/Article"
import Articles from "../../Pages/Articles/Articles"
import Home from "../../Pages/Home/Home"

const routes = [
    {
        path: "",
        element: <Home />,
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/article/:articleName",
        element: <Article />
    }
]


export default routes