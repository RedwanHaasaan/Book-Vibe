import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import ListedBooks from "../pages/ListedBooks.jsx";
import PagesToRead from "../pages/PagesToRead.jsx";
import BookDetails from "../pages/BookDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "listedbooks",
                element: <ListedBooks/>
            },
            {
                path: "pagestoread",
                element: <PagesToRead/>
            },
            {
                path: "bookdetails/:id",
                element: <BookDetails/>
            }
        ]
    },
]);


export default router;