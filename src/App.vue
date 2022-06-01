<template>
	<div class="main">
		<comp-menu></comp-menu>
		<div class="right">
			<comp-menu-top></comp-menu-top>
			<comp-content></comp-content>
		</div>
	</div>
</template>

<script>
//import CompMenu from './components/Menu.vue'
//import CompContent from './components/Content.vue'
//import CompMenuTop from './components/Pages/Menu_top.vue'

import {mapActions} from 'vuex'

export default {
	name: 'App',
	components: {
		//'comp-menu': CompMenu,
		//'comp-content': CompContent,
		//'comp-menu-top': CompMenuTop
	},
	computed:{
	},
	methods: {
		...mapActions({fetchList : 'GetList/fetchList'}),
	},
	mounted() {
		//при первой загрузке получить и вывести список маршрутов
		this.fetchList(200);
		this.$router.push("/routTab");
	}
}
</script>

<style lang="scss" >
	.main{
		display: flex;
		flex-grow: 1;
	}
	.right{
		display: flex;
		flex: 1 0 500px;
		flex-direction: column;
		//flex-grow: 1;
		background: $clr_bg;
	}
	#app{
		max-width: 1440px;
		margin: 0 auto;
	}
	body{
		background: $clr_bg2;
	}
</style>
