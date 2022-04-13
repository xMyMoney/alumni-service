import {instance} from "@utils/request";
import axios from "axios";
import {useRequestor} from '@utils/requestor/useRequestor'
export interface Alumni{
    id?: number;
    avatar?: string;
    username?: string;
    gender?: number;
    nation?: string;
    birthday?: string;
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

// export interface AlumniList {
//     list: Alumni[];
//     total: number;
// }
export interface AlumniList {
    list: Alumni[];
    total: number;
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


