import { Navigate, useRoutes } from "react-router-dom"
import {Home} from "../components/Home";
import {About} from "../components/About";
import {AddOrEdit} from "../components/AddOrEdit";
import Detail from "../components/Detail";
import Tel from "../components/Tel";
import Email from "../components/Email";
import Todo from "../views/todo/Todo";

function Router() {
    return useRoutes([
        {
            path: '/home',
            element: <Home />
        },
        {
            path: "/about",
            element: <About />,
            children: [
                {
                    path: 'email',
                    element: <Email></Email>
                },
                {
                    path: 'tel',
                    element: <Tel></Tel>
                },
                {
                    path: "",
                    element: <Navigate replace to='email'></Navigate> 
                },
            ]
        },
        {
            path: "/AddOrEdit",
            element: <AddOrEdit />
        },
        {
            path: "/edit/:id",
            element: <AddOrEdit />
        },
        {
            path: "/todo",
            element: <Todo />
        },
        {
            path: "/Detail/:id",
            element: <Detail />
        },
        {
            path: "/",
            element: <Navigate replace to='/home'></Navigate> 
        },
    ])
}
export default Router