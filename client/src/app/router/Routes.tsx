import { createBrowserRouter } from "react-router";
import App from "../loyout/App";
import ActivityDetails from "../../features/details/ActivityDetails";
import ActivityForm from "../../features/form/ActivityForm";
import ActivityDashboard from "../../features/dashboard/ActivityDashboard";
import HomePage from "../../features/home/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm /> },
        ]
    },
]);