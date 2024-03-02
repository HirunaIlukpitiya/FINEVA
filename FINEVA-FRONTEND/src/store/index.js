
import { createStore } from "vuex";

const store = createStore({
    state:{
        userState: "user",
        driverDetails: "null",
        officerDetails: "null",
        loggedIn:false,
        value:"null",
        fine: "null",
    },
    mutations:{
        userState_Change(state, userState){
            state.userState = userState;
        },

        driverDetails_Change(state, driverDetails){
            state.driverDetails = driverDetails;
        },

        officerDetails_Change(state, officerDetails){
            state.officerDetails = officerDetails;
        },
        loggedIn_Change(state, loggedIn){
            state.loggedIn = loggedIn;
        },
        Hash_Change(state, value){
            state.value = value;
        },
        fineChange(state,fine){
            state.fine = fine;
        }
    },
    actions:{
        setUserState({commit},user_state){
            commit("userState_Change",user_state);
        },

        setDriverDetails({commit}){
            commit("driverDetails_Change",JSON.parse(localStorage.getItem("Driver")));
        },

        setOfficerDetails({commit}){
            commit("officerDetails_Change",JSON.parse(localStorage.getItem("Officer")));
        },
        setLoggedIn({commit}){
            commit("loggedIn_Change",localStorage.getItem("loggedIn"));
        },
        setHash({commit}){
            commit("Hash_Change",localStorage.getItem("value"));
        },
        setFine({commit},fine){
            commit("fineChange",fine);
        }
    },
})

export default store;