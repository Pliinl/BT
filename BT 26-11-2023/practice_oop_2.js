/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 *
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 *
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 *
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
  constructor(ownerName, vehicleType, engineCapacity, value) {
    this.ownerName = ownerName;
    this.vehicleType = vehicleType;
    this.engineCapacity = engineCapacity;
    this.value = value;
  }

  calculateTax() {
    let tax = 0;
    if (this.engineCapacity < 100) {
      tax = 0.01 * this.value;
    } else if (this.engineCapacity >= 100 && this.engineCapacity <= 200) {
      tax = 0.03 * this.value;
    } else {
      tax = 0.05 * this.value;
    }
    return tax;
  }

  showInfo() {
    const tax = this.calculateTax();
    console.log(`Tên chủ xe: ${this.ownerName}`);
    console.log(`Loại xe: ${this.vehicleType}`);
    console.log(`Dung tích xylanh: ${this.engineCapacity}cc`);
    console.log(`Trị giá xe: ${this.value} VNĐ`);
    console.log(`Thuế trước bạ phải nộp: ${tax} VNĐ`);
  }
}

// Tạo các đối tượng Vehicle
const vehicle3 = new Vehicle("Lê Hồng Đức Plinl", "Xe máy", 125, 95500000);

// In ra thông tin các đối tượng
console.log("Thông tin xe Wave 125i:");
vehicle3.showInfo();
