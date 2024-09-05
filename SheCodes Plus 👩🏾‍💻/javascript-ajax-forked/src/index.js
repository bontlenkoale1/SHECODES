//challenge 2
function getComments(response) {
  console.log(response);
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(getComments);
//challenge 3
let roots = "https://jsonplaceholder.typicode.com";
let paths = "/comments";

fetch(roots + paths)
  .then((response) => response.json())
  .then((json) => console.log(json[0].email))
  .catch((error) => console.error("Error:", error));
