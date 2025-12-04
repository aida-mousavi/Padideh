function TextSheet({title,description,position,padding="px-5"}) {
  return (
    <div className={`w-full px-4 lg:w-[390px] flex flex-wrap justify-center lg:absolute  ${position} `}>
      <div className={`bg-nuetral-main-20 p-3 rounded-full text-lg lg:text-2xl font-bold text-center w-fit ${padding}`}>
       {title}
      </div>
      <div className="text-xs lg:text-sm text-nuetral-main-90 mt-3 leading-5 lg:leading-6 text-center w-full">
       {description}
      </div>
    </div>
  );
}

export default TextSheet
