const entityName = 'VENDOR_SET'
export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {

    },
    actions: {
        fetchData({ state, rootState, commit, dispatch }) {
            let vendorSet = rootState.service.entitySets[entityName];
            vendorSet.fetchData()
                .then((items)=>{
                    commit('addItems', { items, rootState });
                })
                .catch(e=>{

                });
        },
        queryFilter({state,rootState,commit,dispatch},val){
            var t = val;
            debugger;
        },
        reset({ state, rootState, commit, dispatch }){
            let vendorSet = rootState.service.entitySets[entityName]; 
            vendorSet.initialize();
            commit('removeAllItems');
        }
    },
    mutations: {
        addItems(state, { items, rootState }) {
            state.items = state.items.concat(items) ;
            let vendorSet = rootState.service.entitySets[entityName];
            vendorSet.itemsCount = state.items.length;
            vendorSet.skip += vendorSet.top;
        },
        removeAllItems(state){
            state.items = [];
        }
    }
}