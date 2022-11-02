const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1]
];
  
const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2]
];
  
let result = [];
  
for (let i = 0; i < array1.length; i++) {
    result.push(
        array1[i].map(function (value, index) {
          return parseInt(array2[index][i], 10) * parseInt(value, 10);
        })
    );
}

for (let i = 0; i < result.length; i++) {
    result[i].map(function (value, index) {
        number = "000"+value;
        result[i][index] = number.substring(number.length - 3);
    });
}

const list = document.createElement("ul");

for (let i = 0; i < result.length; i++) {
  result[i].map(function (value, index) {
    const li = document.createElement("li");
    li.innerHTML = value;
    list.appendChild(li);
  });
}

document.getElementById("result").appendChild(list);
console.log(result);