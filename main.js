// Bài 1
document.getElementById("btn_bai1").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy số ngày làm mà người dùng nhập
 *  + Khai báo tiền lương 1 ngày là: 100,000
 */
    var soNgayLam = document.getElementById("in_bai1").value * 1;
    var luongNgay = 100000;
/**
 * Xử lý:
 *  + Tính tiền lương = Lương 1 ngày * Số ngày làm
 *  + Chuyển đổi tiền lương sang VND
 */
    var tienLuong = luongNgay * soNgayLam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
/**
 * Đầu ra: 
 *  + In ra số tiền
 */
    document.getElementById("kq_bai1").innerHTML = "Tiền lương của bạn là: " + currentFormat.format(tienLuong) + "VND";
}
///////////////////////////////////////////////////////////////////////////////
//Bài 2
document.getElementById("btn_bai2").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy 5 số mà người dùng nhập : n1, n2 ,n3 ,n4, n5.
 */
    var n1 = document.getElementById("s1").value * 1;
    var n2 = document.getElementById("s2").value * 1;
    var n3 = document.getElementById("s3").value * 1;
    var n4 = document.getElementById("s4").value * 1;
    var n5 = document.getElementById("s5").value * 1;
/**
 * Xử lý:
 *  + Giá trị trung bình = (n1 + n2 + n3 + n4 + n5) / 5
 */
    var ketQuaTrungBinh = (n1 + n2 + n3 + n4 + n5) / 5;
/**
 * Đầu ra: 
 *  + In ra giá trị trung bình
 */
    document.getElementById("kq_bai2").innerHTML = "Giá trị trung bình là: " + ketQuaTrungBinh;
}
////////////////////////////////////////////////////////////////////////////////
// Bài 3
document.getElementById("btn_bai3").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy số USD mà người dùng nhập (soUSD)
 *  + Khai báo giá tiền USD: 23500 (giaUSD)
 */
    var soUSD = document.getElementById("in_bai3").value * 1;
    var giaUSD = 23500;
/**
 * Xử lý:
 *  + Tiền quy đổi = soUSD * giaUSD
 *  + Chuyển đổi tiền lương sang VND
 */
    var tienQuyDoi = soUSD * giaUSD;
    var currentFormat = new Intl.NumberFormat("vn-VN");
/**
 * Đầu ra: 
 *  + In ra tiền quy đổi
 */
    document.getElementById("kq_bai3").innerHTML = "Tiền của bạn là: " + currentFormat.format(tienQuyDoi) + "VND";
}
////////////////////////////////////////////////////////////////////////////////
// Bài 4
document.getElementById("btn_bai4_dt").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy chiều dài, chiều rộng mà người dùng nhập (chieuDai, chieuRong)
 */
    var chieuDai = document.getElementById("in_bai4_rong").value * 1;
    var chieuRong = document.getElementById("in_bai4_dai").value * 1;
/**
 * Xử lý:
 *  + Diện tích = chieuDai * chieuRong
 */
    var dienTich = chieuDai * chieuRong;
/**
 * Đầu ra: 
 *  + In ra diện tích
 */
    document.getElementById("kq_bai4").innerHTML = "Diện tích là: " + dienTich;
}

document.getElementById("btn_bai4_cv").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy chiều dài, chiều rộng mà người dùng nhập (chieuDai, chieuRong)
 */
    var chieuDai = document.getElementById("in_bai4_rong").value * 1;
    var chieuRong = document.getElementById("in_bai4_dai").value * 1;
/**
 * Xử lý:
 *  + chu vi = (chieuDai + chieuRong) * 2
 */
    var chuVi = (chieuDai + chieuRong) * 2;
/**
 * Đầu ra: 
 *  + In ra chu vi
 */
    document.getElementById("kq_bai4").innerHTML = "Chu vi là: " + chuVi;
}
////////////////////////////////////////////////////////////////////////////////
// Bài 5
document.getElementById("btn_bai5").onclick = function () {
/**
 * Đầu vào:
 *  + Lấy số mà người dùng nhập (kySo)
 */
    var kySo = document.getElementById("in_bai5").value * 1;
/**
 * Xử lý:
 *  + Lấy hàng chục = Math.floor(kySo / 10)
 *  + Lấy hàng đơn vị = Math.floor(kySo % 10)
 *  + Tổng 2 ký số = soHangChuc + soHangDv
 */
    var soHangChuc = Math.floor(kySo / 10);
    var soHangDv = Math.floor(kySo % 10);
    var tong2Kyso = soHangChuc + soHangDv;
/**
 * Đầu ra: 
 *  + Kiểm tra: - nếu kySo có 2 chữ số thì in ra tong2Kyso
 *              - nếu kySo không phải 2 chữ số thì in ra Nhập sai
 */
    if(( kySo <= 99) && (kySo > 9 )){
        document.getElementById("kq_bai5").innerHTML = "Tổng 2 ký số: " + tong2Kyso;
    } else{
        document.getElementById("kq_bai5").innerHTML = "Nhập sai";
    }
}