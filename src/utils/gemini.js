import request from '@/utils/request';
// import axios from 'axios';

const postData = async (id_object, msg, images) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await request.post(`${import.meta.env.VITE_API_URL}api/chat/conversation`, {
                id_object: id_object,
                id_user: "24234234",
                messgaes: msg,
                images: JSON.stringify(images)
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            resolve(response.data)
        } catch (error) {
            reject(error)
        }
    })
}
export const sendMessageUtils = async (dataLook) => {
    return new Promise(async (resolve, reject) => {
        var id_object = dataLook.id_object
        var msg = dataLook.msg
        var images = dataLook.images
        var res = await postData(id_object, msg, images)
        if(res.status){
            var data = {
                status: true,
                msg_res: res.msg,
                id_object: id_object
            }
            resolve(data)
        }else{
            var data = {
                status: false
            }
            reject(data)
        }
    })
}