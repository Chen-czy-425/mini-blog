import Work  from '../page/Work';

import About from '../page/About';
import Detail from '../page/Detail';
import Index from '../page/index';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            {
                path: 'work',
                element: <Work />
            },
            {
                path: 'detail',
                element: <Detail />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    },
])

export default router;