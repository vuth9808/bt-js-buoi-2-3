/**
 * Tinh trung bình của 5 số thực
 * * Đầu vào
 *  - Tạo biến num_1
 *  - Tạo biến num_2
 *  - Tạo biến num_3
 *  - Tạo biến num_4
 *  - Tạo biến num_5
 *
 * * Xử lý
 *  - Tạo biến average = 0;
 *  - Tính average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
 *
 * * Đầu ra
 *  - Tạo biến resultAverage;
 *  - log resultAverage
 */

let num_1 = "1";
let num_2 = "2";
let num_3 = "3";
let num_4 = "4";
let num_5 = "5";

// convert string to number
num_1 = Number(num_1);
num_2 = Number(num_2);
num_3 = Number(num_3);
num_4 = Number(num_4);
num_5 = Number(num_5);

let average = 0;
average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

const resultAverage = "Trung binh cua 5 so: " + average;
console.log(resultAverage);
