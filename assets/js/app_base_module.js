
async function  __data()
{
  __file='/data/delhi.json'
   get_data(__file)
      // console.log(typeof(data))
      // load_json_xhr(__file)
      // nsc(data)
    
    
  }
   async  function get_data(_url) 
{
  let response = await fetch(_url);
  let data = await response.json()
  nsc(data);
}
 async function nsc(data)
  {
    let params=({}, config);
     params.transit = data
    
      params.transit.legend = 0;
      params.transit.labels = 1;
      params.padding = [200, 100];
      params.animationDuration = 10000;
      app.views.main = new app.views.TransitShowView();
      app.views.main.render(params);
      
    
  }
  