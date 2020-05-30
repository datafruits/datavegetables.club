import classic from 'ember-classic-decorator';
import Service from '@ember/service';
import { Socket } from "phoenix";
import ENV from "datavegetables/config/environment";

@classic
export default class SocketService extends Service {
  init() {
    super.init(...arguments);
    this.set('socket', new Socket(ENV.CHAT_SOCKET_URL, {

      logger: function logger(/*kind, msg, data*/) {
        //console.log(kind + ": " + msg, data);
      }
    }));
    this.socket.connect();

    this.socket.onOpen(function (/*ev*/) {
      //return console.log("OPEN", ev);
    });
    this.socket.onError(function (/*ev*/) {
      //return console.log("ERROR", ev);
    });
    this.socket.onClose(function (/*e*/) {
      //return console.log("CLOSE", e);
    });
  }
}
