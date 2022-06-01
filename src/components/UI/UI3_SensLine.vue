<template>
	<div class="sensline">
		<div class="sensline__line" @click="m_click">
			<div class="sensline__line__led sensline__line__led_waqrning" :class="com_GetState"></div>
			<div class="sensline__line__type">
				{{p_Type}}
			</div>
			<div class="sensline__line__mech">
				{{p_Mech}}
			</div>
			<div class="sensline__line__alarmnum">
				{{p_Errorsnum}}
			</div>
			<div class="sensline__line__dinamick">
			</div>		
		</div>
		<div class="sensline__underline"></div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
	name : 'comp-sensline',
	props: {
		p_ID: {
			type: Number,
			default: 0
		},
		p_Type: {
			type: String,
			default: "Не известно"
		},
		p_Mech: {
			type: String,
			default: "Не известно"
		},
		p_Errorsnum: {
			type: Number,
			default: 0
		},
		p_Dinamick: {
			type: Number,
			default: 0
		},
		p_Route:{
			type: String,
			default: "/"
		}
	},
	methods: {
		...mapMutations({SetNavForward : 'NavAndDate/SetNavForward'}),
		m_click()
		{
			this.SetNavForward('"'+ this.p_Mech + '"   ' + this.p_Type);
			this.$router.push(this.p_Route);
		}
	},
	computed:{
		com_GetState()
		{
			if(this.p_Errorsnum >= 5 && this.p_Errorsnum < 10){
				return "sensline__line__led_waqrning";
			}
			else if (this.p_Errorsnum >= 10){
				return "sensline__line__led_alarm";
			}
			else{
				return "sensline__line__led_ok";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.sensline{
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
		&__type{
			flex: 0 0 200px;
			align-self:center;
			white-space: nowrap;		
		}
		&__mech{
			flex: 0 0 200px;
			align-self:center;
			white-space: nowrap;		
		}
		&__alarmnum{
			flex: 0 0 230px;
			align-self: center;
			white-space: nowrap;		
		}
		&__dinamick{
			flex: 0 0 230px;
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