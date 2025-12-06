export default function Title({ title = null, description, children = null }) {
  return (
    <div className="w-full mb-6  md:mb-12 ">
      <div className="w-full   relative">
        <div className="w-full h-[1.5px] border-b-[1.5px] border-gray-active absolute top-[50%] left-0 -translate-y-[50%] z-[-1]"></div>

        <div className="text-lg w-fit max-w-[340px] md:max-w-[700px] lg:max-w-[1400px]   bg-white px-4 md:px-8 lg:px-12 ms-5 lg:ms-10">
          {title ? (
            <div className="md:text-3xl  lg:text-[40px] font-semibold">
              {title}
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>

      <div className="text-xs md:text-sm lg:text-xl text-nuetral-main-90 font-light mt-1   md:mt-3  container-base md:container-xl">
        {description}
      </div>
    </div>
  );
}
