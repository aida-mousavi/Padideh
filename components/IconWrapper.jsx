import Image from "next/image";
import { iconBg, iconPaths } from "@/public/utill/staticText";

export default function IconWrapper({ item }) {
  const bgClass = iconBg[item] ?? "bg-[#BAD7FF]";
  const iconSrc = iconPaths[item];

  return (
    <div
      className={`
        w-12 h-12
        lg:w-[62px] lg:h-[62px]
        rounded-xl lg:rounded-[20px]
        shrink-0 flex justify-center items-center
        ${bgClass}
      `}
    >
      <Image
        src={iconSrc}
        alt={item}
        width={28}
        height={28}
        className="w-5 h-5 lg:w-7 lg:h-7"
      />
    </div>
  );
}
