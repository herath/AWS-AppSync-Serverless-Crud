/**
 * These are available AWS AppSync utilities that you can use in your request and response handler.
 * For more information about the utilities that are currently implemented, see
 * https://docs.aws.amazon.com/en_us/appsync/latest/devguide/resolver-reference-overview-js.html#utility-resolvers.
 */
import { util } from '@aws-appsync/utils';

/**
 * This function handles an incoming request, then converts it into a request
 * object for the selected data source operation.
 * You can find more code samples here: https://github.com/aws-samples/aws-appsync-resolver-samples.
 * @param ctx - Contextual information for your resolver invocation.
 * @returns - A data source request object.
 */
export function request(ctx) {
    const { id, ...values } = ctx.arguments;
    return dynamodbPutRequest({ key: {id}, values });
}

/**
 * This function handles the response from the data source.
 * You can find more code samples here: https://github.com/aws-samples/aws-appsync-resolver-samples.
 * @param ctx - Contextual information for your resolver invocation.
 * @returns - A result that is passed to the next function, or the response handler of the pipeline resolver.
 */
export function response(ctx) {
    return ctx.result;
}

/**
 * Helper function to create a new cat
 * @returns a PutItem request
 */
function dynamodbPutRequest({key, values}) {
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(values),
  };
}