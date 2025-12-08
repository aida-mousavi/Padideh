import config from "@/config/appConfig";

export async function projectIndex() {
  try {
    const res = await fetch(`${config.apiBaseUrl}/project`, {
      cache: "force-cache", 
      next: { revalidate: 60 }, 
    });

    if (!res.ok) {
      throw new Error("خطا در دریافت پروژه");
    }

    return await res.json();
  } catch (err) {
    console.error("❌ projectIndex Error:", err);

    return {
      error: true,
      message: "در حال حاضر امکان دریافت اطلاعات وجود ندارد. لطفاً کمی بعد دوباره تلاش کنید.",
      data: [],
    };
  }
}
