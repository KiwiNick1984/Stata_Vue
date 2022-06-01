import {createRouter, createWebHistory} from "vue-router";

//Маршруты
import RouteTab from '@/components/Pages/Tab_Route.vue'
import Route from '@/components/Pages/Rout.vue'
//Датчики
import SensTab from '@/components/Pages/Tab_Sens.vue'
import Sens from '@/components/Pages/Sens.vue'
//Механизмы
import Mech from '@/components/Pages/Mech/Mech.vue'
import NoriyaTab from '@/components/Pages/Mech/Tab1_Mech_Noriya.vue'
import ConvScraperTab from '@/components/Pages/Mech/Tab2_Mech_ConvScraper.vue'
import ConvTapeTab from '@/components/Pages/Mech/Tab3_Mech_ConvTape.vue'
import GateTab from '@/components/Pages/Mech/Tab4_Mech_Gate.vue'
import SwitchFlapTab from '@/components/Pages/Mech/Tab5_Mech_SwitchFlap.vue'
import VentTab from '@/components/Pages/Mech/Tab6_Mech_Vent.vue'
import SluiceGateTab from '@/components/Pages/Mech/Tab7_Mech_SluiceGate.vue'

const routes = [
	{
		path : '/',
		component : RouteTab
	},
	{
		path : '/routTab',
		component : RouteTab
	},
	{
		path : '/sensTab',
		component : SensTab
	},
	{
		path : '/noriyaTab',
		component : NoriyaTab
	},
	{
		path : '/convtapeTab',
		component : ConvTapeTab
	},
	{
		path : '/convscrapTab',
		component : ConvScraperTab
	},
	{
		path : '/gateTab',
		component : GateTab
	},
	{
		path : '/switchflapTab',
		component : SwitchFlapTab
	},
	{
		path : '/ventTab',
		component : VentTab
	},
	{
		path : '/sluicegateTab',
		component : SluiceGateTab
	},
	{
		path : '/mech',
		component : Mech
	},
	{
		path : '/route',
		component : Route
	},
	{
		path : '/sens',
		component : Sens
	}	
]
const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router;