class Plugin {
  constructor(serverless) {
    this.configurationVariablesSources = {
      awsdesc: {
        async resolve({ address }) {
          const [service, describe, key, id, l1, l2] = address.split('.');
          // console.log({
          //   service, describe, key, id, l1, l2,
          // });

          const data = await serverless.getProvider('aws').request(service, describe, {
            [key]: id,
          });
          // console.log('awsdesc: ', data);
          if (l2) {
            return {
              value: data[l1][l2],
            };
          }
          return {
            value: data[l1],
          };
        },
      },
    };
  }
}

module.exports = Plugin;
