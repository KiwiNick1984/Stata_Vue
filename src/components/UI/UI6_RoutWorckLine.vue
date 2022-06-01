<template>
	<div class="routeworckline">
		<div class="routeworckline__line">
			<div class="routeworckline__line__led" :class="com_GetState"></div>
			<div class="routeworckline__line__lable">
				{{com_GetLable}}
			</div>
			<div class="routeworckline__line__percent">
				{{com_GetPercent}}
			</div>
			<div class="routeworckline__line__time">
				{{com_GetTime}}
			</div>
		</div>
		<div class="routeworckline__underline"></div>
	</div>
</template>

<script>
export default {
	name : 'comp-rout-worckline',
	props: {
		p_Status: {
			type: Number,
			default: 0
		},
		p_Percent: {
			type: Number,
			default: 0
		},
		p_Time: {
			type: Date,
		}
	},
	methods: {

	},
	computed:{
		com_GetTime()
		{
			return this.p_Time.toLocaleTimeString('ru-RU');//.replace(/,+/g, "");
		},
		com_GetState()
		{
			switch (this.p_Status) {
				case 1:
					return "routeworckline__line__led_worck";
				case 2:
					return "routeworckline__line__led_idle";
				default:
					return "routeworckline__line__led_nan";
			}
		},
		com_GetPercent()
		{
			if (this.p_Percent>0) 
				return this.p_Percent + " %";
			else
				return "";
		},
		com_GetLable()
		{
			switch (this.p_Status) {
				case 1:
					return "В работе";
				case 2:
					return "Простой";
				default:
					return "";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.routeworckline{
	display: flex;
	flex-direction: column;
	&__line
	{
		display: flex;
		justify-content: space-between;
		padding: 8px 8px 8px 8px;
		height: 40px;
		font-family: Roboto-Regular;
		font-size: 16px;
		color: $clr_gray0;
		&__led{
			flex: 0 0 5px;
			height: 100%;
			margin-right: 24px;
			border-radius: 0px 8px 8px 0px;
			&_nan{
				visibility: hidden;
			}
			&_worck{
				background: $clr_state_ok;
			}
			&_idle{
				background: $clr_state_repair;
			}
		}
		&__lable{
			width: 137px;
			align-self: center;
			white-space: nowrap;
		}
		&__percent
		{
			width: 49px;
			align-self: center;
			white-space: nowrap;
		}
		&__time{
			width: 77px;
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