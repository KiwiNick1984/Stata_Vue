import {createStore} from "vuex";
import {NavAndDate} from "@/Store/NavAndDate.js";
import {GetList} from "@/Store/GetList.js";

export default createStore({
	modules:{
		NavAndDate: NavAndDate,
		GetList: GetList
	}
})