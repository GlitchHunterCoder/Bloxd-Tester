[
    (()=>{
      array = [1];
      for(let i=0;i<12;i++)array=array.concat(array);
      while(true){}
    }),
    (()=>{
      let pre_computation_count = 1000;
      globalThis.interruption_unit = pre_computation_count*3+1;
      testF()
      while(pre_computation_count--)array.copyWithin(0,1);
      while(true) {
          interruption_unit++;
      }
    }),
    (()=>{
      let key = tags[test[0]]||test[0]
      let base = results.BASE?.IU ?? 2*interruption_unit
      results[key] ??= {}
      results[key].IU=base-interruption_unit
    }),
    (()=>{
      delete globalThis.interruption_unit
      delete globalThis.array
    })
  ]
