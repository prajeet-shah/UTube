import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Head />
          <Body />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },

        {
          path: "/watch",
          element: <WatchVideo />,
        },
        {
          path: "/results",
          element: <SearchResult />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>;
      </Provider>
    </div>
  );
}

export default App;
