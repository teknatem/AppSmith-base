export default {
  async ensureToken() {
    if (!appsmith.store.access_token) {
      const tokenResp = await getToken.run();
      if (tokenResp && tokenResp.access_token) {
        storeValue('access_token', tokenResp.access_token);
        return true;
      } else {
        showAlert("Ошибка авторизации", "error");
        return false;
      }
    }
    return true;
  },

  async refreshFiles() {
    // Проверка токена через отдельную функцию
    const hasToken = await this.ensureToken();
    if (!hasToken) return;

    await getFiles.run();
    // Таблица автоматически обновится, если ее данные связаны с getFiles.data
  },

  async uploadAndRefresh() {
    // Проверка токена через отдельную функцию
    const hasToken = await this.ensureToken();
    if (!hasToken) return;

    // Проверка выбора файла
    if (!FilePicker1.files.length) {
      showAlert("Выберите файл для загрузки", "warning");
      return;
    }
    try {
      await uploadFile.run();
      showAlert("Файл успешно загружен", "success");
      await getFiles.run();
    } catch (e) {
      showAlert("Ошибка загрузки файла", "error");
    }
  }
}
