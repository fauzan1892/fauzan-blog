import { URL_API, BASE_URL } from "../constants"
export default class ApiService {
  
  static async getInfo() {
    try {
      const response = await fetch(URL_API+"info");
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async getKat() {
    try {
      const response = await fetch(URL_API+"getkat");
      const responseJson = await response.json();
      return responseJson.kategori;
    } catch (error) {
      return error;
    }
  }

  static async getMeta() {
    try {
      const response = await fetch(URL_API+"getmeta");
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async getMetaKategori(slug) {
    try {
      const response = await fetch(URL_API+"getmeta/kategori/"+slug);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async getPost() {
    try {
      const response = await fetch(URL_API+"getberita?");
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }

  static async getPostId(slug) {
    try {
      const response = await fetch(URL_API+"getberita/"+slug);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
  
}