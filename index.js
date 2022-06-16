class Plugin {
  constructor(serverless) {
    this.configurationVariablesSources = {
      awsdesc: {
        async resolve({ address }) {
          const [service, describe, key, id, l1, l2] = address.split('.');
          // console.log('service: ', service);
          // console.log('describe: ', describe);
          // console.log('key: ', key);
          // console.log('id: ', id);
          // console.log('l1: ', l1);
          // console.log('l2: ', l2);
          // const data = await serverless.getProvider('aws').request('DynamoDB', 'describeTable', {
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
