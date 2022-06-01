export const NavAndDate = {
	name : 'NavAndDate',
	state: () => ({
		StartDate : new Date(),		//Дата начала
		EndDate : new Date(),		//Дата конца
		BreadCrumbs : ['Маршруты'],	//Массив для навигации (хлебные крошки)
		NavCode : 1,				//Код для навигации
	}),
	getters: {
		getStartDate(State){
			return State.StartDate;
		},
		getEndDate(State){
			return State.EndDate;
		},
		getStrNav(State){
			let str = '';
			State.BreadCrumbs.forEach((item, index, array) => {
				if(index + 1 === array.length){
					str = str + item;
				}
				else{
					str = str + item + ' / ';
				}				
			});
			return str;
		},
		getActualPageName(State){
			if(State.BreadCrumbs.length > 0){
				return State.BreadCrumbs[State.BreadCrumbs.length-1];
			}
			else{
				return 'nan';
			}
		},
		getNav(State){
			return State.BreadCrumbs;
		},
		getNavCode(State){
			return State.NavCode;
		}
	},
	mutations: {
		setStartDate(state, inVal){
			state.StartDate = inVal;
		},
		setEndDate(state, inVal){
			state.EndDate = inVal;
		},
		setNavCode(state, inVal){
			state.NavCode = inVal;
		},
		SetNavForward(state, inVal){
			state.BreadCrumbs.push(inVal);
		},
		SetNavFirst(state, inVal){
			state.BreadCrumbs.length = 0;
			state.BreadCrumbs.push(inVal);
		},
		SetNavCode(state, inVal){
			state.NavCode = inVal;
		}
	},
	actions: {
	
	},
	namespaced: true
}