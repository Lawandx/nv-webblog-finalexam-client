<template>
  <div>
    <h1>Create Car</h1>
    <form @submit.prevent="createCar">
      <p>ประเภท: <input type="text" v-model="car.category" /></p>
      <p>ความจุเครื่องยนต์ (ซีซี): <input type="number" v-model="car.engine_capacity" /></p>
      <p>รุ่น: <input type="text" v-model="car.model" /></p>
      <p>ยี่ห้อ: <input type="text" v-model="car.brand" /></p>
      <p>สี: <input type="text" v-model="car.color" /></p>
      <p>ป้ายทะเบียน: <input type="text" v-model="car.lc_plate" /></p>
      <p>เลขตัวถัง: <input type="text" v-model="car.chasis_no" /></p>
      <p><button type="submit">สร้างรถยนต์</button></p>
    </form>
  </div>
</template>

<script>
import CarService from "@/services/CarService"; 

export default {
  data() {
    return {
      car: {
        category: "",
        engine_capacity: 0,
        model: "",
        brand: "",
        color: "",
        lc_plate: "",
        chasis_no: ""
      }
    };
  },
  methods: {
    async createCar() {
      try {
        await CarService.post(this.car); 
        this.$router.push({
          name: "cars"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
