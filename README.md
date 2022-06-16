# serverless-aws-describe-plugin

Serverless custom variable source plugin to describe AWS resources. It describes a given resource and extracts variables. In other words, it provides access to AWS Requests like the following examples.

```
serverless.getProvider('aws').request('EventBridge', 'describeEventBus', { Name: 'default'}).Arn

serverless.getProvider('aws').request('DynamoDB', 'describeTable', { TableName: 't1'}).Table.TableArn
```

## Install

```
npm install serverless-aws-describe-plugin --save-dev
```

## serverless.yml

```
plugins:
  - serverless-aws-describe-plugin

provider:
  environment:
    BUS_ARN: ${awsdesc:EventBridge.describeEventBus.Name.default.Arn}
    ENTITY_TABLE_NAME: ${self:service}-${opt:stage}-entities
    TABLE_ARN: ${awsdesc:DynamoDB.describeTable.TableName.${self:provider.environment.ENTITY_TABLE_NAME}.Table.TableArn}
```
