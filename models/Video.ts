import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Video extends Model { };

Video.init({
  videoId: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  publishedDateTime: {
    type: DataTypes.STRING
  },
  thumbnailUrl: {
    type: DataTypes.STRING
  },
  created: {
    type: DataTypes.STRING
  },
  channelId: {
    type: DataTypes.STRING
  },
  channelTitle: {
    type: DataTypes.STRING
  }

}, {
  sequelize,
  modelName: 'video',
  timestamps: false
})

export default Video; 