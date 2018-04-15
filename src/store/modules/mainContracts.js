const entityName = 'VENDOR_MAIN_CONTRACT_SET'
export default {
    namespaced: true,
    state :{
        items:[]
    },
    getters:{

    },
    actions: {
        fetchData({ state, rootState, commit, dispatch }) {
            let contractSet = rootState.service.entitySets[entityName];
            contractSet.fetchData()
                .then((items)=>{
                    commit('addItems', { items, rootState });
                })
                .catch(e=>{

                });
        },
        reset({ state, rootState, commit, dispatch }){
            let contractSet = rootState.service.entitySets[entityName]; 
            contractSet.initialize();
            commit('removeAllItems');
        }
    },
    mutations: {
        addItems(state, { items, rootState }) {
            state.items = state.items.concat(items) ;
            let contractSet = rootState.service.entitySets[entityName];
            contractSet.itemsCount = state.items.length;
            contractSet.skip += contractSet.top;
        },
        removeAllItems(state){
            state.items = [];
        }
    }
}