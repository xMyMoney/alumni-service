import {useRequestor} from '@utils/requestor/useRequestor'
export interface Notice {
    id?:number;
    title?:string;
    content?:string;
    createTime?:Date;
    count?:number;
}

export async function getList() {
    return useRequestor.request<HttpResponse<Notice[]>>({
        url:'notice/list',
        method:'GET'
    })
}

export async function getOne(id:number) {
    return useRequestor.request<HttpResponse<Notice>>({
        url:'notice/one/'+id,
        method:'GET'
    })
}

export async function getFocus() {
    return useRequestor.request<HttpResponse<Notice>>({
        url:'notice/one/hot',
        method:'GET'
    })
}
