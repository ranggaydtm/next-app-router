export const getData = async (url: string) => {
  const res = await fetch(url);
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "no-store",
  // });

  if (!res.ok) {
    throw new Error("Failed fetch data");
  }

  return res.json();
};
