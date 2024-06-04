import { userData } from "../services/getUsers.js";

const tableBuilder = async (th, tbody) => {
  try {
    //   calls api data
    const data = await userData();
    //   build heder
    let header = th.insertRow(0);
    let cell1 = header.insertCell(0);
    let cell2 = header.insertCell(1);
    let cell3 = header.insertCell(2);
    let cell4 = header.insertCell(3);
    cell1.innerText = "Name";
    cell2.innerText = "User Name";
    cell3.innerText = "Email";
    cell4.innerText = "Address";
    // builds body
    data.forEach((item) => {
      //
      let row = tbody.insertRow(-1);

      let cell1 = row.insertCell(0);
      cell1.innerText = item.name;
      let cell2 = row.insertCell(1);
      cell2.innerText = item.username;
      let cell3 = row.insertCell(2);
      cell3.innerText = item.email;
      let cell4 = row.insertCell(3);
      cell4.innerText = `${item.address.street}  ${item.address.city} ${item.address.zipcode} suite ${item.address.suite}`;
    });
  } catch (error) {
    throw new Error(error);
  }
};

export { tableBuilder };
