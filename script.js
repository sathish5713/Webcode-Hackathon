var h0=document.createElement("div");
h0.style.textAlign="center";
var h1=document.createElement("input");
h1.setAttribute("type","text");
h1.setAttribute("id","items");
var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("value", "search");
button.innerHTML="Search";
button.addEventListener("click",foo);
h0.append(h1,button);
document.body.append(h0);
var res=fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
res.then((data)=>data.json())
.then((data1)=>foo(data1));
function foo(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].name);
        var div=document.createElement("div");
        div.style.color="blue";
        div.style.fontSize="30px";
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Brand</h5>
          <h6 class="card-subtitle mb-2 text-muted">${arr[i].brand}</h6>
          <h5 class="card-title">Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">${arr[i].name}</h6>
          <h5 class="card-title">Price</h5>
          <h6 class="card-subtitle mb-2 text-muted">${arr[i].price}</h6>
          <h5 class="card-title">Discription</h5>
          <p class="card-text">${arr[i].description}</p>
          <a href="${arr[i].image_link}" class="card-link">Image</a>
          <a href="${arr[i].product_link}" class="card-link">Click to buy</a>
        </div>
      </div>`;
 document.body.append(div);
    }
}
