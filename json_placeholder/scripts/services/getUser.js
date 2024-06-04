const getData = async (user) => {
  try {
    if (!isNaN(user) && user > 0) {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${user}`
      );
      res = await res.json();
      if (res.status === 200 || 304) {
        return res;
      }
    } else {
      throw new Error("Enter a Number for id or a number above zero");
    }
  } catch (error) {
    return error;
  }
};

export { getData };
