import {useRequestor} from "@utils/requestor/useRequestor";

export interface BaseApplyInfo {
    id?:number;
    applyId?:number;
    applyType?:string;
    applyTime?:string;
    applyStatus?:number;
    reply?:string;
}

export interface BackApply {
    id?:number;
    applyId?:number;
    username?:string;
    gender?: number;
    stuId?: string;
    phone?: string;
    healthCode?: string;
    backTime?:Date;
    reason?:number;
    status?:number
    reply?:string;
}

export interface ProveApply {
    id?:number;
    applyId?:number;
    username?:string;
    stuId?: string;
    phone?: string;
    address?:string;
    reason?:string;
    proveType?:number;
    status?:number;
    reply?:string;
    applyDesc?:string;
}



export async function backApply(data:BackApply) {
    return useRequestor.request<HttpMessage>({
        url:"alumni-apply/back",
        method:"POST",
        data
    })
}

export async function backApplyInfo(id:number) {
    return useRequestor.request<HttpResponse<BackApply>>({
        url:"alumni-apply/back/one/"+id,
        method:"GET",
    })
}

export async function proveApply(data:ProveApply) {
    return useRequestor.request<HttpMessage>({
        url:"alumni-apply/prove",
        method:"POST",
        data
    })
}

export async function proveApplyInfo(id:number) {
    return useRequestor.request<HttpResponse<ProveApply>>({
        url:"alumni-apply/prove/one/"+id,
        method:"GET",
    })
}

export async function applyRecordList() {
    return useRequestor.request<HttpResponse<BaseApplyInfo[]>>({
        url:"apply-record/list/1",
        method:"GET"
    })
}
