[
    (()=>{
      mem = [""];
      memInx = 0;
      memory = () => {
        let low = 0, high = 1000000, a;
        while (low + 1 < high) {
          const mid = (low + high) >> 1;
          try {
            a = "a".repeat(mid);
            low = mid;
          } catch (e) {
            high = mid;
          }
        }
        mem[memInx] = low; // raw capacity
        memInx++;
      };
      key = tags[test[0]] || test[0];
      results[key] ??= {};
      // run once to establish baseline
      memory();
      BASE = mem[0];   // freeze baseline here
    }),(()=>{
      eval("memory();testF();")
    }),(()=>{
      results[key].mem = mem.map(v => BASE - v);
      results[key].mem = results[key].mem.shift()
    }),(()=>{
      delete memory;delete key;delete mem; delete memInx;delete BASE
    })
  ]
