import { EventTarget } from 'cc';

// 拉霸的事件
const slotBarEventBus = new EventTarget();
// 登入介面的事件
const loginViewEventBus = new EventTarget();
// 登入介面的事件
const tipTextEventBus = new EventTarget();

export default {
    slotBarEventBus,
    loginViewEventBus,
    tipTextEventBus,
};
