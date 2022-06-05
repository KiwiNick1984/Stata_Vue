<template>
	<div class="sens">
		<div class="sens__timeline">В разработке!!! (Вставить компонент Time line)</div>
		<div class="sens__tables">
			<div class="sens__tables__events">
				<div class="lable">
					События в датчика
				</div>
				<div class="table">
					компонент Sens_Events
				</div>
			</div>
			<div class="sens__tables__worckmech">
				<div class="sens__tables__worckmech__alarms">
					<div class="lable">
						Количество аварий
					</div>
					<div class="table">
						компонент Sens_AlarmStata
					</div>
				</div>
				<div class="sens__tables__worckmech__void">
					ПУСТО
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default {
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
.sens{
	border: 1px solid #1916b3;
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
		height: 315px;
		width: 100%;

		font-family: Roboto-Medium;
		font-size: 24px;
		color: $clr_gray1;
	}
	&__tables{
						border: 1px solid #24e685;
		display: flex;
		flex: 1 1 auto;
		height: 558px;
		width: 100%;

		font-family: Roboto-Medium;
		font-size: 24px;
		color: $clr_gray1;
		&__events{
							border: 1px solid #f08e0d;
			display: flex;
			flex-direction: column;
			flex: 0 0 50%;
		}
		&__worckmech{
							border: 1px solid #f08e0d;
			display: flex;
			flex-direction: column;
			flex: 0 0 50%;
			&__alarms{
							border: 1px solid #f80909;
				flex-direction: column;
				display: flex;
				flex: 0 0 45%;
			}
			&__void
			{
							border: 1px solid #f80909;
				display: flex;
				flex: 0 0 55%;
			}
		}
	}
}
.lable{
	margin: 8px 8px 8px 8px;
	color: $clr_gray0;
}
.table{
	flex: 1 0 auto;
	margin: 0px 8px 0px 8px;
	background: $clr_gray2;
}
</style>