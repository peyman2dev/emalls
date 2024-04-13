import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Utils/Routes/routes";
import dispatcher from "./Utils/Functions/dispatcher";
import ModalContext from "./Utils/Contexts/ModalContext";
import Modal from "./Components/Reusable/Modal/Modal";

export default function App() {
  const appRouter = useRoutes(routes);
  const [show, setShow] = useState(false);
  const [modalEl, setModalEl] = useState({});
  // Api Fetch All Data
  dispatcher();


  
  
  return (
    <>
      <ModalContext.Provider
        value={{
          show,
          setShow,
          modalEl,
          setModalEl
        }}
      >
        {/* App Router */}
        {appRouter}

        {/* Modal */}
        <Modal />
      </ModalContext.Provider>
    </>
  );
}
