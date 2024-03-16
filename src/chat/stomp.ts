import BASE_API_URL from '@/constants/url';
import * as StompJs from '@stomp/stompjs';

export const client = new StompJs.Client({
  brokerURL: `ws://${BASE_API_URL}/ws`,
  connectHeaders: {
    login: 'user',
    password: 'password',
    accessToken: 'accessToken',
  },
  debug: (str) => console.log(str),
  reconnectDelay: 5000,
});
