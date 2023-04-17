# AWS-AppSync-Serverless-Crud
This demonstrates a AWS AppSync CRUD Sample using Serverless Framework and JS Resolvers.

## Application
This application creates a sample CAT API service on AWS Appsync. We use JavaScrip Resolvers to connect to AWS DynamoDB table which is our data source. To manage the source code, create resources and host the application in AWS Appsync we are using a AWS recommended serverless framework plugin. You can find useful comments in the serverless yml file to understand the implementation.

## Pre-Requisites

* AWS Account and AWS CLI configuration on your local development environment.
* Basic knowledge on AWS, AWS DynamoDB, Nodejs, Serverless Framework.
* VS Code or any other code editor

## Minimum requirements

* Nodejs v8 or higher - Tested on v16.9.0
* Serverless v1.30.0 or higher. - Tested on v3.24.1

### Installation

- Install Serverless using ``` npm install -g serverless ``` in your local environment
- Clone the repository
- cd into your folder
- install dependencies using ``` npm install ```

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Testing

1. Open to AWS Console and navigate to AWS Appsync.
2. Navigate to APIs section using left navigation.
3. choose "my-cat-api"
4. Navigate to queries section.
5. If you don't see the built in query builder, go to the setting section and crete an API key. then save.
6. You can play around with sample queries provided in "sample queries for testing" file.
7. Enjoy!

### Cleanup

In order to remove resources and the application, you need to run the following command:

```
$ serverless remove
```

### ToDo

Add tests and expand the functionalities to demonstrates other features of AppSync.