// Страница вывода данных по маршруту
<template>
	<div class="rout">
		<div class="rout__timeline" >
			<comp-rout-timeline :p_Events="seriesTimeLine">
			</comp-rout-timeline>
		</div>
		<div class="rout__tables">
			<div class="rout__tables__events">
				<div class="lable">
					События в маршруте
				</div>
				<div class="rout__tables__events__table">					
					<comp-eventline v-for="(line) in com_RoutesEventList" 
									:key="line.id"
									:p_Status="line.Status"
									:p_lable="line.Lable"
									:p_Time="m_GetTime(line.Time)"
									>
					</comp-eventline>
				</div>
			</div>
			<div class="rout__tables__worckmech">
				<div class="rout__tables__worckmech__worck">
					<div class="lable">
						Работа/простой маршрута
					</div>
					<div class="tableworck">
						<div class="tableworck__diag">
							<apexchart height = 100% :options="worckChartOptions" :series="series"></apexchart>
						</div>
						<div class="tableworck__table">
							<comp-rout-worckline :p_Status="1"
												:p_Percent="90"
												:p_Time="m_GetTime('2022-02-16T16:22:55+02:00')">
							</comp-rout-worckline>
							<comp-rout-worckline :p_Status="2"
												:p_Percent="10"
												:p_Time="m_GetTime('2022-02-16T16:22:55+02:00')">
							</comp-rout-worckline>
							<comp-rout-worckline :p_Status="0"
												:p_Percent="0"
												:p_Time="m_GetTime('2022-02-16T16:22:55+02:00')">
							</comp-rout-worckline>
						</div>
					</div>
				</div>
				<div class="rout__tables__worckmech__mech">
					<div class="lable">
						Механизмы в маршруте
					</div>
					<div class="rout__tables__worckmech__mech__table">
						<comp-rout-mechline v-for="(line) in com_RoutesMechList"
											:key = line.id
											:p_ID = line.p_ID
											:p_Status = line.Status
											:p_lable = line.Lable
											:p_last = line.Last>
						</comp-rout-mechline>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	components: {
		apexchart: VueApexCharts,
	},

	data: () => ({
		series: [10, 90],
		seriesTimeLine: [
			{
				type: 1,
				start: new Date('2022-03-10T03:40:00'),
				end: new Date('2022-03-10T04:24:00'),
			},
			{
				type: 2,
				start: new Date('2022-03-10T04:24:00'),
				end: new Date('2022-03-10T04:45:00'),
			},
			{
				type: 1,
				start: new Date('2022-03-10T04:45:00'),
				end: new Date('2022-03-10T05:12:00'),
			}
		],
		worckChartOptions: {
			colors: ['#2D4EC4', '#179433'],
			chart: {
				type: 'pie',
				animations: {
					enabled: false
				},				
			},
			stroke: {
				show: false,      
			},
			plotOptions: {
				pie: {
					expandOnClick: false,
					customScale: 1.05
				}
			},
			legend: {
				show: false
			},
			tooltip: {
				enabled: false,
			},
			dataLabels: {
			  enabled: false
			},
			states: {
				normal: {
					filter: {
						type: 'none',
						value: 0,
					}
				},
				hover: {
					filter: {
						type: 'non',
						value: 0.15,
					}
				},
				active: {
					allowMultipleDataPointsSelection: false,
					filter: {
						type: 'non',
						value: 0.35,
					}
				},
			}		
		}
	}),
	methods:{
		m_GetTime(inVal){
			return new Date(inVal);
		},
		m_GetMin(start, end){
			var elapsed = end - start;
			return elapsed.getMinutes();
		}
	},
	computed:{
		...mapState({
			d_RoutEventListReceived : state => state.GetList.RoutEventListReceived,
			d_RoutMechListReceived : state => state.GetList.RoutMechListReceived
		}),
		...mapGetters({
			getRoutEventList : 'GetList/getRoutEventList',
			getRoutMechList : 'GetList/getRoutMechList',
		}),
		com_RoutesEventList()
		{
			if (this.d_RoutEventListReceived)			
			{
				return this.getRoutEventList;
			}
			else
			{
				return [];
			}
		},
		com_RoutesMechList()
		{
			if (this.d_RoutMechListReceived)			
			{
				return this.getRoutMechList;
			}
			else
			{
				return [];
			}
		},
		com_GetMin(){
			var elapsed = this.seriesTimeLine[0].end - this.seriesTimeLine[0].start;
			return elapsed;
		}
	},
}
</script>

<style lang="scss" scoped>
.rout{
	display: flex;
	overflow:hidden;
	flex-direction: column;
	align-items: center;
	flex: 1 1 auto;
	margin-left: 8px;
	margin-right: 8px;
	margin-bottom: 8px;
	&__timeline{
				border: 2px solid #ff0000;
		display: flex;
		flex: 0 0 315px;
		height: 315px;
		width: 100%;
		margin-bottom: 5px;

		font-family: Roboto-Medium;
		font-size: 24px;
		color: $clr_gray1;
	}
	&__tables{
				border: 2px solid #ff0000;
		display: flex;
		flex: 1 1 auto;
		overflow-x: hidden;
		width: 100%;
		font-family: Roboto-Medium;
		font-size: 24px;
		color: $clr_gray1;
		&__events{
			display: flex;
			flex-direction: column;
			flex: 1 0 495px;
			background: $clr_gray3;
			margin: 0 4px 0 0;
			padding: 8px;
			&__table{
				display: inline-block;
				overflow-x: hidden;
			}::-webkit-scrollbar{width: 5px;height: 5px;}
			::-webkit-scrollbar-thumb:vertical{height: 5px;background-color: $clr_gray1;}
			::-webkit-scrollbar-thumb:horizontal{width: 5px;background-color: $clr_gray1;}
		}
		&__worckmech{
			display: flex;
			flex-direction: column;
			flex: 1 0 500px;
			overflow: hidden;
			&__worck{
				display: flex;
				flex-direction: column;
				flex: 0 0 185px;
				background: $clr_gray3;
				margin-bottom: 4px;
				padding: 8px;
			}
			&__mech
			{
				display: flex;
				flex-direction: column;
				flex: 1 0 10px;
				background: $clr_gray3;
				overflow: hidden;
				padding: 8px;
				&__table
				{
					display: flex;
					flex-direction: column;
					overflow-x: hidden;
				}::-webkit-scrollbar{width: 5px; height: 5px;}
				::-webkit-scrollbar-thumb:vertical{height: 5px;background-color: $clr_gray1;}
				::-webkit-scrollbar-thumb:horizontal{width: 5px;background-color: $clr_gray1;}
			}
		}
	}
}
.lable{
	padding-bottom: 8px;
	color: $clr_gray0;
}
// .table{
// 	flex: 1 0 auto;
// 	margin: 0px 8px 0px 8px;
// 	background: $clr_gray3;
// 	overflow: hidden;
// }
.tableworck{
	display: flex;
	flex: 1 0 140px;
	align-items: center;
	// margin: 0px 8px 0px 8px;
	&__diag{
		display: flex;		
		flex: 0 0 140px;
	}
	&__table{
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
		height: 100%;
	}
}
</style>