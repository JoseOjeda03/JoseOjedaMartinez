document.addEventListener('DOMContentLoaded',()=> {

    getserv();
	gettitle();
}); 

function getserv(){
    console.log("img");
    const urlSer = "coex.json";
    fetch(urlSer)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        nombres(data.empleados);
    });

    function nombres(imagenes){

        let html = "";

        const servicesImagenes=document.querySelector("#container");
        imagenes.forEach(foto => {
            const{nombre,direccion,}=foto;
			if( typeof direccion === String){
				html+= `
            
				<section>
				<h1>Nombres</h1>
				  <h2>${nombre}</h2>
				  <h1>Direccion</h1>
				  <h3>calle:${direccion}  </h3>
	
				</section>
				`;
			}else{
				html+= `
            
				<section>
				<h1>Nombres</h1>
				  <h2>${nombre}</h2>
				  <h1>Direccion</h1>
				  <h3>calle:${direccion.calle} carrera:${direccion.carrera} </h3>
	
				</section>
				`;

			}

				

          
            servicesImagenes.innerHTML= html;
        });



        

    }
    
}

function gettitle(){
	console.log("img");
    const urlSer = "coex.json";
    fetch(urlSer)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        hobbies(data.empleados);
		ultimos(data.empleados);
		Telefono(data.empleados);
    });
    function hobbies(imagenes){
		const hobbies = imagenes[0]["hobbies"];
		const hobbies2 = imagenes[imagenes.length-1]["hobbies"];
	

        let html = "";

        const servicesImagenes=document.querySelector("#hobi");
      
         
            html+= `
            
            <section>
			<h1>hobbies Primero </h1>
              <h2>${hobbies}</h2>
			  <h1>hobbies Ultimo </h1>
			  <h2>${hobbies2}</h2>

            </section>
            `;
            servicesImagenes.innerHTML= html;
       



        

    }
	function ultimos(data){
		const two = data[data.length-3];
		const tree = data[data.length-2];
		const utlimo = data[data.length-1];
		const arry=[two,tree,utlimo];
		console.log(arry);

        let html = "";

        const servicesImagenes=document.querySelector("#nombreEdad");
		arry.forEach(foto => {
            const{nombre,edad}=foto;
            html+= `
            
            <section>
			<h1>Nombres</h1>
              <h2>${nombre}</h2>
			  <h1>edad</h1>
              <h3>${edad} </h3>

            </section>
            `;
            servicesImagenes.innerHTML= html;
        });
         
		



        

    }
	function Telefono(data){

		let html = "";

		const servicesImagenes=document.querySelector("#telefono");
		data.forEach(foto => {
			const{nombre,telefonos}=foto;
			html+= `
			
			<section>
			<h2>Nombre</h2>
			  <h3>${nombre}</h2>
			
			  <p>${telefonos[0]}</p>
			</section>
			`;
			servicesImagenes.innerHTML= html;
		});



		

	}

    
}