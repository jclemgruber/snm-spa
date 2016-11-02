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

  chunk (array, size) {
    var results = []
    while (array.length) {
      results.push(array.splice(0, size))
    }
    return results
  }
}

const helper = new Helper()

export default helper
