<template>
	<div class="mechtile" :class="com_GetState">
		<div class="mechtile__led"></div>
		<div class="mechtile__content">
			<div class="mechtile__content__lable">{{p_Lable}}</div>
			<div class="mechtile__content__subline">Ошибок: {{p_ErrorsNum}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'comp-mechtile',
	props: {
		p_ID: {
			type: Number,
			default: 0
		},
		p_Lable: {
			type: String,
			default: "Lable"
		},
		p_ErrorsNum: {
			type: Number,
			default: 5
			//Колличество ошибок
		},
		p_State: {
			type: Number,
			default: 1
			//1 - норма
			//2 - ремонт
			//3 - предупреждение
			//4 - авария
		},
	},
	created(){
		console.log(this.p_Lable);
	},
	methods: {},
	computed: {
		com_GetState() {
			switch (this.p_State) {
				case 1:
					return "mechtile_ok";
				case 2:
					return "mechtile_repair";
				case 3:
					return "mechtile_waqrning";
				case 4:
					return "mechtile_alarm";
				default:
					break;
			}
		},
	},
};
</script>

<style lang="scss">
.mechtile {
	display: flex;
	flex: 0 0 154px;
	height: 92px;
	margin-right: 24px;
	margin-bottom: 24px;
	&_ok {
		.mechtile__led {
			background: $clr_state_ok;
		}
		.mechtile__content__subline
		{
			visibility: hidden;
		}
	}
	&_repair {
		.mechtile__led {
			background: $clr_state_repair;
		}
		.mechtile__content__subline
		{
			visibility: hidden;
		}
	}
	&_waqrning {
		.mechtile__led {
			background: $clr_state_warning;
		}
		.mechtile__content__subline
		{
			visibility: visible;
		}
	}
	&_alarm {
		.mechtile__led {
			background: $clr_state_alarm;
		}
		.mechtile__content__subline
		{
			visibility: visible;
		}
	}
	&__led {
		flex: 0 0 5px;
		height: 100%;
		border-radius: 3px 0px 0px 3px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		background: $clr_menu;
		border-radius: 0px 3px 3px 0px;
		&:not(.left-menu-btn_txt):hover{
			background: $clr_gray4;
			cursor: pointer;
		}
		&__lable {
			flex: 1 1 24px;
			padding-left: 8px;
			padding-top: 8px;
			font-family: Roboto-Medium;
			font-weight: 500;
			font-size: 36px;
			letter-spacing: 1.25px;
			text-transform: uppercase;
			color: $clr_gray2;
		}
		&__subline {
			flex: 1 1 24px;
			padding-left: 8px;
			padding-top: 16px;
			font-family: Roboto-Medium;
			font-weight: 500;
			font-size: 16px;
			letter-spacing: 1.25px;
			color: $clr_gray0;
		}
	}
}
</style>