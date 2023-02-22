let objeto = document.querySelector("#objeto")

crearComponete();

function crearComponete(){

    objeto.innerHTML=`   <div class="card h-6" style="width: 18rem;">
    
    <div type="button" class="card-body">
      <p class="card-text"></p>
    </div>
  </div>`
}