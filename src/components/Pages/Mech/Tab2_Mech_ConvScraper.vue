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
	data: () => ({
		d_Mech:
		[
			{
				Lable : "КС-10",
				ErrorsNum : 0,
				State : 1
			},
			{
				Lable : "КС-11",
				ErrorsNum : 0,
				State : 2
			},
			{
				Lable : "КС-12",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-13",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-14",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-15",
				ErrorsNum : 10,
				State : 4
			},
			{
				Lable : "КС-16",
				ErrorsNum : 12,
				State : 4
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