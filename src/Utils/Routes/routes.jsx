import Article from "../../Pages/Article/Article"
import Articles from "../../Pages/Articles/Articles"
import Home from "../../Pages/Home/Home"
import Product from "../../Pages/Product/Product"

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
    },
    {
        path: "/product/:productName",
        element: <Product />
    }
]


export default routes