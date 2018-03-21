
import {get} from './network'
module.exports = {
    getUserInfo: () => {
        return new Promise((resolve,reject) => {
            let token = localStorage.getItem('token');
            if(token){
                get('/user/info')
                .then(data => {
                    resolve(data);
                })
            }else{
                reject(new Error("没有token"))
            }
        })
    }
}