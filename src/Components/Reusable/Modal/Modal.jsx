import React, { useContext } from "react";
import ModalContext from "../../../Utils/Contexts/ModalContext";
import useModal from "../../../Utils/Hooks/useModal";
import { LogoutCurve } from "iconsax-react";

export default function Modal() {
  const modalOpts = useModal()

  return (
    <section
      onClick={() => modalOpts.setModalShow(!modalOpts.modalShow)}
      className={`w-full flex items-center ${
        modalOpts.modalShow ? "" : "opacity-0 invisible"
      } duration-150  justify-center fixed h-screen z-20 top-0 right-0 bg-black/30 backdrop-blur-sm`}
    >
      <form
        onClick={(event) => event.stopPropagation()}
        onSubmit={event => event.preventDefault()}
        className="lg:w-[500px] w-full h-screen lg:max-h-max lg:h-max flex items-center justify-center gap-4 flex-col px-10 py-6 bg-white rounded-xl shadow-2xl"
      >
        <header className="flex items-center w-full justify-end">
          <button 
          onKeyDown={event => event.stopPropagation()}
           className="text-zinc-500 max-w-max" onClick={() => modalOpts.setModalShow(!modalOpts.modalShow)}>
            <LogoutCurve />
          </button>

        </header>
        {modalOpts.modalEl && modalOpts.modalEl.$$typeof ? 
        modalOpts.modalEl :
        "Nothing to show .."
        }
        
      </form>
    </section>
  );
}
