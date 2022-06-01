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
				Lable : "SG-200",
				ErrorsNum : 0,
				State : 1
			},
			{
				Lable : "SG-201",
				ErrorsNum : 0,
				State : 2
			},
			{
				Lable : "SG-202",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "SG-203",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "SG-204",
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