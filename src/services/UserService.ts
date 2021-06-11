import Store from "@/assets/Store.json"
import Vue from "vue"
import JsonTool from "./tool/JsonTool"
import { User } from "@/model/User"

export default class UserService {

    static findyUserTag(component: Vue, tag: string) {
        let response = Store.users.find(user => user.tag == tag)
        //@ts-ignore
        component.user = JsonTool.deserializeObject(response, User)
    }

    static findById(component: Vue, id: number) {
        let response = Store.users.find(user => user.id == id)
        // @ts-ignore
        component.user = JsonTool.deserializeObject(response, User)
    }

    static findByUserTag(component: Vue, tag: string) {
        let response = Store.users.find(user => user.tag == tag)
        // @ts-ignore
        component.user = JsonTool.deserializeObject(response, User)
    }

}