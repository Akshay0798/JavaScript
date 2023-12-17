let URL = "https://list.ly/api/v4/meta?url=http://google.com";

const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data[0]);
}
getFacts();

