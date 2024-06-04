const inputValue = document.querySelector("form");
const input = inputValue.todoId;

const getData = async (user) => {
  try {
    if (!isNaN(user)) {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${user}`
      );
      res = await res.json();
      if (res.status === 200 || 304) {
        return res;
      } else {
        throw new Error(res);
      }
    } else {
      throw new Error("Enter a Number for id");
    }
  } catch (error) {
    return error;
  }
};

inputValue.addEventListener("submit", (e) => {
  e.preventDefault();

  const handleAsyncData = async () => {
    const data = await getData(input.value);
    console.log(data);
  };
  try {
    handleAsyncData();
  } catch (error) {
    console.log(error);
  }
});
