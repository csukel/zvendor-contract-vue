const entityName = 'VENDOR_SET'
export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        getItems(state){
            return state.items;
        }
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
            let filterStr = `$filter=substringof('${val}',VendorCode) or substringof('${val}',VendorName)`
            let vendorSet = rootState.service.entitySets[entityName];
            vendorSet.initialize();
            vendorSet.filters= filterStr;
            dispatch('fetchData');
        },
        reset({ state, rootState, commit, dispatch }){
            let vendorSet = rootState.service.entitySets[entityName]; 
            vendorSet.initialize();
            commit('removeAllItems');
        }
    },
    mutations: {
        addItems(state, { items, rootState }) {
            // let results = [];
            // items.forEach(element => {
            //     results.push(element.VendorName)
            // });
            state.items = state.items.concat(items) ;
            //state.items = state.items.concat(results) ;
            let vendorSet = rootState.service.entitySets[entityName];
            vendorSet.itemsCount = state.items.length;
            vendorSet.skip += vendorSet.top;
        },
        removeAllItems(state){
            state.items = [];
        }
    }
}