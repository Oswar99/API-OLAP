import axios from "axios";

export function getLaunches(offset:string): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`https://ll.thespacedevs.com/2.2.0/launch/?format=json&limit=10${offset}`)
            .then(result => resolve(result) )
            .catch(error => resolve( {data: {successed:false, message: error.message}} ) );
    });
};