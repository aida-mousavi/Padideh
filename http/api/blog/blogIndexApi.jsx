export async function blogIndexApi() {
    const res = await fetch("https://ricksanchezz.ir/v1/blog", {
      next: { revalidate: 60 }
    });
    const result=await res.json()

  
    return result.data;
  }
