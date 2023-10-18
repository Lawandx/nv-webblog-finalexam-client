<template>
  <div>
    <h1>Show Car</h1>
    <div v-if="car">
      <p>id: {{ car.id }}</p>
      <p>ประเภท: {{ car.category }}</p>
      <p>ความจุเครื่องยนต์: {{ car.engine_capacity }} ซีซี</p>
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
      car: null
    };
  },
  async created() {
    let carId = this.$route.params.carId;
    try {
      const response = await CarService.show(carId);
      this.car = response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
