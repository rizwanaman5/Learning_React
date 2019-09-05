var capstart;
      var gap;
      let arr1 = arr.map((info) => {
        info.campaigns.map((date) => {
          capstart = new Date(date.start_date.split("-").reverse().join("-"));
          gap = now.valueOf() - capstart.valueOf() / (1000 * 3600 * 24);
        })
      })