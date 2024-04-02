import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class SummifyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    
    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${SummifyApi.token}` };
    const params = method === "get" ? data : {};
    console.debug("API Call:", endpoint, data, method, headers);

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

// Get a single user by id

static async getUserById(userId) {
    let res = await this.request(`users/id?=${userId}`);
    return res.user;
  }
// Get a single user by username

static async getUserByUsername(username) {
    let res = await this.request(`users/?username=${username}`);
    return res.user;
  }


  static async registerUser(formData) {
    let res = await this.request(`auth/register`,formData,'post');
    return res.token;
  }

  static async loginUser(formData) {
    let res = await this.request(`auth/login`,formData,'post');
    return res.token;
  }

}

  export default SummifyApi;