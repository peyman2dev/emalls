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
    }
]


export default routes