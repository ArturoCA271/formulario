import http from "../helpers/http-request";

class UserDataService {
    insertUser(endpoint, data){
        return http.post(`${endpoint}`, data);

    }
}

export default new UserDataService();