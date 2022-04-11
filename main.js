// Bài 1
document.getElementById("btn_bai1").onclick = function () {
    var soNgayLam = document.getElementById("in_bai1").value * 1;
    var luongNgay = 100000;
    var tienLuong = luongNgay * soNgayLam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    console.log(tienLuong);
    document.getElementById("kq_bai1").innerHTML = "Tiền lương của bạn là: " + currentFormat.format(tienLuong) + "VND";
}
///////////////////////////////////////////////////////////////////////////////
//Bài 2
document.getElementById("btn_bai2").onclick = function () {
    var n1 = document.getElementById("s1").value * 1;
    var n2 = document.getElementById("s2").value * 1;
    var n3 = document.getElementById("s3").value * 1;
    var n4 = document.getElementById("s4").value * 1;
    var n5 = document.getElementById("s5").value * 1;
    var ketQuaTrungBinh = (n1 + n2 + n3 + n4 + n5) / 5;
    document.getElementById("kq_bai2").innerHTML = "Giá trị trung bình là: " + ketQuaTrungBinh;
}
////////////////////////////////////////////////////////////////////////////////
// Bài 3
document.getElementById("btn_bai3").onclick = function () {
    var soUSD = document.getElementById("in_bai3").value * 1;
    var giaUSD = 23500;
    var tienQuyDoi = soUSD * giaUSD;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById("kq_bai3").innerHTML = "Tiền của bạn là: " + currentFormat.format(tienQuyDoi) + "VND";
}
////////////////////////////////////////////////////////////////////////////////
// Bài 4
document.getElementById("btn_bai4_dt").onclick = function () {
    var chieuDai = document.getElementById("in_bai4_rong").value * 1;
    var chieuRong = document.getElementById("in_bai4_dai").value * 1;
    var dienTich = chieuDai * chieuRong;
    document.getElementById("kq_bai4").innerHTML = "Diện tích là: " + dienTich;
}

document.getElementById("btn_bai4_cv").onclick = function () {
    var chieuDai = document.getElementById("in_bai4_rong").value * 1;
    var chieuRong = document.getElementById("in_bai4_dai").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById("kq_bai4").innerHTML = "Chu vi là: " + chuVi;
}
////////////////////////////////////////////////////////////////////////////////
// Bài 5
document.getElementById("btn_bai5").onclick = function () {
    var kySo = document.getElementById("in_bai5").value * 1;
    var soHangChuc = Math.floor(kySo / 10);
    var soHangDv = Math.floor(kySo % 10);
    var tong2Kyso = soHangChuc + soHangDv;
    if(( kySo <= 99) && (kySo > 9 )){
        document.getElementById("kq_bai5").innerHTML = "Tổng 2 ký số: " + tong2Kyso;
    } else{
        document.getElementById("kq_bai5").innerHTML = "Nhập sai";
    }
}