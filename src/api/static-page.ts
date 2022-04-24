import {useRequestor} from '@utils/requestor/useRequestor'
export interface StaticPage {
    content?:string;
    createTime?:Date;
}

export async function getStaticPage(pageType:number) {
    return useRequestor.request<HttpResponse<StaticPage>>({
        url:'/static-page/one/'+pageType,
        method:'GET'
    })
}

export async function getSlideshow() {
    return useRequestor.request<HttpResponse<string[]>>({
        url:'/static-page/slideshow',
        method:'GET'
    })
}
