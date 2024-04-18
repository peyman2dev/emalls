import Article from "../../Pages/Article/Article"
import Articles from "../../Pages/Articles/Articles"
import Home from "../../Pages/Home/Home"
import Product from "../../Pages/Product/Product"
import Search from "../../Pages/Search/Search"
import Seller from "../../Pages/Seller/Seller"

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
    },
    {
        path: "/search/:query",
        element: <Search />
    },
    {
        path: "/seller/:sellerID",
        element: <Seller />
    }
]


export default routes