export default {
  selectSetting(setting) {
    storeValue("editing_id", setting.id);
    inp_category.setValue(setting.category);
    inp_key.setValue(setting.key);
    inp_value.setValue(setting.value);
    inp_description.setValue(setting.description);
		//get_setting_history.run(); // запускаем обновление dropdown'а
		Logger.log("SettingsEditor", "inp_key.text", inp_key.text, "info")
		setTimeout(() => get_setting_history.run(), 100);
  }
}


