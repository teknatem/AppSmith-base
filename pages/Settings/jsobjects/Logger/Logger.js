export default {
  log(module, object, comment, level = "info") {
    return insert_system_log.run({
      module: module,
      object: object,
      comment: comment,
      level: level
    });
  }
}
