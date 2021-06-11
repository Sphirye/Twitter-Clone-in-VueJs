import { JsonObject, JsonProperty, Any } from "json2typescript";

@JsonObject("User")

export class User {
    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("username", String, true)
    username?: string = undefined
    @JsonProperty("tag", String, true)
    tag?: string = undefined
    @JsonProperty("bio", String, true)
    bio?: string = undefined
}