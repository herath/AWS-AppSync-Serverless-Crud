import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { id } = ctx.arguments;

  const request = {
    operation: 'DeleteItem',
    key: util.dynamodb.toMapValues({ id }),
  };

  return request;
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type);
  }
  return result;
}