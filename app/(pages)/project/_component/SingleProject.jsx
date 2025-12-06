import Title from "@/components/Title";
import useShamsiDate from "@/hooks/useShamsiDate";
import Image from "next/image";

export default function SingleProjectSection({ data }) {

 


  const {
    location,
    date,
    projectTitle,
    works,
    description,
    duration,
    durationDescription,
    area,
    areaDescription,
    images,
  } = data || {};




  

  return (
    <div className="space-y-8">
      <Title>
        <span className="text-black-body">{location}</span>
        <span className="text-blue-brand px-3">{useShamsiDate(date)}</span>
      </Title>

      <div className="container-base md:container-xl w-full">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center px-10 mb-5 space-y-3">
          <div className="font-bold text-lg lg:text-2xl max-w-[360px]">
            {projectTitle} | {works}
          </div>

          <p className="lg:text-lg font-light text-dark-main">
            {description}
          </p>
        </div>

        {/* Images + Info */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-3">

          {/* Left Box */}
          <InfoCard
            title={`اجرای پروژه :  ${duration}`}
            text={durationDescription}
            bg="bg-blue-prime-100"
            image={images?.[1]}
            imagePosition="bottom"
          />

          {/* Middle Image */}
          <ImageCard src={images?.[0]} />

          {/* Right Box */}
          <InfoCard
            title={`${area}+ متر زیر بنا`}
            text={areaDescription}
            bg="bg-gray-100"
            image={images?.[2]}
            imagePosition="top"
          />

        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function InfoCard({ title, text, bg, image, imagePosition }) {
  return (
    <div className="h-[187px] lg:h-[472px] w-full max-w-[600px] lg:max-w-[365px] flex flex-col justify-between">

      {imagePosition === "top" && (
        <ImageWrapper src={image} className="hidden lg:flex h-[55%]" />
      )}

      <div className={`rounded-4xl p-8 space-y-3 w-full h-full lg:h-[43%] ${bg}`}>
        <div className="text-2xl lg:text-4xl font-medium">{title}</div>
        <p className="text-base lg:text-lg text-black-body font-light line-clamp-4">
          {text}
        </p>
      </div>

      {imagePosition === "bottom" && (
        <ImageWrapper src={image} className="hidden lg:flex h-[55%]" />
      )}
    </div>
  );
}

function ImageCard({ src }) {
  return (
    <div className="h-[277px] lg:h-[472px] w-full max-w-[600px] lg:max-w-[365px] rounded-4xl bg-gray-200 overflow-hidden">
      <Image
        src={src}
        width={400}
        height={277}
        className="w-full h-full object-cover rounded-4xl"
        alt="project"
      />
    </div>
  );
}

function ImageWrapper({ src, className }) {
  return (
    <div className={`w-full rounded-4xl overflow-hidden ${className}`}>
      <Image
        src={src}
        width={400}
        height={277}
        className="w-full h-full object-cover"
        alt="project"
      />
    </div>
  );
}
