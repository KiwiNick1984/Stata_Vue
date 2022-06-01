// Страница вывода таблицы маршрутов
<template>
	<div class="routetab">
		<div class="routetab__head">
			<div class="routetab__head__startend" :class="com_GetState1" @click="m_click1">
				начало маршрута
			</div>
			<div class="routetab__head__startend" :class="com_GetState2" @click="m_click2">
				конец маршрута
			</div>
			<div class="routetab__head__cult" :class="com_GetState3" @click="m_click3">
				культура
			</div>
			<div class="routetab__head__time" :class="com_GetState4" @click="m_click4">
				время запуска
			</div>
			<div class="routetab__head__time" :class="com_GetState5" @click="m_click5">
				время останова
			</div>
		</div>
		<div class="routetab__underline"></div>
		<div class="routetab__lines" v-if = d_DataReceived>
			<comp-routeline v-for="(line) in com_RoutesList"
							:key = line.id
							:p_ID = line.MesIDRout
							:p_NavCod = 11
							:p_Start = line.Source
							:p_End = line.Receiver
							:p_Cult = line.Culture
							:p_StartTime = m_GetTime(line.StartTime)
							:p_EndTime = m_GetTime(line.StopTime)
							:p_Route = "'/route'">
			</comp-routeline>
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	components: {
	},
	data: () => ({
		d_SelectedСolumn: 0,	//Столбец сортировки
	}),
	methods:{
		...mapMutations({
			sortRoutesList : 'GetList/sortRoutesList'	//Сортировка
		}),

		m_GetTime(inVal){
			return new Date(inVal);
		},
		m_click1(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 1)?2:1
		},
		m_click2(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 3)?4:3
		},
		m_click3(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 5)?6:5
		},
		m_click4(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 7)?8:7
		},
		m_click5(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 9)?10:9
		},
	},
	computed:{
		...mapState({
			d_DataReceived : state => state.GetList.RoutesListReceived,
		}),
		...mapGetters({
			getRoutesList : 'GetList/getRoutesList'
		}),

		com_RoutesList(){
			if (this.d_DataReceived)
			{
				return this.getRoutesList;
			}
			else{
				return [];
			}
		},
		com_GetState1(){
			switch (this.d_SelectedСolumn) {
				case 1:
					return "routetab__head_down";
				case 2:
					return "routetab__head_up";
				default:
					return "routetab__head_nan";
			}
		},
		com_GetState2(){
			switch (this.d_SelectedСolumn) {
				case 3:
					return "routetab__head_down";
				case 4:
					return "routetab__head_up";
				default:
					return "routetab__head_nan";
			}
		},
		com_GetState3(){
			switch (this.d_SelectedСolumn) {
				case 5:
					return "routetab__head_down";
				case 6:
					return "routetab__head_up";
				default:
					return "routetab__head_nan";
			}
		},
		com_GetState4(){
			switch (this.d_SelectedСolumn) {
				case 7:
					return "routetab__head_down";
				case 8:
					return "routetab__head_up";
				default:
					return "routetab__head_nan";
			}
		},
		com_GetState5(){
			switch (this.d_SelectedСolumn){
				case 9:
					return "routetab__head_down";
				case 10:
					return "routetab__head_up";
				default:
					return "routetab__head_nan";
			}
		},
	},
	watch:{
		d_SelectedСolumn(SelCode){
			this.sortRoutesList(SelCode);
		}
	}
}
</script>

<style lang="scss" scoped>
.routetab{
	display: flex;
	flex-direction: column;
	flex: 0 1 950px;
	font-family: Roboto-Medium;
	font-size: 16px;

	&__head{
		padding: 8px 0 8px 37px;
		display: flex;
		letter-spacing: 1.25px;
		text-transform: uppercase;
		&_nan{
			color: $clr_gray1;
		}
		&_up{
			color: $clr_gray0;
			display: flex;
			&:after{
				content: '';
				height: 11px;
				width: 11px;
				margin-top: 1px;
				margin-left: 5px;
				background-image: url('~@/assets/img/arrowUp.svg');
				background-repeat: no-repeat;
			}
		}
		&_down{
			color: $clr_gray0;
			display: flex;
			&:after{
				content: '';
				height: 11px;
				width: 11px;
				margin-top: 1px;
				margin-left: 5px;
				background-image: url('~@/assets/img/arrowDown.svg');
				background-repeat: no-repeat;
			}
		}
		&__startend{
			flex: 0 0 200px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
		&__cult{
			flex: 0 0 120px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
		&__time{
			flex: 0 0 200px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
	}
	&__underline{
		border-bottom: 1px solid $clr_gray2;
	}
	&__lines{
		display: inline-block;
		overflow-x: hidden;
	}		::-webkit-scrollbar{width: 5px;height: 5px;}
			::-webkit-scrollbar-track-piece{background-color: $clr_bg;}
			::-webkit-scrollbar-thumb:vertical{height: 5px;background-color: $clr_gray2;}
			::-webkit-scrollbar-thumb:horizontal{width: 5px;background-color: $clr_gray2;}
}

</style>