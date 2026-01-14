[
    (()=>{
      let before = {}
      let after = {}
      cache = true
      while(JSON.stringify(before) == JSON.stringify(after)) {
        before = (() => {try{
          return testF()
        }catch(e){cache = undefined;throw e}})()
        after = (() => {try{
          return testF()
        }catch(e){cache = undefined;throw e}})()
      }
      cache = false
    }),(()=>{
      let key = tags[test[0]]||test[0]
      results[key] ??= {}
      results[key].Cache = cache
    }),(()=>{
      delete cache
    })
  ]
