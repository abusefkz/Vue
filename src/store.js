import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });


const store = createStore({
    state:{
        user : null,
        saltKey: "198S1=91GHV3?02PO",
    },
    mutations:{
        setUser(state,user){
            state.user = user
        }
    },
    getters:{
        _isAccount: state => state.user == null,
        _isAuthenticated: state => state.user !== null,
        _saltKey: state => state.saltKey,
        _deletePassword(state){
            const user = state.user;
            delete user?.password
            return user;
        }
        
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
          },
        }),
      ],
})

export default store;