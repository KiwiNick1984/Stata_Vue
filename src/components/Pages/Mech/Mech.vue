<template>
	<div class="mech">
		<div class="mech__timeline">TIME LINE</div>
		<div class="mech__tables">TABLES</div>
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
				Lable : "Н1",
				ErrorsNum : 0,
				State : 1
			}
		]
	}),
}
</script>

<style lang="scss">
.mech{
						border: 1px solid #ff0101;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	overflow-y: auto;
	flex: 1 1 auto;
	margin-left: 8px;
	margin-right: 8px;
	&__timeline{
						border: 1px solid #24e685;
		display: flex;
		flex: 1 1 auto;
	}
		&__tables{
						border: 1px solid #24e685;
		display: flex;
		flex: 1 1 auto;
	}
}
</style>