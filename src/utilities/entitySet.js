
export default class EntitySet {
    constructor(baseUrl,filters,top,skip){
        this.baseUrl = baseUrl;
        this.entityfilters = filters;
        this.top = top;
        this.skip = skip;
    }

    initialize(){
        this.top= 10;
        this.skip= 0;
        this.filters= null;
        this.counter= null;
    }

    get url(){
        let url = this.baseUrl + `?$skip=${this.skip}&$top=${this.top}`;
        if (this.filters){
            url += this.filters;
        }
        return url ;
    }
}