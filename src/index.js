import { DateTriggerEvent } from './utils/dateTriggerEvent.js';
import { DateTriggerEventsHandler } from './utils/dateTriggerEventsHandler.js';
import { DAY_IN_MINUTES } from './utils/constants.js';

// EXPOSE TO BROWSER
if (typeof window !== 'undefined') {
    window['DateTriggerEventsHandler'] = DateTriggerEventsHandler;
    window['DateTriggerEvent'] = DateTriggerEvent;
    window['DAY_IN_MINUTES'] = DAY_IN_MINUTES;
}

export * from './presets/index.js';
export * from './utils/constants.js';
export * from './utils/dateTriggerEventsHandler.js';
export * from './utils/dateTriggerEvent.js';
