export default {
  departments: () => get_id_name.data,

  getOptions(entity) {
    return this[entity]().map(item => ({
      label: item.name,
      value: item.id
    }));
  },

  getNameById(entity, id) {
    const match = this[entity]().find(item => item.id === id);
    return match ? match.name : "";
  },

  getIdByName(entity, name) {
    const match = this[entity]().find(item => item.name === name);
    return match ? match.id : "";
  }
}