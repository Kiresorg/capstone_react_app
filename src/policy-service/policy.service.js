import http from "../http-common";

class PolicyDataService {
    getAll() {
        return http.get("/policies");
    }

    get(id) {
        return http.get(`/policies/${id}`);
    }

    create(data) {
        return http.post("/policies", data);
    }
}

export default new PolicyDataService();