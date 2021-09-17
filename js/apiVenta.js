

var url = 'https://tucasahn.herokuapp.com'


// /products?category.name=${Alquiler}
fetch(url + '/products?category.name=Venta')
  .then(response => response.json())
  .then(data => mostrar_casas(data))
var contenedor_casas = document.getElementById("contenedor_casas");

function mostrar_casas(casas) {
  casas.forEach(element => {
    console.log(element);
   
    
    var div_cont = document.createElement("div");
    div_cont.classList = "col-md-6 col-lg-4 mb-4"

    var div_second = document.createElement("div");
    div_second.classList = "property-entry h-100"

    var a_firs = document.createElement("a");
    a_firs.classList = "property-thumbnail"
    a_firs.href = `/property-details.html?id=${element.id}`


    var one_offer = document.createElement("div");
    one_offer.classList = "offer-type-wrap"

    var span = document.createElement("SPAN");
    span.classList = "offer-type bg-danger"
    var tspana = document.createTextNode("Venta"); // Create a text element 
    span.appendChild(tspana);

    var oImg = document.createElement("img");
    oImg.setAttribute('src', `${element.main_img.url}`);
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '100%');
    oImg.setAttribute('width', '100%');

    var two_div = document.createElement("div");
    two_div.classList = "p-4 property-body"


    var a_two = document.createElement("a");
    a_two.classList = "property-title "

    a_two.href = `/property-details.html?id=${element.id}`
    a_two.classList="text-dark font-weight-normal"

    var h = document.createElement("H2"); // Create the H1 element
    h.classList = "property-title text-secondary "



    var t = document.createTextNode(element.title); // Create a text element 
    
    h.appendChild(t); // Append the text node to the H1 element 

    var span1 = document.createElement("SPAN");
    span1.classList = "property-location d-block mb-3"

    var spanub = document.createElement("SPAN");
    spanub.classList = "property-icon icon-room"
    var tspan = document.createTextNode(element.Ubicacion); // Create a text element 
    span1.appendChild(spanub);  // Append the text node to the H1 element 
    span1.appendChild(tspan);  // Append the text node to the H1 element 

    var strong = document.createElement("STRONG");
    strong.classList = "property-price text-primary mb-3 d-block text-success"
    var tstrong = document.createTextNode(`${new Intl.NumberFormat("es-MX", {style: "currency", currency: "HNL"}).format(element.price)}`); // Create a text element 

    strong.appendChild(tstrong); // Append the text node to the H1 element 

    var ul = document.createElement('ul');
    ul.classList = "property-specs-wrap mb-3 mb-lg-0"

    var li = document.createElement('li');
    li.innerHTML = `<span class="property-specs">Dormitorio</span> <span class="property-specs-number">${element.bedroom} <sup>+</sup></span>`;

    var li2 = document.createElement('li');
    li2.innerHTML = ` <span class="property-specs">Baños</span>
<span class="property-specs-number">${element.bathroom}</span>
`;

    var li3 = document.createElement('li');
    li3.innerHTML = ` <span class="property-specs">Garaje</span>
<span class="property-specs-number">${element.garaje}</span>


`;


    contenedor_casas.appendChild(div_cont); // Append the text node to the H1 element .appendChild(h); // Append the text node to the H1 element 
    div_cont.appendChild(div_second);
    div_second.appendChild(a_firs);

    a_firs.appendChild(one_offer);
    one_offer.appendChild(span);
    a_firs.appendChild(oImg);
    div_second.appendChild(two_div);
    two_div.appendChild(a_two);

    a_two.appendChild(t);

    two_div.appendChild(h);
    two_div.appendChild(span1);
    two_div.appendChild(strong);
    two_div.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);



  });



  // pasar a  js des de 

  {/* <
<ul class="property-specs-wrap mb-3 mb-lg-0">
  <li>
    <span class="property-specs">Beds</span>
    <span class="property-specs-number">2 <sup>+</sup></span>

  </li>
  <li>
    <span class="property-specs">Baths</span>
    <span class="property-specs-number">2</span>

  </li>
  <li>
    <span class="property-specs">SQ FT</span>
    <span class="property-specs-number">7,000</span>

  </li>
</ul> */}
  // 1






}