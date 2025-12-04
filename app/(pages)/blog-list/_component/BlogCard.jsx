export default function BlogCard({order}) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className={`max-w-[600px] lg:max-w-[312px]  h-[219px] rounded-4xl p-8 bg-blue-prime-100 space-y-3 ${order===1 ? "order-1" : "order-2"}`}>
        <div className="text-[22px]">فروردین 1404</div>
        <div className="text-lg">
          چرا کانال‌های پیش‌عایق آینده صنعت تهویه هستند
        </div>
        <div className="h-11 w-[109px] border-[1.5px] border-outline rounded-2xl text-outline  text-base font-semibold flex justify-center items-center">
          بیشتر بدانید
        </div>
      </div>

      <div className={` h-[245px] max-w-[600px] lg:max-w-[312px] rounded-4xl bg-red-400 ${order===1 ? "order-2" : "order-1"} `}></div>
    </div>
  );
}
