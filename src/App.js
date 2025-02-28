import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },

        {
          path: "/watch",
          element: <WatchVideo />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>;
      </Provider>
    </div>
  );
}

export default App;
