let links = document.querySelectorAll("a");

for (let link of links) {
    let randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    link.style.color = randomColor;
}



let users = document.querySelectorAll(".user");
for (let user of users) {
  fetch("https://randomuser.me/api/").then(response => 
    response.json().then(data => ({
      data: data,
      status: response.status
    })
  ).then(res => {
    user.querySelector('h3').innerHTML = res.data.results[0].name.title + ' ' + res.data.results[0].name.first + ' ' + res.data.results[0].name.last;
    user.querySelector('img').src = res.data.results[0].picture.large;
    user.querySelector('p').innerHTML = res.data.results[0].cell;

  }));
 
}


// fetch("https://randomuser.me/api/").then(response => 
//   response.json().then(data => ({
//     data: data,
//     status: response.status
//   })
// ).then(res => {
//   console.log(res.status, res.data);
//   users = document.querySelectorAll(".user");
  
// }));


// console.log(user);

// async function foo() {
//   let obj;
  
//   const res = await fetch('https://randomuser.me/api/');

//   obj = await res.json();

//   console.log(obj);
//   return obj;
// }

// a = foo();
// console.log(a);