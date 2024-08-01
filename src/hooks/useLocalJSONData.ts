async function parseJSON(filename: string) {
  const response = await fetch(filename, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  let json = await response.json();

  return json;
}

const useLocalJSONData = () => {
    return parseJSON
};

export default useLocalJSONData;
