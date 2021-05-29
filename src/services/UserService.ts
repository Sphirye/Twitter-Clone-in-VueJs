import Store from "@/assets/Store.json"
import Vue from "vue"

export default class UserService {
    static findById(component: Vue, id: number) {
        // @ts-ignore
        component.user = Store.users.find(user => user.id == id)

    }



}