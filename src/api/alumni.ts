import {instance} from "@utils/request";
import {useRequestor} from '@utils/requestor/useRequestor'
export interface Alumni{
    id?: number;
    avatar?: string;
    username?: string;
    password?:string;
    gender?: number;
    nation?: string;
    birthday?: string|Date;
    address?: string;
    phone?: string;
    company?: string;
    jor? :string;
    stuId?: number;
    education?: number;
    academy?: string;
    major?: string;
    classes?: string;
    beginYear?: string;
    endYear?: string;
    star?: number;
    status?: number;
    loginTime?: Date;
    isFriend?:boolean;
}

export interface AlumniParam{
    alumniId?: number;
    searchKey?: string;
    searchType?: number;
    sortType?: number;
    current?: number;
    pageSize?: number;
}

export interface AlumniList {
    list: Alumni[];
    total: number;
}

export interface LoginRes {
    alumni?:Alumni;
    token?:string;
}

export interface LoginParam {
    stuId?:string;
    password?:string;
}

export interface AlumniStatistics {
    donationCount?:number;
    activityCount?:number;
    applyCount?:number;
}

export async function getUserInfo() {
    return useRequestor.request<HttpResponse<Alumni>>({
        url:'alumni/info',
        method:'GET',
    })
}

export async function getStatistics(id:number){
    return useRequestor.request<HttpResponse<AlumniStatistics>>({
        url:'alumni/statistics/'+id,
        method:'GET'
    })
}

export interface FileVo {
    fileName?:string;
    fileUrl?:string;
}

export async function uploadImg(file:File) {
    const formData = new FormData();
    formData.append('file',file)
    return useRequestor.request<HttpResponse<FileVo>>({
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url:'file/upload',
        method:'POST',
        data:formData
    })
}

export async function register(data:Alumni) {
    return useRequestor.request<HttpMessage>({
        url:'/register',
        method:'POST',
        data
    })
}

export async function registerInfo(id:string) {
    return useRequestor.request<HttpResponse<Alumni>>({
        url:'/register/info/'+id,
        method:'GET',
    })
}

export async function updateRegister(data:Alumni) {
    return useRequestor.request<HttpMessage>({
        url:'/register',
        method:'PUT',
        data
    })
}

export async function login(data:LoginParam) {
    return useRequestor.request<HttpResponse<LoginRes>>({
        url:'/login',
        method:'POST',
        data
    })
}

export async function getMyAlumniList(id:number) {
    return instance({
        url: "alumni-friend/list/"+id,
        method: "GET",
    });
}

export async function getAlumniCardList(params:AlumniParam) {
    // return instance({
    //     url: "alumni/list",
    //     method: "GET",
    //     params:param
    // });
    // return axios.get<HttpResponse<AlumniList>>('alumni/list',{params:param})
    return useRequestor.request<HttpResponse<AlumniList>>({
        url:"alumni/list",
        params
    })
}


