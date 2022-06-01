<template>
	<div class="LeftMenu">
		<div class="LeftMenu-Container">
			<img class="LeftMenu-Container__Logo" :src="require('@/assets/img/logo_dark.svg')" alt="">
		</div>
		<div class="LeftMenu-Container">
			<div class="LeftMenu-Container__Lable">
				общее
			</div>
			<comp-menu-btn v-for="(btn) in d_BtnContainer1"
							:key="btn.id"
							:p_NavCod="btn.NavCod"
							:p_Icon="btn.Icon"
							:p_Lable="btn.Lable"
							:p_State="btn.State"
							:p_Route="btn.Rout"
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
				:p_Route="btn.Rout"
				@em_click="m_cl"
				></comp-menu-btn>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	components: {
	},
	data: () => ({
		d_BtnContainer1:
		[
			{
				NavCod : 1,
				Icon : "Icon_Rouds.svg",
				Lable : "маршруты",
				State : true,
				Rout : "/routTab"
			},
			{
				NavCod : 2,
				Icon : "Icon_Sensors.svg",
				Lable : "датчики",
				State : false,
				Rout : "/sensTab"
			}
		],
		d_BtnContainer2 :
		[
			{
				NavCod : 3,
				Icon : "Icon_Noriya.svg",
				Lable : "нории",
				State : false,
				Rout : "/noriyaTab"
			},
			{
				NavCod : 4,
				Icon : "Icon_Tape.svg",
				Lable : "конвейеры ленточные",
				State : false,
				Rout : "/convtapeTab"
			},
			{
				NavCod : 5,
				Icon : "Icon_Scraper.svg",
				Lable : "конвейеры скребковые",
				State : false,
				Rout : "/convscrapTab"
			},
			{
				NavCod : 6,
				Icon : "Icon_Gate.svg",
				Lable : "задвижки",
				State : false,
				Rout : "/gateTab"
			},
			{
				NavCod : 7,
				Icon : "Icon_DiverterValve.svg",
				Lable : "перекедные клапана",
				State : false,
				Rout : "/switchflapTab"
			},
			{
				NavCod : 8,
				Icon : "Icon_Fan.svg",
				Lable : "вентиляторы",
				State : false,
				Rout : "/ventTab"
			},
			{
				NavCod : 9,
				Icon : "Icon_Gateway.svg",
				Lable : "шлюзовые зтворы",
				State : false,
				Rout : "/sluicegateTab"
			},
		]
	}),
	props:{
	},
	methods:{
		//Изменить состояние (нажата/не нажата) кнопки левого меню
		m_cl(p_NavCod, e){
			this.d_BtnContainer1.forEach(element => {
				element.State = (element.NavCod === p_NavCod)
			});
			this.d_BtnContainer2.forEach(element => {
				element.State = (element.NavCod === p_NavCod)
			});
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
