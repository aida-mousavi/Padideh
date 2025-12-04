export async function projectIndex() {
  const res = await fetch("https://ricksanchezz.ir/v1/project", {
    cache: "force-cache", 
  });
  return res.json();
}
