import BROKER_URL from '@/constants/brokerUrl';
import * as StompJs from '@stomp/stompjs';

export const client = new StompJs.Client({
  brokerURL: BROKER_URL,
  connectHeaders: {
    login: 'user',
  },
  debug: (str) => console.log(str),
  reconnectDelay: 5000,
});
