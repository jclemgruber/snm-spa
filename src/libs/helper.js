class Helper {
  getListError (object) {
    var listError = []
    for (var propt in object) {
      if (object[propt] instanceof Array) {
        object[propt].forEach(function (item) {
          listError.push(item)
        })
      } else {
        listError.push(object[propt])
      }
    }
    return listError
  }
}

const helper = new Helper()

export default helper
