import React from "react";
import ContactUs from "@/components/contact-us/component/ContactUs";

export default function Contact() {
  return (
    <div className="w-full space-y-14 container-base md:container-xl">
      <div className="text-lg  lg:text-3xl font-semibold text-center px-6 ">
        <div>پشت هر دستاورد بزرگ، تیمی از انسان‌های برجسته ایستاده است؛ </div>
        <div className="mt-1">اینجا با رهبران فنی و اجرایی پدیده آشنا شوید</div>
      </div>

      <ContactUs />
    </div>
  );
}
