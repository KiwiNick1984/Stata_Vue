<template>
	<div class="content">
		<router-view></router-view>
	</div>	
</template>

<script>

export default {
	components:{

	},
	data: () => ({
	}),
}
</script>

<style lang="scss" scoped>
.content{
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
	overflow:hidden;
}
</style>