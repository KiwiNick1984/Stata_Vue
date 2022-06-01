<template>
	<div ref="a" class="Timeline" @click="mm">
		<div class="d2" v-for="(ivent) in EventCoef"
						:key="ivent.id"
						:style="{width: ivent + '%'}">

		</div>
		<!-- {{com_GetPeriodLengtPx}} -->
	</div>
</template>

<script>
export default {
	name : 'comp-rout-timeline',
	data: () => ({
		TotalTime : 0,
		pxWidth : 0,
		EventTime : [],
		EventCoef : [],
		EventWidth : [],
		mainDiv : null,
	}),
	mounted(){
		this.TotalTime = this.com_PeriodLengthMin;
		this.pxWidth = this.$refs.a.clientWidth;
		var tempArr=[];
		var tempArr2=[];
		var tempInt=this.TotalTime;
		var tempInt2=this.pxWidth;
		this.p_Events.forEach(function(item, index){
			tempArr.push((item.end-item.start)/60000);
			tempArr2.push((item.end-item.start)/60000/tempInt*100);
		});
		this.EventTime = tempArr.slice();
		this.EventCoef = tempArr2.slice();

		console.log('Продолжительность = ' + this.TotalTime + ' мин.');
		console.log('Width = ' + this.pxWidth + ' px');
		this.EventTime.forEach(function (item, index) {
			console.log('Событие #' + index + ' = ' + item + 'мин. ');
		});
		this.EventCoef.forEach(function (item, index) {
			console.log('Событие #' + index + ' = ' + item);
		});
	},
	props: {
		p_Events:{
			type: Array
		}
	},
	methods: {
		mm(em)
		{
			this.Width = this.$refs.a.clientWidth;
			console.log(this.Width);
		},
		m_testResize()
		{
			console.log("testResize");
		},
		m_getDifMin(start, stop)
		{
			console.log(start);
			//return (stop - start)/60000;
		},
	},
	computed:{
		com_PeriodLengthMin()
		{
			return (this.p_Events[this.p_Events.length-1].end - this.p_Events[0].start)/60000;
		},

		// com_GetPeriodLengtPx()
		// {			
		// 	return this.Width.clientWidth;
		// }

	}
};
</script>

<style lang="scss" scoped>
.Timeline{
	display: flex;
	height: 64px;
	width: 100%;
	background: $clr_gray2;
	border-radius: 8px 8px 8px 8px;
}
.d1{
	border: 1px solid $clr_bg;
	width: 10%;
	border-radius: 8px 8px 8px 8px;
	background: $clr_state_ok;
}
.d2{
	border: 1px solid $clr_bg;
	border-radius: 8px 8px 8px 8px;
	background: $clr_state_ok;
}

</style>