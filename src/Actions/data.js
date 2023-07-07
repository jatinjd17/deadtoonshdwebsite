export const fetchSpecificUser = (name) => {
  return fetch(`https://deadtoonshdwebsite.vercel.app/api/getdata`, {
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
