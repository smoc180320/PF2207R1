a = prompt ("Nhập số tiền gửi (triệu đồng):");
b = prompt ("Nhập lãi suất %: ");
n = prompt ("Nhập số năm gửi tiền: ");
t1 = a * b/100;
tn = n * t1;
let td = parseInt(a);
let tl = parseInt(tn);
tt = td + tl;
document.write("Số tiền gốc lẫn lãi là: " + tt);