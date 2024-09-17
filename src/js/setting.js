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
        hackerboard : app + "/hackerboard",
        machine : app + "/machine/"
    }
};

export const  difficulty = (number) => {
    number = Number(number)

    if(number >= 9){
        return "Insane"
    }
    else if(number >= 7){
        return "Hard"
    }
    else if(number >= 5){
        return "Middle"
    }
    else if(number >= 3){
        return "Easy"
    }
    else{
        return "Very Easy"
    }
}