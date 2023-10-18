<template>
  <div>
    <h1>Edit Car</h1>
    <form @submit.prevent="editCar">
      <p>ประเภท: <input type="text" v-model="car.category" /></p>
      <p>ความจุเครื่องยนต์ (ซีซี): <input type="number" v-model="car.engine_capacity" /></p>
      <p>รุ่น: <input type="text" v-model="car.model" /></p>
      <p>ยี่ห้อ: <input type="text" v-model="car.brand" /></p>
      <p>สี: <input type="text" v-model="car.color" /></p>
      <p>ป้ายทะเบียน: <input type="text" v-model="car.lc_plate" /></p>
      <p>เลขตัวถัง: <input type="text" v-model="car.chasis_no" /></p>
      <p><button type="submit">แก้ไขรถยนต์</button></p>
    </form>
    <hr />
    <div>
      <p>ประเภท: {{ car.category }}</p>
      <p>ความจุเครื่องยนต์ (ซีซี): {{ car.engine_capacity }}</p>
      <p>รุ่น: {{ car.model }}</p>
      <p>ยี่ห้อ: {{ car.brand }}</p>
      <p>สี: {{ car.color }}</p>
      <p>ป้ายทะเบียน: {{ car.lc_plate }}</p>
      <p>เลขตัวถัง: {{ car.chasis_no }}</p>
    </div>
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
    async editCar() {
      try {
        await CarService.put(this.car);
        this.$router.push({
          name: "cars"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let carId = this.$route.params.carId;
      this.car = (await CarService.show(carId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped></style>
