import { gql } from "apollo-server"
const typeDefs = gql`
 type Query {
    videos(offset:Int!, limit: Int!):[Video]
    countVideos: Int
    video(id:ID!):Video
    searchByTitle(title:String!):[Video]
    searchByDescription(description:String!):[Video]
 }
 type Video{
     id:ID!
     videoId:String
     title:String
     description:String
     publishedDateTime:String
     thumbnailUrl:String
     created:String
     channelId:String
     channelTitle:String
 }
 type Mutation{
     addVideo(videoNew:VideoInput!):Video
 }
 input VideoInput{
     videoId:String
     title:String
     description:String
     publishedDateTime:String
     thumbnailUrl:String
     created:String
     channelId:String
     channelTitle:String
 }
`
export default typeDefs