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
            const url = vendorSet.url;
            dispatch('getCount', vendorSet)
                .then((vendorSet) => {
                    //fetch data as far as there is at least one item to get from the server and the available data on the client side are less than the available on the server
                    if ( vendorSet.counter !== 0 && vendorSet.counter > state.items.length) {
                        rootState.service.service.get(url)
                        .then(response => {
                            switch (response.status) {
                                case 200:
                                    commit('addItems', { items: response.data.d.results, rootState });
                                    break;
                                default:
                                    alert('Vendor Set: Error while fetching data');
                            }
                        })
                        .catch(e => {
                            alert('Error. Something went wrong');
                        });
                    }

                })
                .catch(() => {

                });

        },
        getCount({ state, rootState, commit }, vendorSet) {
            return new Promise((resolve, reject) => {
                let url = vendorSet.baseUrl + '/$count';
                if (vendorSet.filters) {
                    url += vendorSet.filters;
                }
                rootState.service.service.get(url)
                    .then(response => {
                        switch (response.status) {
                            case 200:
                                vendorSet.counter = response.data;
                                resolve(vendorSet);
                                break;
                            default:
                                reject();
                                break;
                        }

                    })
                    .catch(e => {
                        reject();
                        console.error(e);
                    })
            })

        }
    },
    mutations: {
        addItems(state, { items, rootState }) {
            state.items = state.items.concat(items) ;
            let vendorSet = rootState.service.entitySets[entityName];
            vendorSet.skip += vendorSet.top;
        }
    }
}