const userData = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    res = await res.json();

    return res;
  } catch (w) {
    return w;
  }
};

export { userData };
