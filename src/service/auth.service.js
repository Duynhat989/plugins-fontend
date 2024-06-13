import request from "../utils/request";
import { setAuth } from "../utils/request";
const API_URL = "api/user/login";

class AuthService {
   async login(user) {
    return await request
      .post(API_URL, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        const data = response.data
        if(data.status){
          localStorage.setItem("user", JSON.stringify(response.data));
          setAuth()
        }
        return response.data
      })
      .catch((e) => {
        // console.log(e);
        throw new Error(e);
        
      });
  }

  logout() {
    localStorage.removeItem("account_info");
    localStorage.removeItem("user");
  }
}

export default new AuthService();
