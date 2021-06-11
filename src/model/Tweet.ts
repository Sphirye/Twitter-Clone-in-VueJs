import UserService from "@/services/UserService";
import { JsonObject, JsonProperty, Any } from "json2typescript";
import { User } from "./User";

@JsonObject("Tweet")

export class Tweet {
    @JsonProperty("userId", Number, true)
    userId?: number = undefined
    @JsonProperty("body", String, true)
    body?: string = undefined
    @JsonProperty("user", User, true)
    user?: string = undefined
}