<template>
  <div>
    <h1>Get All Cars</h1>
    <div>จำนวนรถ {{ cars.length }}</div>
    <div v-for="car in cars" :key="car.id">
      <div>ประเภท: {{ car.category }}</div>
      <div>ความจุเครื่องยนต์: {{ car.engine_capacity }} ซีซี</div>
      <div>รุ่น: {{ car.model }}</div>
      <div>ยี่ห้อ: {{ car.brand }}</div>
      <div>สี: {{ car.color }}</div>
      <div>ป้ายทะเบียน: {{ car.lc_plate }}</div>
      <div>เลขตัวถัง: {{ car.chasis_no }}</div>
      <p>
        <button @click="navigateTo('car/' + car.id)">
          ดูข้อมูลรถ
        </button>

        <button @click="editCar(car.id)">
          แก้ไขข้อมูล
        </button>

        <button @click="deleteCar(car.id)">
          ลบข้อมูล
        </button>
      </p>
      <hr />
    </div>
    <button @click="navigateTo('/cars/create')">สร้างรถ</button>
  </div>
</template>

<script>
import CarService from "@/services/CarService";

export default {
  data() {
    return {
      cars: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCar(carId) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await CarService.delete(carId);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.cars = (await CarService.index()).data;
    },
    async editCar(carId) {
    }
  },
  async created() {
    this.cars = (await CarService.index()).data;
  }
};
</script>

<style scoped></style>
