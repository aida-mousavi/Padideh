

export default function BoxWhyUs({data}) {
  return (
    <div className="flex  flex-col justify-between h-full ">
    {data?.map((panel, index) => (
          <div key={index} className={`  flex  flex-wrap  `}>
            <div className="flex-none">
              <div className="md:text-base lg:text-2xl font-black mb-1">{panel.title}</div>

              <ul className="">
                {panel.items?.map((item, i) => (
                  <li key={i} className={`text-neutral-main-90 font-light md:text-sm lg:text-base `}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  )
}

