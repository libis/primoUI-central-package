export let dbSearchHttpCallInterceptor =  [() => {
  var httpCallInterceptor = {
    request: function(config){
      if (config.url.includes('pnxs') && !config.url.includes('delivery') && config.params) {
        //console.log(config);
        if(config.params.databases){
          config.params.inst = 'KUL';
          config.params.vid = 'KULeuven';
        }
        return config;
      }
      return config;
    }
  }
  return httpCallInterceptor;
}];
