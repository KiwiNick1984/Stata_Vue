<template>
	<div class="mechtab">
		<comp-mechtile v-for="(tile, i) in d_Mech"
						:key="i"
						:p_Lable="tile.Lable"
						:p_State="tile.State"
						:p_ErrorsNum="tile.ErrorsNum"
						:p_Route="'/mech'"
		></comp-mechtile>
	</div>	
</template>

<script>
export default {
	components:{
	},
	data: () => ({
		d_Mech:
		[
			{
				Lable : "V-1.1",
				ErrorsNum : 0,
				State : 1
			},
			{
				Lable : "V-1.2",
				ErrorsNum : 0,
				State : 2
			},
			{
				Lable : "V-2.1",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "V-2.2",
				ErrorsNum : 3,
				State : 3
			}
		]
	}),
}
</script>

<style lang="scss">
.mechtab{
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	overflow-y: auto;
	flex: 0 1 auto;
	margin-left: 65px;
	margin-right: 65px;
}
</style>