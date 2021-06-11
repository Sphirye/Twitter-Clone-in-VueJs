import Store from "@/assets/Store.json"
import { Tweet } from "@/model/Tweet"
import Vue from "vue"
import JsonTool from "./tool/JsonTool"

export default class TweetService {

    static findTweetsByUserId(component: Vue, id: number) {
        let tweetList: Tweet[] = []

        Store.tweets.forEach(tweet => {
            if (tweet.userId == id) {
                tweetList.push(tweet)
            }
        })
        
        //@ts-ignorew
        component.tweets = tweetList
    }
}