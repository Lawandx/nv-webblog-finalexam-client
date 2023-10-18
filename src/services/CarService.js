import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('cars'); // เรียกดูรายการรถยนต์
  },
  show(carId) {
    return Api().get('car/' + carId); // เรียกดูรายละเอียดรถยนต์ตาม ID
  },
  post(car) {
    return Api().post('cars', car); // เพิ่มข้อมูลรถยนต์
  },
  put(car) {
    return Api().put('car/' + car.id, car); // แก้ไขข้อมูลรถยนต์ตาม ID
  },
  delete(carId) {
    return Api().delete('car/' + carId); // ลบข้อมูลรถยนต์ตาม ID
  },
}
