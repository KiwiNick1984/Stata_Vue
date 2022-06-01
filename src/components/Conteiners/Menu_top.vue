<template>
<div class="top-menu">
	<div class="top-menu__left">
		<div class="top-menu__left__secondaty-lable">
			хлебные крошки
		</div>
		<div class="top-menu__left__lable">
			Основной заголовок
		</div>
	</div>
	<div class="top-menu__right">
		<Datepicker v-model="date" :enableTimePicker="false" position="right" dark range multiCalendars locale="ru" :format="format">
			<template #calendar-header="{ index, day }">
				<div :class="index === 5 || index === 6 ? 'red-color' : ''">
					{{ day }}
				</div>
			</template>
		</Datepicker>
	</div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { ru } from 'date-fns/locale';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
export default {
	components: { Datepicker },
    setup() {
        const date = ref(new Date());
		onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        }) 
		const format = (date) => {
			const day = date[0].getDate();
			const month = date[0].getMonth() + 1;
			const year = date[0].getFullYear();
			const day2 = date[1].getDate();
			const month2 = date[1].getMonth() + 1;
			const year2 = date[1].getFullYear();
			return `${day}/${month}/${year} - ${day2}/${month2}/${year2}`;
		}
       
        return {
            date,
			format,
			ru,
        }
    }
}
</script>

<style lang="scss">
.dp__theme_dark {
    --dp-background-color: #000000;
    --dp-text-color: #EEECF1;
    --dp-hover-color: #484848;
    --dp-hover-text-color: #EEECF1;
    --dp-hover-icon-color: #959595;
    --dp-primary-color: #005cb2;
    --dp-primary-text-color: #EEECF1;
    --dp-secondary-color: #a9a9a9;
    --dp-border-color: #2d2d2d;
    --dp-menu-border-color: #2d2d2d;
    --dp-border-color-hover: #aaaeb7;
    --dp-disabled-color: #737373;
    --dp-scroll-bar-background: #212121;
    --dp-scroll-bar-color: #484848;
    --dp-success-color: #00701a;
    --dp-success-color-disabled: #428f59;
    --dp-icon-color: #959595;
    --dp-danger-color: #e53935;
	//width: 100%;
}
.dp__main{
	width: 100%;
}
.red-color {
	color: $clr_icon;
}

.top-menu{
	display: flex; 
	flex: 0 0 82px;
	background: $clr_bg;
	&__left{
		display: flex;
		flex-direction: column;

		flex: 1 1 auto;
		//background: $clr_icon;
		&__secondaty-lable{
			flex: 0 0 30px;
			background: $clr_gray2;
		}
			&__lable{
			flex: 1 1 auto;
			background: $clr_gray4;
		}
	}
	&__right{
		display: flex;
		flex-direction: column;
		flex: 0 0 300px;
		justify-content: center;
		align-items:center;
	}
}
</style>