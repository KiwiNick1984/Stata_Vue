<template>
	<div class="eventline">
		<div class="eventline__line" @click="m_click">
			<div class="eventline__line__led" :class="com_GetState"></div>
			<div class="eventline__line__lable">
				{{p_lable}}
			</div>
			<div class="eventline__line__time">
				{{com_GetTime}}
			</div>		
		</div>
		<div class="eventline__underline"></div>
	</div>
</template>

<script>
//import {mapMutations} from 'vuex'

export default {
	name : 'comp-eventline',
	props: {
		p_ID: {
			type: Number,
			default: 0
		},
		p_Status: {
			type: Number,
			default: 0
		},
		p_lable: {
			type: String,
			default: "Не известно"
		},
		p_Time: {
			type: Date,
		}
	},
	methods: {
		//...mapMutations({SetNavForward : 'NavAndDate/SetNavForward'}),
		
		m_click()
		{
			//this.SetNavForward(this.p_Start +" -> "+ this.p_End);
			//this.$router.push(this.p_Route);
		}
	},
	computed:{
		com_GetTime()
		{
			return this.p_Time.toLocaleString('ru-RU').replace(/,+/g, "");
		},
		com_GetState()
		{
			switch (this.p_Status) {
				case 1:
					return "eventline__line__led_waqrning";
				case 2:
					return "eventline__line__led_alarm";
				default:
					return "eventline__line__led_ok";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.eventline{
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
		// &:hover{
		// 	background: $clr_gray4;
		// 	cursor: pointer;
		// }
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
		&__lable{
			flex: 0 0 285px;
			align-self:center;
			white-space: nowrap;		
		}
		&__time{
			flex: 0 0 170px;
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