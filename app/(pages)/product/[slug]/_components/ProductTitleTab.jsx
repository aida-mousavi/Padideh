import { tabsSingleProduct } from "@/public/utill/staticText";

export default function TitleTab({ activeTab, setActiveTab }) {
 

  return (
  
      <div className="flex gap-x-2.5 font-semibold mb-5 duration-300">
        {tabsSingleProduct.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <div key={tab.key} className="cursor-pointer">
              <button
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`duration-300 px-3 bg-transparent border-none outline-none cursor-pointer ${
                  isActive ? "text-blue-secondary" : "text-outline"
                }`}
              >
                {tab.label}
              </button>

              <span
                className={`duration-300 block w-full border-t-[1.5px] mt-1 ${
                  isActive ? "border-blue-secondary" : "border-outline"
                }`}
              />
            </div>
          );
        })}
      </div>
  
  );
}
