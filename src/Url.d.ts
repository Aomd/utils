declare function urlToObject(getUrl:string): object;
declare function base64toBlob(base64:string): Blob;
declare function objectToUrl(obj:object,path:string): string;


export {
    urlToObject,
    base64toBlob,
    objectToUrl
}