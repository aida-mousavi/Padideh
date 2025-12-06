export async function blogShow(id) {
  console.log(`https://ricksanchezz.ir/v1/blog/${id}`)
    const res = await fetch(`https://ricksanchezz.ir/v1/blog/${id}`, {
      cache: "force-cache", 
    });
    return res.json();
  }
  