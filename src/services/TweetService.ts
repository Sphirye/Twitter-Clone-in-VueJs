import Tweets from "@/assets/data/Tweets.json"
import { Tweet } from "@/model/Tweet"
import Vue from "vue"
import JsonTool from "./tool/JsonTool"

export default class TweetService {

    static findTweetsByUserId(component: Vue, id: number) {
        let tweetList: Tweet[] = []

        Tweets.forEach(tweet => {
            if (tweet.userId == id) {
                tweetList.push(tweet)
            }
        })
        
        //@ts-ignore
        component.tweets = tweetList
    }
}