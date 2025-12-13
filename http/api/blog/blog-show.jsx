import config from "@/config/appConfig";

export async function blogShow(id) {
  try {
    const res = await fetch(`${config.apiBaseUrl}/blog/${id}`, {
      cache: "force-cache",
      next: { revalidate: 60 }, 
    });

    if (!res.ok) {
      throw new Error("خطا در دریافت اطلاعات بلاگ");
    }

    const result = await res.json();
    return result.data;

  } catch (error) {
    console.error("❌ blogShow Error:", error);

    return {
      error: true,
      message:
        "در حال حاضر امکان دریافت اطلاعات وجود ندارد. لطفاً کمی بعد دوباره تلاش کنید.",
      data: null,
    };
  }
}
