import axios from 'axios';
import EntitySet from "../../utilities/entitySet";
const service = axios.create({
    baseURL: '/sap/opu/odata/sap/zptl_vendor_contracts_srv/'
})
const entitySets = {
    'PROJECT_SET' : new EntitySet('ProjectSet',null,10,0,service),
    'CONTRACT_TYPE_SET' : new EntitySet('ContractTypeSet',null,10,0,service),
    // 'VENDOR_MAIN_CONTRACT_SET': 'VendorContractSet?$filter=AgreementType eq \'ZK01\'',
    'VENDOR_MAIN_CONTRACT_SET': new EntitySet('VendorContractSet','$filter=AgreementType eq \'ZK01\'',10,0,service),
    // 'VENDOR_SUB_CONTRACT_SET': (mainContractNo) => {return `VendorContractSet?$orderby=AgreementType asc&$filter=LinkToMain eq \'${mainContractNo}\'`}
    'VENDOR_SUB_CONTRACT_SET': new EntitySet('VendorContractSet',null,10,0,service),
    'VENDOR_SET': new EntitySet('VendorSet',null,10,0,service)
};

export default{
    namespaced: true,
    state: {
        service,
        entitySets
    },
    getters:{},
    mutations:{},
    actions:{}
}