import axios from 'axios'

export const GetList = {
	name: 'GetList',
	state: () => ({
		RoutesList: [], 			//Список маршрутов
		RoutEventList: [],			//Список событий в маршруте
		RoutMechList: [],			//Список механизмов в маршруте
		RoutesListReceived: false,
		SensList: [],
		SensListReceived: false,
		Simulation: true			//Режим симуляции данных (ОТЛАДКА)
	}),
	getters: {
		getRoutesList(State) {
			return State.RoutesList;
		},
		getRoutEventList(State) {
			return State.RoutEventList;
		},
		getSensLisn(State) {
			return State.SensList;
		}
	},
	mutations: {
		//Сортировка списка маршрутов
		sortRoutesList(state, sortCode) {
			switch (sortCode) {
				case 1:
					state.RoutesList.sort((rout1, rout2) => {
						return rout1.Source.localeCompare(rout2.Source)
					});
					break;
				case 2:
					state.RoutesList.sort((rout2, rout1) => {
						return rout1.Source.localeCompare(rout2.Source)
					});
					break;
				case 3:
					state.RoutesList.sort((rout1, rout2) => {
						return rout1.Receiver.localeCompare(rout2.Receiver)
					});
					break;
				case 4:
					state.RoutesList.sort((rout2, rout1) => {
						return rout1.Receiver.localeCompare(rout2.Receiver)
					});
					break;
				case 5:
					state.RoutesList.sort((rout1, rout2) => {
						return rout1.Culture.localeCompare(rout2.Culture)
					});
					break;
				case 6:
					state.RoutesList.sort((rout2, rout1) => {
						return rout1.Culture.localeCompare(rout2.Culture)
					});
					break;
				case 7:
					state.RoutesList.sort((rout1, rout2) => {
						if (rout1.StartTime > rout2.StartTime) {
							return 1;
						} else if (rout1.StartTime < rout2.StartTime) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				case 8:
					state.RoutesList.sort((rout2, rout1) => {
						if (rout1.StartTime > rout2.StartTime) {
							return 1;
						} else if (rout1.StartTime < rout2.StartTime) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				case 9:
					state.RoutesList.sort((rout1, rout2) => {
						if (rout1.StopTime > rout2.StopTime) {
							return 1;
						} else if (rout1.StopTime < rout2.StopTime) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				case 10:
					state.RoutesList.sort((rout2, rout1) => {
						if (rout1.StopTime > rout2.StopTime) {
							return 1;
						} else if (rout1.StopTime < rout2.StopTime) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				default:
					break;
			}
		},
		setRoutesList(state, inVal) {
			state.RoutesList = inVal;
		},
		sortSensList(state, sortCode) {
			switch (sortCode) {
				case 1:
					state.SensList.sort((rout1, rout2) => {
						return rout1.Type.localeCompare(rout2.Type)
					});
					break;
				case 2:
					state.SensList.sort((rout2, rout1) => {
						return rout1.Type.localeCompare(rout2.Type)
					});
					break;
				case 3:
					state.SensList.sort((rout1, rout2) => {
						return rout1.Mech.localeCompare(rout2.Mech)
					});
					break;
				case 4:
					state.SensList.sort((rout2, rout1) => {
						return rout1.Mech.localeCompare(rout2.Mech)
					});
					break;
				case 5:
					state.SensList.sort((rout1, rout2) => {
						if (rout1.ErrorsNum > rout2.ErrorsNum) {
							return 1;
						} else if (rout1.ErrorsNum < rout2.ErrorsNum) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				case 6:
					state.SensList.sort((rout2, rout1) => {
						if (rout1.ErrorsNum > rout2.ErrorsNum) {
							return 1;
						} else if (rout1.ErrorsNum < rout2.ErrorsNum) {
							return -1;
						} else {
							return 0;
						}
					});
					break;
				default:
					break;
			}
		},
	},
	actions: {
		//Получить список согласно Нав.коду
		//200 - первоначальная загрузка
		//		получить список маршрутов за текущие сктки
		//300 - Обновить данные
		//1	  - Получить список маршрутов
		//11  - Получить данные по маршруту
		//		(Список событий в маршруте, механизмы в маршруте, время работы/простоя)
		//2   - Получить список датчиков с ошибками
		async fetchList({ state, commit, getters, rootGetters }, inVal) {
			state.RoutesList.length = 0;
			state.SensList.length = 0;
			state.RoutesListReceived = false;
			state.SensListReceived = false;
			let urlStr = ''; 	//url для запроса данных
			let StartTime = ''; //Начало периода
			let EndTime = ''; 	//Конец периода

			//При стартовой загрузке (нав.код 200) получить данные о маршрутах и временной диапазон
			//Следующие запросы получать временной диапазон
			if (inVal === 200) {
				if(!state.Simulation){
					urlStr = 'http://192.168.0.120:8088/Route/Range';
				} else {
					urlStr = 'http://localhost:3000/RoutList';
				}	
				StartTime = new Date().toLocaleDateString("en-CA");
				EndTime = new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString("en-CA");
			} else {
				StartTime = rootGetters['NavAndDate/getStartDate'].toLocaleDateString("en-CA");
				EndTime = new Date(new Date().setDate(rootGetters['NavAndDate/getEndDate'].getDate() + 1)).toLocaleDateString("en-CA");
			}

			//Обновить 
			if (inVal === 300) {
				inVal = rootGetters['NavAndDate/getNavCode'];
			}
			if (inVal === 1) {
				if(!state.Simulation){
					urlStr = 'http://192.168.0.120:8088/Route/Range';
				} else {
					urlStr = 'http://localhost:3000/RoutList';
				}				
			} else if (inVal === 11) {
				urlStr = 'https://jsonplaceholder.typicode.com/posts';
			} else if (inVal === 12) {
				urlStr = 'https://jsonplaceholder.typicode.com/posts';
			} else if (inVal === 2) {
				urlStr = 'https://jsonplaceholder.typicode.com/posts';
			} else if (inVal === 3) {
				urlStr = 'https://jsonplaceholder.typicode.com/posts';
			}



			//Не режим симуляции обратиться к серверу
			//В симуляции вставить данные для симуляции
			//if (!state.Simulation) {
				try {
					const response = await axios.get(urlStr, {
						params: {
							startTime: StartTime,
							endTime: EndTime
						}
					});
					if (inVal === 1 || inVal === 200) {
						state.RoutesListReceived = ((response.data.length > 0) && ('Culture' in response.data[0]));
						(state.RoutesListReceived) ? state.RoutesList = response.data: state.RoutesList = [];
						state.RoutesListReceived = true;
					} else if (inVal === 2) {
						state.SensListReceived = ((response.data.length > 0) && ('Mech' in response.data[0]));
						(state.SensListReceived) ? state.SensList = response.data: state.SensList = [];
						state.SensListReceived = true;
					} else if (inVal === 3) {;
					}
				} catch (e) {
					alert('Ошибка')
					if (inVal === 1 || inVal === 200) {
						state.RoutesListReceived = false;
						console.log('state.RoutesListReceived = ' + state.RoutesListReceived);
					} else if (inVal === 2) {
						state.SensListReceived = false;
						console.log('state.SensListReceived = ' + state.SensListReceived);
					} else if (inVal === 3) {;
					}
				}
			// } else {
			// 	if (inVal === 1 || inVal === 200) {
			// 		//Список маршрутов для симуляции (нав. код 1 или 200)
			// 		state.RoutesListReceived = true;
			// 		state.RoutesList = [{
			// 				Culture: "Ячмень",
			// 				MesIDRout: 2,
			// 				Receiver: "Силос 3,4",
			// 				Source: "Автоприем 1",
			// 				StartTime: "2022-02-16T16:22:55+02:00",
			// 				StopTime: "2022-02-16T16:25:40+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 3,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 4,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 5,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 6,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 7,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 8,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 9,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 10,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 11,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 12,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 13,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 14,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 15,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 16,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 17,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 18,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			},
			// 			{
			// 				Culture: "Кукуруза",
			// 				MesIDRout: 19,
			// 				Receiver: "Сушилка 2",
			// 				Source: "Автоприем 2",
			// 				StartTime: "2022-02-16T16:41:42+02:00",
			// 				StopTime: "2022-02-16T16:44:06+02:00"
			// 			}
			// 		]
			// 	} else if (inVal === 11) {
			// 		//Список событий в маршруте для симуляции (нав. код 11)

			// 	} else if (inVal === 2) {
			// 		//Список датчиков для симуляции (нав. код 2)
			// 		state.SensListReceived = true;
			// 		state.SensList = [{
			// 				Type: "Подпор (нижний)",
			// 				Mech: "Нория Н1",
			// 				ErrorsNum: 8
			// 			},
			// 			{
			// 				Type: "Подпор (нижний)",
			// 				Mech: "Нория Н2",
			// 				ErrorsNum: 10
			// 			},
			// 			{
			// 				Type: "Подпор (привод)",
			// 				Mech: "Конвейер КЛ-2",
			// 				ErrorsNum: 2
			// 			}
			// 		]
			// 	} else if (inVal === 3) {;
			// 	}
			// }
		}
	},
	namespaced: true
}