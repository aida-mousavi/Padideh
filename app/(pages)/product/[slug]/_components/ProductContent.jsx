import { singleProduct } from "@/public/utill/staticText";

export default function ProductContent({ activeTab, data }) {
  if (activeTab === "introduction")
    return <div dangerouslySetInnerHTML={{ __html: data?.content }} />;

  const labels = [
    singleProduct.code,
    singleProduct.category,
    singleProduct.tag,
    singleProduct.brand,
  ];

  const values = [
    data?.sku,
    data?.category,
    data?.tag,
    data?.brand,
  ];

  return (
    <div className="w-full flex space-x-4 font-semibold duration-300">
      {/* Labels */}
      <div className="space-y-2">
        {labels.map((label, i) => (
          <div key={i} className="text-blue-brand bg-blue-prime-100 w-fit rounded-sm py-1 px-2">
            {label} :
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="space-y-2">
        {values.map((val, i) =>
          Array.isArray(val) ? (
            <div key={i} className="flex space-x-2">
              {val.map((tag, idx) => (
                <div key={idx} className="rounded-sm py-1 px-2 bg-gray-main-50 w-fit">
                  {tag}
                </div>
              ))}
            </div>
          ) : (
            <div key={i} className="rounded-sm py-1 px-2 bg-gray-main-50 w-fit">
              {val}
            </div>
          )
        )}
      </div>
    </div>
  );
}
