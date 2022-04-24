import {useRequestor} from '@utils/requestor/useRequestor'
export interface Activity{
    id?:number;
    title?: string;
    cover?: string;
    content?: string;
    category?: number;
    beginTime?: Date;
    endTime?: Date;
    place?:string;
    quota?:number;
    joinCount?: number;
    status?: number;
    join?:boolean;
}

export async function getList(searchKey?:string,searchType?:number) {
    return useRequestor.request<HttpResponse<Activity[]>>({
        url:'/activity/list',
        method:'GET',
        params:{searchKey,searchType}
    })
}

export async function getOne(activityId:number,alumniId:number) {
    return useRequestor.request<HttpResponse<Activity>>({
        url:'/activity/one',
        method:'GET',
        params:{activityId,alumniId}
    })
}

export async function joinActivity(activityId?:number,alumniId?:number) {
    return useRequestor.request<HttpMessage>({
        url:'/activity-record/one',
        method:'POST'
    })
}

export async function getJoined(id:number) {
    return useRequestor.request<HttpResponse<Activity[]>>({
        url:'activity-record/list/'+id,
        method:'GET'
    })
}
