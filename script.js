// Viết function truyền vào một mảng các số. Tìm ra số lớn thứ hai.
let number = [8, 9, 3, 5, 6, 4, 15];

number.sort(function (a, b) {
  return a - b;
});

console.log("số lớn thứ 2 = " + number[number.length - 2]);

//Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất.

let namelist = ["thang", "quan", "minh", "hai", "my"];

let longestname = namelist.reduce(function (a, b) {
  return a.length > b.length ? a : b;
});
console.log(longestname);

//Viết function trả về một mảng các số không trùng nhau trong 2 mảng

let arraynumber1 = [1, 5, 6];
let arraynumber2 = [1, 5, 8];
let numbercombined = [...arraynumber1, ...arraynumber2];

const newarray = new Set(numbercombined);

const returnarray = [...newarray];

returnarray.splice(0, 2);

console.log(returnarray)

//Cho một mảng object users. Viết hàm sắp xếp mảng user tăng dần theo age, độ dài của tên

let users = [
  { name: "cung bui tuan anh", age: 28 },
  { name: "nguyen vu Anh", age: 27 },
  { name: "tran cong Nam", age: 30 },
  { name: "do van Duy", age: 25 },
];
function byage(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(users.sort(byage));

function byname(c, d) {
  if (c.name.length < d.name.length) {
    return -1;
  }
  if (c.name.length > d.name.length) {
    return 1;
  }
  return 0;
}

//Viết function chuyển đổi tất cả chữ cái đầu tiên trong name thành dạng capitalize


function changename() {
  for (i = 0; i < users.length; i++) {
    console.log(users[i].name.charAt(0).toUpperCase() + users[i].name.slice(1));
    
  }
  
};

changename();



//Tính tổng của các số trong function sau: fn(10,20,"30",undefined, null, false,"react")


  

  

