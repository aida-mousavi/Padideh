

export default function PicBorder({children }) {
  return (
    <div className=" relative w-full flex flex-wrap flex-none justify-between p-[4vw] lg:p-16 h-[450px]">
        <div className="border w-[155px] h-[107px] border-blue-main border-b-0 border-l-0 rounded-tr-2xl absolute top-0 right-0 "></div>
        <div className="border w-[155px] h-[107px] border-blue-main border-b-0 border-r-0 rounded-tl-2xl absolute top-0 left-0 "></div>
        <div className="border w-[155px] h-[107px] border-blue-main border-t-0 border-r-0 rounded-bl-2xl absolute bottom-0 left-0"></div>
        <div className="border w-[155px] h-[107px] border-blue-main border-t-0 border-l-0 rounded-br-2xl absolute bottom-0 right-0"></div>
      {children }
</div>
  )
}

