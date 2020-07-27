const { default: HomeScreen } = require("./ClientScreen/HomeScreen");
const { default: ProfileScreen } = require("./ClientScreen/ProfileScreen");
const { default: NewPostScreen } = require("./ClientScreen/NewPostScreen");
const { default: NotificationScreen } = require("./ClientScreen/NotificationScreen");
const { default: SettingScreen } = require("./ClientScreen/SettingScreen");

const APP_SCREEN = {
    HOME_SCREEN: HomeScreen,
    PROFILE_SCREEN: ProfileScreen,
    NEW_POST_SCREEN: NewPostScreen,
    NOTIFICATION_SCREEN: NotificationScreen,
    SETTING_SCREEN: SettingScreen,
}

export default APP_SCREEN;