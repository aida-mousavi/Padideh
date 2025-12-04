// import Title from "@/components/Title";
// import { project } from "@/public/utill/staticText";

import Title from "@/components/Title";

// import ProjectSlider from "./_component/ProjectSlider";
export default function SingleProject() {
  const projectStatic = {
    projectTitle: "مرکز تجاری الماس شرق",
    location: "مشهد",
    date: "اردیبهشت 1404",
    description: "نصب کامل سیستم داکت پیش‌عایق در فاز توسعه جدید مجموعه",

    works: "اجرای کانال‌های پیش‌عایق در واحدهای تهویه",

    area: 4680,
    areaDescription:
      "زیر بنای این پروژه در مقیاس بزرگ و قابل مقایسه با مراکز مدرن تجاری دنیا می‌باشد.",

    duration: "6 ماه",
    durationDescription:
      "ساخت این پروژه از بهمن 1397 الی اردیبهشت 1398 به طول انجامید.",

    images: [
      "image_tower.jpg",
      "image_city.jpg",
      "image_minaret.jpg",
      "image_tile.jpg",
    ],
  };

  return (
    <div className="">
      <Title>
          <span className="text-black-body">{projectStatic.location}</span>
          <span className="text-blue-brand px-3">{projectStatic.date}</span>
      </Title>


   <div className="container-base md:container-xl w-full">


   <div className="flex flex-wrap justify-between items-center px-10 mb-5 space-y-3">
        <div className="font-bold text-lg lg:text-2xl max-w-[360px]">
          {projectStatic.projectTitle} | {projectStatic.works}{" "}
        </div>
        <div className="lg:text-lg font-light text-dark-main">
          {projectStatic.description}
        </div>
      </div>

      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-3">
        <div className="h-[187px] lg:h-[472px] w-full max-w-[600px] lg:max-w-[365px] flex flex-col justify-between flex-wrap">
          <div className="w-full h-full lg:h-[43%] rounded-4xl p-8 bg-blue-prime-100 ">
            1
          </div>
          <div className="w-full h-[55%] rounded-4xl p-8 bg-red-400 hidden lg:flex "></div>
        </div>

        <div className="h-[277px] lg:h-[472px] w-full max-w-[600px] lg:max-w-[365px] rounded-4xl bg-red-400  ">
          2
        </div>

        <div className="h-[187px] lg:h-[472px] w-full max-w-[600px] lg:max-w-[365px] flex flex-col justify-between flex-wrap">
          <div className="w-full h-[55%] rounded-4xl p-8 bg-red-400 hidden lg:flex "></div>
          <div className="w-full h-full lg:h-[43%] rounded-4xl p-8 bg-gray-100 ">
            3
          </div>
        </div>
      </div>
   </div>

    </div>
  );
}
