let Acces_key = "wMcQqUgrSh5Q4hEDZTf2AZ8EifuSQRYHSYyoBUs361o";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async () => {
    let fectching = await fetch('https://api.unsplash.com/oauth/applications/547409{Acces_key}')
console.log(fectching)

}
getData()


