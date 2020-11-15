const url = "https://v1.jinrishici.com/all.json";
export const getPoetry = () => {
  const result = fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      return [res.origin, res.author, res.content];
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
