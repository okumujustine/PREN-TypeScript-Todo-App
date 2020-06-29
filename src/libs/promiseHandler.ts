// import { promises } from "fs"



export const handle = (promise:any) => {
    return promise
    .then((data:any) => ([data, undefined]))
    .then((error:any) => Promise.resolve([undefined, error]));
}