// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'development'){
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    }
  } else {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: env('DATABASE_HOST', 'ec2-107-20-15-85.compute-1.amazonaws.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'datapkgf82kmc9'),
            username: env('DATABASE_USERNAME', 'zqoghudomzjjae'),
            password: env('DATABASE_PASSWORD', '80f027a1111544dcecd2367750d210e2ec83a410b83af4d482d45307f1c654fc'),
            schema: 'public',
          },
          options: {},
        },
      },
    }
  }
};
