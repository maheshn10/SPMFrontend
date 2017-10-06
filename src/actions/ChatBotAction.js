import axios from 'axios';
// import jsonp from 'jsonp';
import { ChatBotType, ErrorType } from './ActionType';
import { ChatBotUrl } from './ActionURL';
import { Configs } from './ActionConfigs';

export function sendChat(chatbotHistory, chatMessage) {
  return function (dispatch) {
    dispatch({ type: ChatBotType.INCHAT, chatbotHistory });
    axios
      .get(`${ChatBotUrl.CHATBOT + chatMessage}&access_token=UZHHMHRZJENDJDY3GNCBFXBJYVGWXMLB`, Configs.CHATBOTCONFIG)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        dispatch({ type: ErrorType.ERROR_LOG, mesage: err.message });
      });
    // jsonp(`${ChatBotUrl.CHATBOT + chatMessage}&access_token=UZHHMHRZJENDJDY3GNCBFXBJYVGWXMLB`, null, (err, data) => {
    //   if (err) {
    //     console.error(err.message);
    //   } else {
    //     console.log(data);
    //   }
    // });
  };
}
