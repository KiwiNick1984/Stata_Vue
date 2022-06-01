<template>
	<div class="mechtab">
		<comp-mechtile v-for="(tile, i) in d_Mech"
						:key="i"
						:p_Lable="tile.Lable"
						:p_State="tile.State"
						:p_ErrorsNum="tile.ErrorsNum"
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
				Lable : "КС-1",
				ErrorsNum : 0,
				State : 1
			},
			{
				Lable : "КС-2",
				ErrorsNum : 0,
				State : 2
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-3",
				ErrorsNum : 3,
				State : 3
			},
			{
				Lable : "КС-4",
				ErrorsNum : 6,
				State : 4
			}
		],
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