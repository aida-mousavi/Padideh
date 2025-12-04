import config from "@/config/appConfig"
export async function productShow(id=1) {



  console.log(config.apiBaseUrl)
    const res = await fetch(`${config.apiBaseUrl}/product/${id}`, {
      next: { revalidate: 60 }
    });
    const result=await res.json()
  
    return result.data;
  }
