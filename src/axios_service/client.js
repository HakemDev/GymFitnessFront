
import axios from "axios";

let url_get_post_clients="http://localhost:1426/client";
class client{
    // 15 axios basically provide a get method 
    getclients(){
        //15 we will returning w response of get method
        return axios.get(url_get_post_clients);
    }
    //24 post data of new client to database
    createClient(client){
        return axios.post(url_get_post_clients,client)
    }
    getCleintById(id){
        return axios.get(url_get_post_clients+'/'+id);

    }
    //30
    updateClient(client,id){
        return axios.put(url_get_post_clients+'/'+id,client);
    }

    deleteClient(id){
        return axios.delete(url_get_post_clients+'/'+id);
    }
    searchClientByName(name){
        return axios.get(url_get_post_clients+'/search/?name='+name);
        //http://localhost:1426/client/search/?name=hakem
    }
    setailClient(id){
        return axios.get(url_get_post_clients+'/'+id);
    }
}
//15 export this class object not the class
export default new client();