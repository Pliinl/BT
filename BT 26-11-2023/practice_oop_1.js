/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 *
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  // Phương thức tính diện tích
  calculateArea() {
    return this.length * this.width;
  }

  // Phương thức tính chu vi
  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }

  // Phương thức hiển thị thông tin
  showInfo() {
    console.log(`Chiều dài của hình chữ nhật là: ${this.length}`);
    console.log(`Chiều rộng của hình chữ nhật là: ${this.width}`);
    console.log(`Diện tích của hình chữ nhật là: ${this.calculateArea()}`);
    console.log(`Chu vi của hình chữ nhật là: ${this.calculatePerimeter()}`);
  }
}

// Tạo các đối tượng hình chữ nhật
const rectangle1 = new Rectangle(4, 6);

// In ra thông tin của các đối tượng
console.log("Thông tin hình chữ nhật là:");
rectangle1.showInfo();