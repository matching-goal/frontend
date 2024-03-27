import { matchingHandlers } from './matching';
import { userHandlers } from './user';

export const handlers = [...matchingHandlers, ...userHandlers];
