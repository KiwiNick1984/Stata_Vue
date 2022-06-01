<template>
	<div class="LeftMenu">
		<div class="LeftMenu-Container">
			<img class="LeftMenu-Container__Logo" :src="require('@/assets/img/' + p_LogoUrl)" alt="">
		</div>
		<div class="LeftMenu-Container">
			<div class="LeftMenu-Container__Lable">
				общее
			</div>
			<comp-menu-btn v-for="(btn) in d_BtnContainer1"
							:key="btn.id"
							:p_ID="btn.ID"
							:p_Icon="btn.Icon"
							:p_Lable="btn.Lable"
							:p_State="btn.State"
							@em_click="m_cl"
							></comp-menu-btn>
		</div>
		<div class="LeftMenu-Container">
			<div class="LeftMenu-Container__Lable">
				механизмы
			</div>
			<comp-menu-btn v-for="(btn) in d_BtnContainer2"
				:key="btn.id"
				:p_ID="btn.ID"
				:p_Icon="btn.Icon"
				:p_Lable="btn.Lable"
				:p_State="btn.State"
				@em_click="m_cl"
				></comp-menu-btn>
		</div>
	</div>
</template>

<script>
//import CompMenuBtn from '@/components/UI/UI_MenuButton.vue'
export default {
	name: 'Menu',
	components: {
		//'comp-menu-btn': CompMenuBtn
	},
	data: () => ({
		d_BtnContainer1:
		[
			{
				ID : 1,
				Icon : "Icon_Rouds.svg",
				Lable : "маршруты",
				State : true
			},
			{
				ID : 2,
				Icon : "Icon_Sensors.svg",
				Lable : "датчики",
				State : false
			}
		],
		d_BtnContainer2 :
		[
			{
				ID : 3,
				Icon : "Icon_Noriya.svg",
				Lable : "нории",
				State : false
			},
			{
				ID : 4,
				Icon : "Icon_Tape.svg",
				Lable : "конвейеры ленточные",
				State : false
			},
			{
				ID : 5,
				Icon : "Icon_Scraper.svg",
				Lable : "конвейеры скребковые",
				State : false
			},
			{
				ID : 6,
				Icon : "Icon_Gate.svg",
				Lable : "задвижки",
				State : false
			},
			{
				ID : 7,
				Icon : "Icon_DiverterValve.svg",
				Lable : "перекедные клапана",
				State : false
			},
			{
				ID : 8,
				Icon : "Icon_Fan.svg",
				Lable : "вентиляторы",
				State : false
			},
			{
				ID : 9,
				Icon : "Icon_Gateway.svg",
				Lable : "шлбзовые зтворы",
				State : false
			},
		]
	}),
	props:{
		p_LogoUrl: {
			type: String,
			default: "logo_dark.svg"
		}
	},
	methods:{
		m_cl(p_ID, e){
			console.log("Событие в Menu.vue");
			this.d_BtnContainer1.forEach(element => {
				element.State = (element.ID === p_ID)
			});
			this.d_BtnContainer2.forEach(element => {
				element.State = (element.ID === p_ID)
			});
			console.log(p_ID);
		}
	}
}
</script>

<style lang="scss">
.LeftMenu {
	height: 100%;
	display: flex;
	flex-direction: column;
	flex: 0 0 264px;	
	padding: 0px;
	overflow: hidden;
	background: $clr_menu;

	font-family: "Roboto-Medium";

	&-Container{
		display: flex;
		flex-direction: column;
		margin-bottom: 38px;

		&__Lable
		{
			height: 24px;
			padding-left: 25px;
			color: $clr_gray2;
			letter-spacing: 1.25px;
			text-transform: uppercase;
		}

		&__Logo {
			width: 127px;
			margin: 28px 0px 9px 28px;
		}
	}
}
</style>
