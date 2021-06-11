import { JsonConvert } from "json2typescript"

export default class JsonTool {

    static readonly jsonConvert: JsonConvert = new JsonConvert;

    static deserializeObject(object: any, model: any) {
        return this.jsonConvert.deserializeObject(object, model)
    }

}