import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ItemDetailsIndex from "./pages/ItemDetailsIndex/ItemDetailsIndex";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import Layout from "./Layout";
import ItemsList from "./pages/ItemsList/ItemsList";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import NotFound from "./components/NotFound";
import { getStoreItemsLoader } from "./utils/loaders";
import { addItemAction } from "./utils/actions";

const ItemsListWithLoader = () => {
  const items = useLoaderData();
  return <ItemsList items={items} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "items",
        element: <Items />,
        children: [
          {
            index: true,
            element: <ItemsListWithLoader />,
            loader: getStoreItemsLoader,
          },
          { path: "add-item", element: <AddItem />, action: addItemAction },
          {
            path: ":itemId",
            element: <ItemDetails />,
            children: [
              { index: true, element: <ItemDetailsIndex /> },
              { path: "update-item", element: <UpdateItem /> },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
