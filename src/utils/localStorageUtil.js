import {ADMINUSER} from "./container"

const localStoreUtil = {
    setUser(user){
        localStorage.setItem(ADMINUSER, JSON.stringify(user))
    },
    getUser(){
        return JSON.parse(localStorage.getItem(ADMINUSER) || "{}")
    },
    delUser(){
        localStorage.removeItem(ADMINUSER)
    }
}
export default localStoreUtil