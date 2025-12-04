import Title from "@/components/Title";
import Accordion from "./Accordion";
import { text } from "@/public/utill/staticText";

const faqs = [
  {
    id: "1",
    title: "چطور سفارش ثبت کنم؟",
    content: "به سادگی از صفحه محصول، گزینه خرید را انتخاب کنید.",
  },
  {
    id: "2",
    title: "زمان ارسال چقدره؟",
    content: "ارسال بین ۲ تا ۴ روز کاری انجام می‌شود.",
  },
    {
    id: "3",
    title: "زمان ارسال چقدره؟",
    content: "ارسال بین ۲ تا ۴ روز کاری انجام می‌شود.",
  },
  {
    id: "4",
    title: "زمان ارسال چقدره؟",
    content: "ارسال بین ۲ تا ۴ روز کاری انجام می‌شود.",
  },
];

export default function Page() {
  return (
    <div className="w-full container-base md:container-xl">
      <Title title={text.faq}/>
      <Accordion items={faqs} />
    </div>
  );
}
