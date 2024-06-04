import { getData } from "../services/getUser.js";

const handleAsyncData = async (input) => {
  const data = await getData(input.value);

  if ("id" in data) {
    result.innerHTML = `
    <h1> ${data.title}</h1>
    <p> userId:${data.userId}</p>
    <p> id: ${data.id}</p>                        
`;
  } else {
    result.innerHTML = `
    <h1> ${data}</h1>
                          
`;
  }
};

export { handleAsyncData };
