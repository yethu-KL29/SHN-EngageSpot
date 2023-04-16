import axios from 'axios';

export const sendNotification = (array,username) => {



  
    array.map((item,i) => {

    
    return axios.post(
        'https://api.engagespot.co/v3/notifications',
        {
            "notification": {
                "title":item.title,
                "message": item.description,
                "category": item.author,
              },
            recipients:username,
        },
        {
            headers: {
                'X-ENGAGESPOT-API-KEY': "70lqwpbeq4kicg0xszf4z9",
                'X-ENGAGESPOT-API-SECRET':"af76nif9i5hs8rb80grtl7bjjbafah9f4118c498d9ef0j",
            },
        }
    );
   
})
};

const URL = "http://localhost:8000"
export const authSignup = async (data) => {
    try {
        console.log("before signup")
        return await axios.post(`${URL}/signup`, data)
        console.log("after signup")
    } catch (error) {
        console.log("error on signup")

    }

}

export const dataCreate = async (data) => {
    try {
        
        return await axios.post(`${URL}/create`, data)
         
    } catch (error) {
        console.log("error on dataCreate")

    }

}

export const dataGet = async () => {
    try {
       return await axios.get(`${URL}/get`)
    } catch (error) {
        console.log("error on dataGet")

    }

}
export const getUser = async (setusername) => {
    try {
       let res = await axios.get(`${URL}/getuser`)
       setusername(res.data.usernames)
    } catch (error) {
        console.log("error on dataGet")

    }

}





