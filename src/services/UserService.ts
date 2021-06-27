import UsersStore from "@/assets/data/Users.json"
import Vue from "vue"
import JsonTool from "./tool/JsonTool"
import { User } from "@/model/User"

export default class UserService {

    static async findById(component: Vue, id: number) {
        let response = UsersStore.find(user => user.id == id)
        // @ts-ignore
        component.user = JsonTool.deserializeObject(response, User)
    }

    static async findByUserTag(component: Vue, tag: string) {
        let response = UsersStore.find(user => user.tag.toLocaleLowerCase() == tag.toLocaleLowerCase())
        
        if (response != undefined) {
            let convertedResponse = JsonTool.deserializeObject(response, User)
            // @ts-ignore
            component.user = convertedResponse
        } else {
            // @ts-ignore
            component.user = undefined
        }
    }

}