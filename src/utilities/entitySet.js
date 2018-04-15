
export default class EntitySet {
    constructor(baseUrl, filters, top, skip, service) {
        this.baseUrl = baseUrl;
        this.entityfilters = filters;
        this.top = top;
        this.skip = skip;
        this.service = service;
        this.itemsCount = 0;
    }

    initialize() {
        this.top = 10;
        this.skip = 0;
        this.itemsCount = 0;
        this.filters = null;
        this.counter = null;
    }

    get url() {
        let url = this.baseUrl + `?$skip=${this.skip}&$top=${this.top}`;
        if (this.filters) {
            url += this.filters;
        }
        return url;
    }

    fetchData() {
        var that = this,
            promise = function (resolve, reject) {
                that.getCounter()
                    .then(() => {
                        //fetch data as far as there is at least one item to get from the server and the available data on the client side are less than the available on the server
                        if (that.counter !== 0 && that.counter > that.itemsCount) {
                            that.service.get(that.url)
                                .then(response => {
                                    switch (response.status) {
                                        case 200:
                                            // commit('addItems', { items: response.data.d.results, rootState });
                                            resolve(response.data.d.results);
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
                    .catch(e => {
                    });
            };
        return new Promise(promise);
    }

    getCounter() {
        var that = this;
        return new Promise((resolve, reject) => {
            let url = that.baseUrl + '/$count';
            if (that.filters) {
                url += that.filters;
            }
            that.service.get(url)
                .then(response => {
                    switch (response.status) {
                        case 200:
                            that.counter = response.data;
                            resolve();
                            break;
                        default:
                            reject();
                            break;
                    }

                })
                .catch(e => {
                    reject(e);
                    console.error(e);
                })
        })

    }
}