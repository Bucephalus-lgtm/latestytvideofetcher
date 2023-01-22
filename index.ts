import axios from 'axios';
import schedule from 'node-schedule';
import { request } from 'graphql-request';

const predefinedQueries = ['cricket', 'football', 'India', 'Modi', 'BJP', 'Ram Mandir'];
const random = (mn, mx) => Math.floor(Math.random() * (mx - mn) + mn);
const getRandom = (arr) => arr[random(0, arr.length - 1)];
const apiKeys = ['AIzaSyBKXPOi2MNRfAaxn1Usm2pmE_RylZPRifE', 'AIzaSyBT98USDtFiJI66SqOj7qyRK2OF4YO44EM'];

const populateDB = async () => {
  try{
    const now = new Date().toISOString();
  const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${getRandom(predefinedQueries)}&part=snippet&maxResults=10&order=date&publishedAfter=${now}&key=${getRandom(apiKeys)}`);

  if (data?.items.length > 0) {
    data?.items.map(async d => {
      let description:string = d?.snippet?.description.replace(/'/g, "′");
      description = description.replace(/^"|"/g, "′");

      await request('https://ytbackend.bhargabnath.repl.co', `
        mutation {
          addVideo(videoNew:{
            videoId: "${d?.id?.videoId}",
            title: "${d?.snippet?.title ? d?.snippet?.title : 'no title'}",
            description: "${description}",
            channelId: "${d?.snippet?.channelId}",
            channelTitle: "${d?.snippet?.channelTitle}",
            thumbnailUrl: "${d?.snippet?.thumbnails?.high?.url ? d?.snippet?.thumbnails?.high?.url : 'https://i.ytimg.com/vi/9h0ROL1mqAI/hqdefault.jpg'}",
            publishedDateTime: "${d?.snippet?.publishedAt ? d?.snippet?.publishedAt: 'blank'}",
            created: "${d?.snippet?.publishTime ? d?.snippet?.publishTime : 'blank'}"
          }) {
            id
          }
        }`)
    });
  }
  } catch(err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    setTimeout(populateDB, 1000);
  }
}

schedule.scheduleJob("*/10 * * * * *", async () => {
  console.log('fetching youtube data every 10 seconds...');
  await populateDB();
});