import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { id, ...values } = ctx.args;
  return dynamodbUpdateRequest({ key: {id}, values });
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type);
  }
  return result;
}

/**
 * Helper function to update an item in DynamoDB
 */
function dynamodbUpdateRequest({ key, values }) {
  const sets = [];
  const removes = [];
  const expressionNames = {};
  const expValues = {};

  // iterate through the entries (key,value) of the values to be updated
  for (const [k, value] of Object.entries(values)) {
    // set the name
    expressionNames[`#${k}`] = k;
    if ((value && value.length) || value > 0) {
      // if the value exists, add it to the list to be SET
      sets.push(`#${k} = :${k}`);
      expValues[`:${k}`] = value;
    } else {
      // if not, markt it to be REMOVEd
      removes.push(`#${k}`);
    }
  }

  let expression = sets.length ? `SET ${sets.join(', ')}` : '';
  expression += removes.length ? ` REMOVE ${removes.join(', ')}` : '';

  return {
    operation: 'UpdateItem',
    key: util.dynamodb.toMapValues(key),
    update: {
      expression,
      expressionNames,
      expressionValues: util.dynamodb.toMapValues(expValues),
    },
  };
}