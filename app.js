import axios from "axios";


const getUser = (userId) => {
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        resolve(data);
    });
};
const getPost = (userId) => {
    return new Promise(async(resolve,reject)=>{
        const {data} = await axios(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        resolve(data);
    });
};
async function getData(userId){
    try{
        const user = await getUser(userId);
        const post = await getPost(userId);
        console.log(user);
        console.log(post);
    }
    catch(e){
        console.log(e);
    }
    
}
export default getData;