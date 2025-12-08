import config from "@/config/appConfig";

export async function productIndex() {
  try {
    const res = await fetch(`${config.apiBaseUrl}/product`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error("خطا در دریافت لیست محصولات");
    }

    const result = await res.json();
    return result.data;

  } catch (error) {
    console.error("❌ productIndex Error:", error);

    return {
      error: true,
      message: "در حال حاضر امکان دریافت اطلاعات وجود ندارد. لطفاً کمی بعد دوباره تلاش کنید.",
      data: []
    };
  }
}
