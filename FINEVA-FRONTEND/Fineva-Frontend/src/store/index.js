<<<<<<< Updated upstream:FINEVA-FRONTEND/Fineva-Frontend/src/store/index.js
import { createStore } from "vuex";

const store = createStore({
    state:{
        userState: "user",
    },
    mutations:{
        userState_Change(state, userState){
            state.userState = userState;
        },
    },
    actions:{
        setUserState({commit},user_state){
            commit("userState_Change",user_state);
        },
        
    },
})

=======
import {createStore} from "vuex";

const store = createStore({
    state:{
        userState: "DRIVER"
    },

    mutations:{
        userState_change(state, userState){
            state.userState = userState;
        }
    },

    actions:{
        setUserState({commit},user_state){
            commit("userState_change",user_state);
        }
    }
});
>>>>>>> Stashed changes:FINEVA-FRONTEND/src/store/index.js
export default store;