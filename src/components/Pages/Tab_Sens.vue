<template>
	<div class="senstab">
		<div class="senstab__head">
			<div class="senstab__head__type" :class="com_GetState1" @click="m_click1">
				тип датчика
			</div>
			<div class="senstab__head__mech" :class="com_GetState2" @click="m_click2">
				механизм
			</div>
			<div class="senstab__head__alarmnum" :class="com_GetState3" @click="m_click3">
				количество аварий
			</div>
			<div class="senstab__head__dinamick senstab__head_nan">
				динамика
			</div>
		</div>
		<div class="senstab__underline"></div>
		<div class="senstab__lines" v-if = d_DataReceived>
			<comp-sensline v-for="(sensline) in com_SensList"
							:key="sensline.id"
							:p_Type="sensline.Type"
							:p_Mech="sensline.Mech"
							:p_Errorsnum="sensline.ErrorsNum"
							:p_Route = "'/sens'">
			</comp-sensline>
		</div>	
	</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	components:{},
	data: () => ({
		d_SelectedСolumn: 0,
	}),
	methods:{
		...mapMutations({
			sortSensList : 'GetList/sortSensList'
		}),

		m_click1(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 1)?2:1
		},
		m_click2(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 3)?4:3
		},
		m_click3(){
			this.d_SelectedСolumn = (this.d_SelectedСolumn === 5)?6:5
		},
	},
	computed:{
		...mapState({
			d_DataReceived : state => state.GetList.SensListReceived,
		}),
		...mapGetters({
			getSensList : 'GetList/getSensLisn'
		}),

		com_SensList(){
			if (this.d_DataReceived)
			{
				return this.getSensList;
			}
			else{
				return [];
			}
		},
		com_GetState1()
		{
			switch (this.d_SelectedСolumn) {
				case 1:
					return "senstab__head_down";
				case 2:
					return "senstab__head_up";
				default:
					return "senstab__head_nan";
			}
		},
		com_GetState2()
		{
			switch (this.d_SelectedСolumn) {
				case 3:
					return "senstab__head_down";
				case 4:
					return "senstab__head_up";
				default:
					return "senstab__head_nan";
			}
		},
		com_GetState3()
		{
			switch (this.d_SelectedСolumn) {
				case 5:
					return "senstab__head_down";
				case 6:
					return "senstab__head_up";
				default:
					return "senstab__head_nan";
			}
		}
	},
	watch:{
		d_SelectedСolumn(SelCode)
		{
			this.sortSensList(SelCode);
		}
	}
}
</script>

<style lang="scss" scoped>
.senstab{
	display: flex;
	flex-direction: column;
	flex: 0 1 810px;
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
		&__type{
			flex: 0 0 200px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
		&__mech{
			flex: 0 0 200px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
		&__alarmnum{
			flex: 0 0 230px;
			white-space: nowrap;
			&:hover{
				cursor: pointer;
			}
		}
		&__dinamick{
			flex: 0 0 130px;
			white-space: nowrap;
		}
	}
	&__underline{
		border-bottom: 1px solid $clr_gray2;
	}
}
</style>