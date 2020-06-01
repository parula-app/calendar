import Calendar from './calendar.js';
import HTTPAppServer from 'pia-app-http';

(async () => {
  try {
    let apps = [ Calendar ];
    await new HTTPAppServer(apps).start();
  } catch (ex) {
    console.error(ex);
  }
})();
