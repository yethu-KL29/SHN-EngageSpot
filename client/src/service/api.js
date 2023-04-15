import axios from 'axios';

export const sendNotification = () => {
    return axios.post(
        'https://api.engagespot.co/v3/notifications',
        {
            "notification": {
                "title": "Anand commented on your photo",
                "message": "Hey Steve, you're looking cool 😎. Who took this photo?",
                "url": "https://your-app.com/photos/17293739",
                "category": "comment"
              },
            recipients: ["yethu@kichu"],
        },
        {
            headers: {
                'X-ENGAGESPOT-API-KEY': "70lqwpbeq4kicg0xszf4z9",
                'X-ENGAGESPOT-API-SECRET':"af76nif9i5hs8rb80grtl7bjjbafah9f4118c498d9ef0j",
            },
        }
    );
};



