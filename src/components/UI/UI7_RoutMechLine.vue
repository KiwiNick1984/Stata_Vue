<template>
	<div class="routemechline">
		<div class="routemechline__line" @click="m_click">
			<div class="routemechline__line__led" :class="com_GetState"></div>
			<div class="routemechline__line__lable">
				{{p_lable}}
			</div>
		</div>
		<div class="routemechline__underline"></div>
		<div class="routemechline__arrow">
			<img :src="require('@/assets/img/arrowDown.svg')" alt="">
		</div>
	</div>
</template>

<script>
export default {
	name : 'comp-rout-mechline',
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
		p_last: {
			type: Boolean,
			default: false
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
		com_GetState()
		{
			switch (this.p_Status) {				
				case 1:
					return "routemechline__line__led_ok";
				default:
					return "routemechline__line__led_alarm";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.routemechline{
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
				background: $clr_state_ok;
				//visibility: hidden;
			}
			&_waqrning{
				visibility: hidden;
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
	}
	&__underline
	{
		border-bottom: 2px solid $clr_gray1;
	}
	&__arrow{
		display: flex;
		justify-content: center;
	}
}

</style>