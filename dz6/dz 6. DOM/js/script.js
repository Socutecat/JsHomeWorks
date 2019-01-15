//dom TASKS

let myHead = document.documentElement.firstChild;
console.log(myHead);

let myBody = document.body;
console.log(myBody);

let myBodyChild = document.body.children;

console.log(myBodyChild);

let myDiv = document.body.firstElementChild.children;

console.log(myDiv);



if (document.body.firstElementChild.children) {
  const children = document.body.firstElementChild.children;

  for (var i = 1; i < children.length - 1; ++i) {
    console.log(children[i])
  }
}

