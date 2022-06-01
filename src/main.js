import { createApp } from 'vue'
import App from './App.vue'


import CompMenu from '@/components/Menu.vue';				//Левое меню (меню навигации)
import CompMenuTop from '@/components/Pages/Menu_top.vue';	//Верхнее меню
//import CompContent from '@/components/Content.vue';			//Область отображение контента

import Components from '@/components/UI/UI_index.js';

import Router from '@/components/Router/Router_index.js';	//Маршруты VUE	
import store from '@/Store/Store_index.js';					//Глобальные данные
import VueApexCharts from "vue3-apexcharts";				//Сторонний компонент

const app = createApp(App);

app.component('comp-menu', CompMenu);			//Левое меню (меню навигации)
app.component('comp-menu-top', CompMenuTop);	//Верхнее меню
//app.component('comp-content', CompContent);		//Область отображение контента

Components.forEach(element => {
	app.component(element.name, element)
});

app.use(Router).use(store).use(VueApexCharts).mount('#app');