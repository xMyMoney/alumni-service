import {useRequestor} from '@utils/requestor/useRequestor'
import {ProveApply} from "@api/alumni-apply";
import {Activity} from "@api/activity";
export interface Donation{
    id?:number;
    donationId?:number;
    alumniId?:number;
    title?: string;
    cover?: string;
    content?: string;
    category?: number;
    beginTime?: Date;
    endTime?: Date;
    target?: number;
    donatedCount?: number;
    status?: number;
    money?: number;
    thing?: number;
    total?:number;
    remain?:number;
    rate?:number;
}

export interface DonationRank {
    avatar?:string;
    alumni?:string;
    count?:number;
    time?:string;
}

export interface DonationApply {
    id?:number;
    applyId?:number;
    alumniId?:number;
    username?:string;
    stuId?: string;
    phone?: string;
    donationId?:string;
    reason?:string;
    status?:number;
    reply?:string;
    applyDesc?:string;
}

export interface Options {
    text?:string;
    value?:number;
}

export async function getDonationList(searchKey?:string,searchType?:number) {
    return useRequestor.request<HttpResponse<Donation[]>>({
        url:'/donation/list',
        method:'GET',
        params:{searchKey,searchType}
    })
}

export async function getDonationDetails(id:number) {
    return useRequestor.request<HttpResponse<Donation>>({
        url:'/donation/one/'+id,
        method:'GET'
    })
}

export async function getLatestRank(id:number) {
    return useRequestor.request<HttpResponse<DonationRank[]>>({
        url:'donation/statistics/rank/latest/'+id,
        method:'GET'
    })
}

export async function getRank(id:number) {
    return useRequestor.request<HttpResponse<DonationRank[]>>({
        url:'donation/statistics/rank/'+id,
        method:'GET'
    })
}

export async function addDonationRecord(donationId?:number,alumniId?:number,money?:number) {
    return useRequestor.request<HttpMessage>({
        url:'donation-record',
        method:'POST',
        data:{donationId,alumniId,money}
    })
}

export async function applyDonation(data:DonationApply) {
    return useRequestor.request<HttpMessage>({
        url:'donation-apply/one',
        method:'POST',
        data
    })
}

export async function applyDonationInfo(id:number) {
    return useRequestor.request<HttpResponse<DonationApply>>({
        url:"donation-apply/one/"+id,
        method:"GET",
    })
}

export async function getOptions() {
    return useRequestor.request<HttpResponse<Options[]>>({
        url:'donation/options',
        method:'GET'
    })
}

export async function getDonated(id:number) {
    return useRequestor.request<HttpResponse<Donation[]>>({
        url:'donation-record/list/'+id,
        method:'GET'
    })
}
