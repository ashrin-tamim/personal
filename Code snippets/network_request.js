const data = {

    Facets : [],
PageId: "{dd7cc8c8-08d4-42d9-bff9-a00dd24c9763}"
    
};

fetch('https://van-showroom.mercedes-benz.co.uk/api/v1/vehiclesearch/getfilters', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });



////////////////////////////////

$.ajax({
  url: "https://www.thehomet.com/collections/new-kids?page=2",
  success: function(response){
    var replacedData = new DOMParser().parseFromString(response, 'text/html');
    element = replacedData.querySelector("#facet-main")
    console.log(element);
  }
});

fetch(location.pathname + '.js').then(res => res.json()).then(json => console.log(json))

