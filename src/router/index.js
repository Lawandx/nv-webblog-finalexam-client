import Vue from 'vue'
import Router from 'vue-router'
import CarsIndex from '@/components/Cars/Index' 
import CarCreate from '@/components/Cars/CreateCar'
import showcar from '@/components/Cars/ShowCar'
import edit from '@/components/Cars/EditCar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cars', 
      name: 'cars', 
      component: CarsIndex 
    },
    {
      path: '/cars/create',
      name: 'car-create',
      component: CarCreate
    },
    {
      path: '/car/:carId',
      name: 'car',
      component: showcar
    },
    {
      path: '/car/edit/:carId',
      name: 'edit-car',
      component: edit
    }
  ]
})
