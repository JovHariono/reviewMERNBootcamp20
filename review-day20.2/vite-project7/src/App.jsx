import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ContextApplication } from "./libs/config/contexts";
import PageCommonOutlet from "./pages/commons/PageCommonOutlet";
import PageBarangList from "./pages/barang/PageBarangList";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <ContextApplication.Provider
        value={{ isAuthenticated, setIsAuthenticated }}
      >
        <HashRouter>
          <Routes>
            <Route path="/" element={<PageCommonOutlet />}>
              <Route index={true} element={<PageBarangList />}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </ContextApplication.Provider>
    </>
  );
};

export default App;
