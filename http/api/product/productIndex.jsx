export async function productIndex() {
    const res = await fetch("https://ricksanchezz.ir/v1/product", {
      next: { revalidate: 60 }
    });
    const result=await res.json()
  
    return result.data;
  }
