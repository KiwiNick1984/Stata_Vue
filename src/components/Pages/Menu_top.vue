<template>
<div class="top-menu">
	<div class="top-menu__left">
		<div class="top-menu__left__secondaty-lable">
			{{getStrNav}}
		</div>
		<div class="top-menu__left__lable">
			{{getActualPageName}}
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
import { ref, onMounted, watch } from 'vue';
import { ru } from 'date-fns/locale';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
	components: { Datepicker },
    setup() {
        const date = ref(new Date());
		onMounted(() => {
            const startDate = new Date();//new Date(new Date().setDate(new Date().getDate() - 1));
            const endDate = new Date();//new Date(new Date().setDate(new Date().getDate() + 1));
            date.value = [startDate, endDate];
        })
		const format = (date) => {
			const day_1 = date[0].toLocaleDateString("ru-RU");
			const day_2 = date[1].toLocaleDateString("ru-RU");
			return `${day_1} - ${day_2}`;
		}
        return {
            date,
			format
        }
    },
	methods: {
		...mapMutations({SetStartDate : 'NavAndDate/setStartDate',
						SetEndDate : 'NavAndDate/setEndDate'}),
		...mapActions({fetchList : 'GetList/fetchList'})
	},
	computed:{
		...mapGetters({
			getStrNav : 'NavAndDate/getStrNav',
			getActualPageName : 'NavAndDate/getActualPageName',
		})
	},
	watch: {
		date() {
			this.SetStartDate(this.date[0]);
			this.SetEndDate(this.date[1]);
			this.fetchList(300);
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
	padding-left: 36px;
	padding-right: 36px;
	&__left{
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		&__secondaty-lable{
			flex: 0 0 30px;
			padding-top: 8px;
			font-family: Roboto-Regular;
			font-size: 14px;
			color: $clr_gray1;
		}
		&__lable{
			flex: 1 1 auto;
			padding-top: 8px;
			font-family: Roboto-Medium;
			letter-spacing: 1.25px;
			text-transform: uppercase;
			font-size: 24px;
			color: $clr_gray0;
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