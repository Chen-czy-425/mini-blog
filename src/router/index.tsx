import Work  from '../page/Work';

import About from '../page/About';
import Detail from '../page/Detail';
import App from '../App'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,  // 这是默认的子路由
                element: <Work />
            },
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