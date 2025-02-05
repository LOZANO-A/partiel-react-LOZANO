/* fichier root.jsx */
import { createBrowserRouter } from "react-router-dom";
/* todo */

const router = createBrowserRouter([
{
    path: "/",
    element: <Home />
    },
    {
    path: "/about",
    element: <About />
    },
    {
    path: "/article",
    element: <Article />
    }

]);

export default router;
            