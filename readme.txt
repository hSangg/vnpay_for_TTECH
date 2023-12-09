-- SHORT DESCRIPTION --
This repo is a API additional payment option for ecomerce website on TTECH company. 
Using Mysql to storage and manage data.




-- HOW TO USE --
1. Cài đặt nodejs lên máy cần chạy. Download nodejs tại: https://nodejs.org/en/
2. Vào command (cmd) và chuyển tới thư mục code demo
3. Cài đặt module cần thiết bằng lệnh: npm install
4. Cấu hình giá trị cho các tham số: vnp_TmnCode,vnp_HashSecret trong file\vnpay_nodejs\config\default.json. Nếu chưa có các thông tin này, vui lòng liên hệ với VNPAY
5. Chạy ứng dụng: npm start app.js. Ứng dụng sẽ start ở port 8888.
6. Mở trình duyệt và truy cập vào địa chỉ: http://localhost:8888/order/create_payment_url để bắt đầu chạy demo
7. Thông tin hướng dẫn kết nối tham khảo thêm tại địa chỉ: https://sandbox.vnpayment.vn/apis/

-- DEMO CARD --
Ngân hàng: NCB
Số thẻ: 9704198526191432198
Tên chủ thẻ: NGUYEN VAN A
Ngày phát hành: 07/15
Mật khẩu OTP: 123456

-- CHROME TEST DISABLE CORS -- 
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security