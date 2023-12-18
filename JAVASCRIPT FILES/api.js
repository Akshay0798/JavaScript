let URL = "https://list.ly/api/v4/meta?url=http://google.com";

const getFacts = async () => {
  console.log("Getting data...");
  let response = await fetch(URL);
  console.log(response.status); //200 = getting data properly
};
