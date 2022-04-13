declare type HttpMessage={
    code:number
    msg:string
}

declare type HttpResponse<T>=HttpMessage &{
    data:T
}
