import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { limit = 20, nextToken } = ctx.arguments;
  return { operation: 'Scan', limit, nextToken };
}

export function response(ctx) {
  const { items: cats = [], nextToken } = ctx.result;
  return { cats, nextToken };
}