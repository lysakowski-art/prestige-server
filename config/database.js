module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://lysakowski-art:climbing@cluster0-shard-00-00.zllok.mongodb.net:27017,cluster0-shard-00-01.zllok.mongodb.net:27017,cluster0-shard-00-02.zllok.mongodb.net:27017/strapi?ssl=true&replicaSet=atlas-nn2ccr-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
