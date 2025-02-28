import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

function App() {
  const AppLayout = () => {
    return (
      <div className="App">
        <Provider store={store}>
          <Head />
          <Outlet />
        </Provider>
      </div>
    );
  };

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  }]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
