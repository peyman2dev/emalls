import { Instagram, MessageText } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <section className="container flex flex-col-reverse lg:flex-row  child:w-full gap-10 lg:child:w-1/2 p-10">
        <div>
          <header className="ic gap-4 flex-col md:flex-row">
            <div>
              <Link>
                <img
                  src="/public/docs/svgs/logo.svg"
                  alt="لوگو"
                  className="w-[112px]"
                />
              </Link>
            </div>
            <div className="w-px h-14 bg-black/10 hidden invisible md:visible md:block"></div>
            <div className="ic gap-1  font-medium">
              <span className="text-secondary">ایمالز </span>,
              <span>اولین موتور جستجوی کالا</span>
            </div>
          </header>
          <main className="mt-4">
            <p className="text-sm font-medium text-justify leading-[23px] text-zinc-500">
              ایمالز اولین وبسایت مقایسه قیمت در ایران است. ایمالز جستجوگر کالا
              در بین فروشگاه‌های اینترنتی است، و به خریدار کمک می‌کند تمام
              انتخاب‌های خود را در یک جا مشاهده کرده و کالاها را با قیمت
              ارزان‌تری تهیه کند. همچنین این امر موجب خرید بهتر، ارزان‌تر و
              آگاهی از قیمت واقعی اجناس می‌شود. لازم به ذکر است که ایمالز
              فروشگاه اینترنتی نیست و تنها مرجعی برای جستجو، مقایسه و معرفی کالا
              و فروشگاه‌های اینترنتی می باشد.
            </p>
          </main>
          <footer className="flex gap-4 text-xs child:p-3 lg:flex-row flex-col text-white child:duration-300 child-hover:scale-105  items-center child:w-[303px] child:gap-2 child:min-h-10 child:rounded-lg child:shadow-lg child-center mt-5">
            <Link
              to={"mailto:peyman2dev@gmail.com"}
              className="bg-secondary hover:shadow-secondary/50 shadow-secondary/20"
            >
              <span>
                <MessageText variant="Bulk" size={18} />
              </span>
              <span className="text-xs">پشتیبانی ایمیل</span>
              <span className="w-14 h-[2px] rounded-lg bg-white/40"></span>
              <span className="text-xs">emalls@dev.com</span>
            </Link>
            <Link
              to={"https://instagram.com/peyman2dev"}
              className="bg-[#292C33]  hover:shadow-[#292c3367]"
            >
              <span>
                <Instagram size={18} />
              </span>
              <span className="text-xs">اینستاگرام</span>
              <span className="w-14 h-[2px] rounded-lg bg-white/40"></span>
              <span className="text-xs">@emalls_site</span>
            </Link>
          </footer>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row child:lg:w-1/3">
          <div>
            <p>ایمالز</p>
            <div className="child:my-4 text-sm font-normal child:block child mt-5 child:duration-150 child-hover:text-secondary child:w-full text-zinc-500">
              <Link>ایمالز چه کمکی می کند؟</Link>
              <Link>فروشگاه ها</Link>
              <Link>کالاهای تخفیف دار</Link>
              <Link>ثبت فروشگاه</Link>
            </div>
          </div>
          <div>
            <p>خدمات</p>
            <div className="child:my-4 text-sm font-normal child:block child mt-5 child:duration-150 child-hover:text-secondary child:w-full text-zinc-500">
              <Link>وبلاگ</Link>
              <Link>لیست قیمت گوشی موبایل</Link>
              <Link>شرایط و قوانین</Link>
              <Link>تماس با ما</Link>
            </div>
          </div>
          <div>
            <p className="w-full text-center">
              دانلود
              <span className="text-secondary mx-1 font-bold">
                اپلیکیشنمون!
              </span>
            </p>
            <div className="mt-3 child:py-5 child:shadow-xl child:my-2 text-white child:px-4 text-sm block w-full child:w-full child:rounded-2xl child-between">
              <Link className="bg-[#0ea960] shadow-[]">
                <span>از طریق بازار</span>
                <span>
                  <img src="/public/docs/svgs/bazar.svg" alt="" />
                </span>
              </Link>
              <Link className="bg-[#000000] shadow-[]">
                <span>از طریق گوگل پلی</span>
                <span>
                  <img src="/public/docs/svgs/playstore.svg" alt="" />
                </span>
              </Link>
              <Link className="bg-[#0091ea] shadow-[]">
                <span>از طریق  مایکت</span>
                <span>
                  <img src="/public/docs/svgs/myket.svg" alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
