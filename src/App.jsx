import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./Utils/Routes/routes";
import dispatcher from "./Utils/Functions/dispatcher";
import ModalContext from "./Utils/Contexts/ModalContext";
import Modal from "./Components/Reusable/Modal/Modal";
import { useSelector } from "react-redux";

export default function App() {
  const appRouter = useRoutes(routes);
  const [show, setShow] = useState(false);
  const [modalEl, setModalEl] = useState({});
  const { bestSellings } = useSelector((state) => state.client);
  // Api Fetch All Data
  dispatcher();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <ModalContext.Provider
        value={{
          show,
          setShow,
          modalEl,
          setModalEl,
        }}
      >
        {/* App Router */}
        {appRouter}

        {/* Modal */}
        <Modal />
        {/* {bestSellings && bestSellings.title ? "" : 
        <div className="w-full h-screen items-center justify-center flex fixed top-0 right-0 bg-black/40 z-[40!important] backdrop-blur-sm"></div>} */}
      </ModalContext.Provider>
    </>
  );
}
