import React, { useContext } from "react";
import ModalContext from "../Contexts/ModalContext";

export default function useModal() {
  const { modalEl, setModalEl, show, setShow } = useContext(ModalContext);

  return { modalEl, setModalEl, modalShow: show, setModalShow: setShow };
}
