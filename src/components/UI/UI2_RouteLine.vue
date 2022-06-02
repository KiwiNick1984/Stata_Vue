<template>
	<div class="routeline">
		<div class="routeline__line" @click="m_click">
			<div class="routeline__line__led" :class="com_GetState"></div>
			<div class="routeline__line__startend">
				{{p_Start}}
			</div>
			<div class="routeline__line__startend">
				{{p_End}}
			</div>
			<div class="routeline__line__cult">
				{{p_Cult}}
			</div>
			<div class="routeline__line__time" >
				{{com_GetStartDate}}
			</div>
			<div class="routeline__line__time">
				{{com_GetEndDate}}
			</div>		
		</div>
		<div class="routeline__underline"></div>
	</div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
	name : 'comp-routeline',
	props: {
		p_NavCod:{
			type: Number,
			default: 0
		},
		p_ID: {
			type: Number,
			default: 0
		},
		p_Status: {
			type: Number,
			default: 0
		},
		p_Start: {
			type: String,
			default: "Не известно"
		},
		p_End: {
			type: String,
			default: "Не известно"
		},
		p_Cult: {
			type: String,
			default: "Не известно"
		},
		p_StartTime: {
			type: Date,
		},
		p_EndTime: {
			type: Date,
		},
		p_Route:{
			type: String,
			default: "/"
		}
	},
	methods: {
		...mapMutations({SetNavForward : 'NavAndDate/SetNavForward',
						SetNavCode : 'NavAndDate/SetNavCode'}),
		...mapActions({fetchRoutEventList : 'GetList/fetchRoutEventList',
						fetchRoutMechList : 'GetList/fetchRoutMechList',
						fetchRoutTimeLine : 'GetList/fetchRoutTimeLine',}),
		m_click()
		{
			this.$router.push(this.p_Route);						//Вывести страницу согласно маршрутуVUE в блок контента 
			this.SetNavForward(this.p_Start +" -> "+ this.p_End);	//Установить следующую запись в массив хлеб.крошек	
			this.fetchRoutEventList(this.p_ID);	
			this.fetchRoutMechList(this.p_ID);
			this.fetchRoutTimeLine(this.p_ID);
			this.SetNavCode(this.p_NavCod);							
		}
	},
	computed:{
		com_GetStartDate()
		{
			return this.p_StartTime.toLocaleString('ru-RU').replace(/,+/g, "");
		},
		com_GetEndDate()
		{
			return this.p_StartTime.toLocaleString('ru-RU').replace(/,+/g, "");
		},
		com_GetState()
		{
			switch (this.p_Status) {
				case 1:
					return "routeline__line__led_waqrning";
				case 2:
					return "routeline__line__led_alarm";
				default:
					return "routeline__line__led_ok";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.routeline{
	display: flex;
	flex-direction: column;
	&__line
	{
		display: flex;
		padding: 8px 8px 8px 8px;
		height: 40px;
		font-family: Roboto-Regular;
		font-size: 16px;
		color: $clr_gray0;
		&:hover{
			background: $clr_gray4;
			cursor: pointer;
		}
		&__led{
			flex: 0 0 5px;
			height: 100%;
			margin-right: 24px;
			border-radius: 0px 8px 8px 0px;
			&_ok{
				visibility: hidden;
			}
			&_waqrning{
				background: $clr_state_warning;
			}
			&_alarm{
				background: $clr_state_alarm;
			}
		}
		&__startend{
			flex: 0 0 200px;
			align-self:center;
			white-space: nowrap;		
		}
		&__cult{
			flex: 0 0 120px;
			align-self:center;
			white-space: nowrap;		
		}
		&__time{
			flex: 0 0 200px;
			align-self: center;
			white-space: nowrap;		
		}
	}
	&__underline
	{
		border-bottom: 2px solid $clr_gray1;
	}
}

</style>