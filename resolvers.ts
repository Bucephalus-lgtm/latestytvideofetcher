import Video from './models/Video'
import { Op } from 'sequelize'

const resolvers = {
  Query: {
    videos: async (_, { offset, limit }) => {
      const results = await Video.findAndCountAll({
        limit,
        offset,
      })

      return results.rows
    },
    countVideos: async () => await Video.count(),
    searchByTitle: async (_, { title }) => await Video.findAll({ where: { title: { [Op.like]: `%${title}%` } } }),
    searchByDescription: async (_, { description }) => await Video.findAll({ where: { description: { [Op.like]: `%${description}%` } } })
  },
  Mutation: {
    addVideo: async (_, { videoNew }) => {
      const totalVideos = await Video.count();
      console.log({ totalVideos });
      if (totalVideos > 500) {
        await Video.destroy({
          where: {},
          truncate: true
        });
      }
      return await Video.create(videoNew)
    }
  }
}

export default resolvers; 