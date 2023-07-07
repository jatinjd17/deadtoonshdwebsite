export const fetchSpecificUser = (name) => {
  return fetch(`http://192.168.29.231:9000/api/getdata`, {
    method: "GET",
    headers: {
      Accept: "applicaion/json",
    },
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((err) => console.log(err));
};
