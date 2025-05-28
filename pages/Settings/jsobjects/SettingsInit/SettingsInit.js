export default {
  requiredSettings: [
    { category: "s3", key: "bucket_meetings", value: "meeting-archive", description: "Основной бакет для хранения встреч" },
    { category: "api", key: "hook_transcription", value: "", description: "Webhook для результатов AssemblyAI" },
    { category: "llm", key: "llm_endpoint", value: "", description: "URL до LLM API для суммаризации" }
  ],

  async ensureSettings() {
    for (const setting of this.requiredSettings) {
      await insert_if_missing.run({
        category: setting.category,
        key: setting.key,
        value: setting.value,
        description: setting.description
      });
    }
    await get_settings.run();
  }
}
