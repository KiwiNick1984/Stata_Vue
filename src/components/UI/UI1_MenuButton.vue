<template>
	<div class="left-menu-btn" :class="com_GetState"
								@click="m_click">
		<div class="left-menu-btn__led"></div>
		<div class="left-menu-btn__icon">
			<img :src="require('@/assets/img/' + p_Icon)" alt="">
		</div>
		<div class="left-menu-btn__lable">{{p_Lable}}</div>
	</div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
	name: 'comp-menu-btn',
	props:{
		p_NavCod:{
			type: Number,
			default: 0			
		},
		p_Icon: {
			type: String,
			default: "no_icon.svg"
		},
		p_Lable: {
			type: String,
			default: "Lable"
		},
		p_State:{
			type: Boolean,
			default: false
		},
		p_Route:{
			type: String,
			default: "/"
		}
	},
	emits:[
		'em_click'
	],
	methods:{
		...mapMutations({SetNavFirst : 'NavAndDate/SetNavFirst',
						SetNavCode : 'NavAndDate/SetNavCode'}),
		...mapActions({fetchList : 'GetList/fetchList'}),
		m_click()
		{
			this.$emit('em_click', this.p_NavCod);	//Изменить состояние (нажата/не нажата) кнопки левого меню
			this.$router.push(this.p_Route);		//Вывести страницу согласно маршрутуVUE в блок контента 
			this.SetNavFirst(this.p_Lable);			//Установить первую запись в массив хлеб.крошек
			this.fetchList(this.p_NavCod);			//
			this.SetNavCode(this.p_NavCod);
		}
	},
	computed:{
		com_GetState()
		{
			return this.p_State ? "left-menu-btn_on" : "left-menu-btn_off";
		}
	}
}
</script>

<style lang="scss">
.left-menu-btn {
	display: flex;
	height: 48px;
	font-family: "Roboto-Medium";
	font-weight: 500;
	&_off{
		background: $clr_menu;
		.left-menu-btn__led{
			visibility: hidden;
		}
	}
	&_on{
		background: $clr_bg;
		.left-menu-btn__led{
			visibility: visible;
		}
	}
	&:not(.left-menu-btn_txt):hover{
		background: $clr_bg;
		cursor: pointer;
	}
	
	&__led {
		height: 100%;
		width: 5px;
		margin-right: 20px;
		border-radius: 0px 3px 3px 0px;
		background: $clr_icon;
	}
	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 16px;
	}
	&__lable {
		display: flex;
		align-items: center;
		margin-right: 16px;
		color: $clr_gray0;
		font-family: Roboto-Medium;
		font-weight: 500;
		letter-spacing: 1.25px;
		text-transform: uppercase;
	}
	&__text {
		display: flex;
		align-items: center;
		padding: 25px;
		font-family: Roboto-Medium;
		letter-spacing: 1.25px;
		text-transform: uppercase;
		color: $clr_gray1;
	}
}
</style>