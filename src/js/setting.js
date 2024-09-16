const auth = "/authentication";
const info = "/information";
const app = "/app";

let authenctic = false;

export const setAuth = (value) => {
    authenctic = value;
}

export const getAuth = () => {
    return authenctic
}
export const routes = {
    index : "/",
    Authentication : {
        login : auth + "/login",
        logout : auth + "/logout",
        register : auth + "/register"
    },
    Information : {
        about : info + "/about",
        instruction : info + "/instruction",
        feedback : info + "/feedback"
    },
    App : {
        index : app + "/list",
        quests : app + "/quest",
        hackerboard : app + "/hackerboard"
    }
};