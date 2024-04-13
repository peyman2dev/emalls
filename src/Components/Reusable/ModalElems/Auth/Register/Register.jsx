import React from "react";
import useModal from "../../../../../Utils/Hooks/useModal";
import Login from "../Login/Login";
import { LogoutCurve } from "iconsax-react";
import { Field, Formik } from "formik";

export default function Register() {
  const modalOpts = useModal();

  return (
    <>
      <main className="w-full">
        <div className="mb-5">
          <div className="flex-center gap-1">
            <span>ثبت نام در</span>
            <span className="text-secondary">ایمالز</span>
          </div>
          <div className="mt-1 text-sm text-center text-zinc-400">
            <p>لطفا شماره تماس یا ایمیل خود را وارد نمایید.</p>
          </div>
        </div>
        <Formik> 
          {({ value, changeHandle, submitHandle }) => (
            <>
              <Field
                className="input-element"
                placeholder="شماره موبایل یا ایمیل خود را وارد نمائید ..."
              />
              <Field
                className="input-element"
                placeholder="گذرواژه را وارد نمائید ..."
                type="password"
              />
            </>
          )}
        </Formik>
          <button className="h-10 w-full items-center justify-center bg-secondary mt-2 text-white rounded-lg shadow-lg shadow-secondary/40 hover:shadow-secondary/50 duration-150">
            ثبت نام
          </button>
      </main>
      <footer className="flex items-center justify-center text-sm gap-1">
        <span>حساب کاربری دارم.</span>
        <button
          className="text-secondary font-bold"
          onClick={() => modalOpts.setModalEl(<Login />)}
        >
          ورود به ایمالز
        </button>
      </footer>
    </>
  );
}
