import { Layout, Loader } from "components";
import PopUpModal from "components/PopUpModal/PopUpModal";
import { ROUTE_PATH } from "helpers/constants";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectCarIsLoading } from "./redux/carsSlice.selectors";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Main = lazy(() => import("./pages/Main/Main"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  const isLoading = useSelector(selectCarIsLoading);
  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={ROUTE_PATH.home} element={<Home />} />
            <Route path={ROUTE_PATH.catalog} element={<Main />} />
            <Route path={ROUTE_PATH.favorites} element={<Favorites />} />
          </Routes>
          <PopUpModal />
        </Suspense>
      </Layout>
      {isLoading ? <Loader /> : null}
    </div>
  );
}

export default App;
