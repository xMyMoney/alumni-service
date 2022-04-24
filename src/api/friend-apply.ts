import {useRequestor} from "@utils/requestor/useRequestor";

export interface ApplyInfo {
    id?:number;
    applyId?:number;
    alumniId?:number;
    avatar?: string;
    gender?: number;
    username?:string;
    message?:string;
    status?:number;
}

export async function applyChange(data:ApplyInfo) {
    return useRequestor.request<HttpMessage>({
        url:"friend-apply",
        method:"POST",
        data
    })
}

export async function applyInfoList(alumniId:number) {
    return useRequestor.request<HttpResponse<ApplyInfo[]>>({
        url:"friend-apply/list/"+alumniId,
        method:"GET",
    })
}

export async function handleApply(data:ApplyInfo) {
    return useRequestor.request<HttpMessage>({
        url:"friend-apply/handle",
        method:"PUT",
        data
    })
}
