export default {
  getCleanedData() {
    return GetTranscript.data.map(item => ({
      start: item.start,
      speaker: item.speaker,
      text: item.text
    }));
  },
	
  getTableRows() {
    return Array.isArray(GetTranscript.data)
      ? GetTranscript.data.map(item => ({
          start: item.start,
          speaker: item.speaker,
          text: item.text
        }))
      : [];
  }
	
}