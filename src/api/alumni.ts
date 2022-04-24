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

export interface RegisterParam {
    username?:string;

}

export interface LoginParam {
    stuId?:string;
    password?:string;
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


