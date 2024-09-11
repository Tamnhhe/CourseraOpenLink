// Lấy tất cả các thẻ a có class là css-1vvtrhi
var links = document.querySelectorAll("a.css-1vvtrhi");

// Mảng để lưu trữ các URL
var urls = [];

// Lặp qua từng thẻ a
links.forEach(function (link) {
  // Lấy URL của mỗi liên kết
  var url = link.href;

  // Mở liên kết trong một tab mới
  //  window.open(url, '_blank');

  // Thêm URL vào mảng urls
  urls.push(url);
});

// Hiển thị mảng các URL trong console
console.log(urls);
