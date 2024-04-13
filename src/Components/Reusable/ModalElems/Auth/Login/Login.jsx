import React from "react";
import useModal from "../../../../../Utils/Hooks/useModal";
import Register from "../Register/Register";
import { Field, Formik } from "formik";
import { Link } from "react-router-dom";
export default function Login() {
  const modalOpts = useModal();

  return (
    <>
      <main className="w-full">
        <div>
          <div className="flex font-bold text-zinc-700 text-lg tracking-tight items-center justify-center gap-1">
            <span>ورود به</span>
            <span className="text-secondary">ایمالز</span>
          </div>
          <p className="mt-1 text-sm text-center text-zinc-400">
            لطفا شماره تماس یا ایمیل خود را وارد نمایید.
          </p>
        </div>

        <div className="my-10 flex-col  flex w-full">
          <Formik className="bg-rose-500 flex w-full">
            {() => (
              
              <>
                <Field
                  className="input-element"
                  placeholder="شماره تماس یا ایمیل خود را وارد نمائید ..."
                />

                <Field
                  type="password"
                  className="input-element"
                  placeholder="گذرواژه خود را وارد نمائید ..."
                />
              </>

            )}
          </Formik>
          <div className="my-2 flex text-xs tracking-tighter gap-2 ">
            <span>کلمه عبور را فراموش کرده‌اید؟</span>
            <Link className="text-secondary">ایجاد رمز جدید</Link>
          </div>
          <div className="mt-3 select-none flex items-center gap-2">
            <input id="remember_me" type="checkbox" />
            <label for="remember_me">مرا به خاطر بسپار</label>
          </div>
          <div className="mt-4">
            <button className="bg-secondary h-10 text center flex items-center justify-center w-full rounded-lg text-white">
              ورود
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex items-center font-medium gap-1  text-sm tracking-tighter">
          <span>کاربر جدید هستید؟</span>
          <button
            className="text-secondary"
            onClick={() => modalOpts.setModalEl(<Register />)}
          >
            ثبت نام در ایمالز
          </button>
        </div>
      </footer>
    </>
  );
}
