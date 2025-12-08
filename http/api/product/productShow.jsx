import config from "@/config/appConfig";

export async function productShow(id = 1) {
  try {
    const res = await fetch(`${config.apiBaseUrl}/product/${id}`, {
      next: { revalidate: 60 },    });

    if (!res.ok) {
      throw new Error("خطا در دریافت محصول");
    }

    const result = await res.json();
    return result.data;

  } catch (error) {
    console.error("❌ productShow Error:", error);

    return {
      error: true,
      message: "در حال حاضر امکان دریافت اطلاعات وجود ندارد. لطفاً کمی بعد دوباره تلاش کنید.",
      data: null,
    };
  }
}
