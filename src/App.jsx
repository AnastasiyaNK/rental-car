import Header from "components/Header/Header";
import PopUpModal from "components/PopUpModal/PopUpModal";
import { ROUTE_PATH } from "helpers/constants";
import { Favorites, Home, Main } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={ROUTE_PATH.home} element={<Home />} />
        <Route path={ROUTE_PATH.catalog} element={<Main />} />
        <Route path={ROUTE_PATH.favorites} element={<Favorites />} />
      </Routes>
      <PopUpModal />
    </div>
  );
}

export default App;
