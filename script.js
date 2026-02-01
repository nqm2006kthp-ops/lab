/* * Hàm khởi tạo: Chạy khi trang web tải xong (onload)
 * Nhiệm vụ: Tự động thêm thuộc tính tabindex cho các ảnh để có thể truy cập bằng bàn phím
 */
function initializeGallery() {
    console.log("Trang web đã tải xong. Bắt đầu khởi tạo tabindex...");
    
    // Lấy tất cả các hình ảnh có class là 'preview'
    const images = document.querySelectorAll('.preview');
    
    // Vòng lặp for để duyệt qua từng hình ảnh
    for (let i = 0; i < images.length; i++) {
        // Thêm thuộc tính tabindex để có thể dùng phím Tab
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex cho ảnh thứ: " + (i + 1));
    }
}

/*
 * Hàm update: Cập nhật vùng hiển thị lớn
 */
function update(previewPic) {
    console.log("Sự kiện Focus/Hover kích hoạt trên: " + previewPic.alt);

    const imageDiv = document.getElementById('image');
    
    // Thay đổi nội dung chữ và ảnh nền
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/*
 * Hàm unDo: Khôi phục trạng thái ban đầu
 */
function unDo() {
    const imageDiv = document.getElementById('image');
    
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Di chuột hoặc Tab qua một hình ảnh bên dưới để hiển thị.";
    
    console.log("Đã rời khỏi ảnh - Khôi phục trạng thái.");
}