import {useRequestor} from '@utils/requestor/useRequestor'
export interface News {
    id?:number;
    title?:string;
    content?:string;
    createTime?:Date;
    readCount?:number;
}

export async function getList() {
    return useRequestor.request<HttpResponse<News[]>>({
        url:'news/list',
        method:'GET'
    })
}

export async function getOne(id:number) {
    return useRequestor.request<HttpResponse<News>>({
        url:'news/one/'+id,
        method:'GET'
    })
}
