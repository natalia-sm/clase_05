//FETCH = XHR + PROMESAS

let url = 'https://jsonplaceholder.typicode.com/'

// fetch(`${url}users`) //retorna una promesa
// .then(data => console.log(data))
// .catch(e => console.log(e));



// let usuarios = fetch(`${url}users`);

// usuarios
// .then(data => console.log(data.json()))
// .then(data =>fetch(`${url}posts?userId=${data[6].id}`))
// .then(data =>data.json())
// .then(data =>Promise.all( data.map(post=>fetch(`${url}comments?postId=$postId=${post.id}`)) )
// .then(data => Promise.all(data.map(comment=>comment.json())))
// .then(data => console.log(data))
// .catch(e => console.log(e))


//ASYNC AWAIT

async function foo(){
    //fetch().then().catch();
    let pedido = await fetch();
    console.log(pedido);
}
console.log(foo)


async function obtenerComentarios(){
    let usuarios_response = await fetch(`${url}users`);
    let usuarios = await usuarios_response.json();
    console.log(usuarios)
}
obtenerComentarios();



/*****************************************clase_x */

function ajax(params){
	let xhr = new XMLHttpRequest
	xhr.open(params.metodo,params.url)
	xhr.addEventListener("load",function(){
		if (xhr.status == 200) {
			params.success(JSON.parse(xhr.response))
		}
	})
	xhr.send()
}
/*
ajax({
	metodo : "GET",
	url : "url1",
	success : function(data){
		ajax({
			metodo : "GET",
			url : "url2"+data,
			success : function(data){
				ajax({
					metodo : "GET",
					url : "url3"+data,
					success : function(data){
						
					}
				})
			}
		})		
	}
})
*/
/*
ajax({
	metodo : "GET",
	url : "url1"
})
.done(data=>{
	ajax({
		metodo : "GET",
		url : "url1"
	})
})
.done(data=>{

})
.fail()
*/

//XHR + Promise
/*
let url = "https://jsonplaceholder.typicode.com/"
let usuarios = fetch(`${url}users`)
usuarios
.then(data=>data.json())
.then(data=>fetch(`${url}posts?userId=${data[6].id}`))
.then(data=>data.json())
.then(data=>Promise.all(data.map(post=>fetch(`${url}comments?postId=${post.id}`))))
.then(data=>Promise.all(data.map(comment=>comment.json())))
.then(data=>console.log(data))
.catch(err=>console.error(err))
*/

/*let imagen = fetch(`img.jpg`) //=> Promise

imagen
.then(data=>data.blob())
.then(data=>{
	let url = URL.createObjectURL(data)
	let img = document.createElement("img")
	img.src = url
	document.body.appendChild(img)
})
.catch(error=>console.error(error))
*/

//ASYNC/AWAIT

async function obtenerComentarios(){
	let usuarios_response = await fetch(`${url}users`)
	let usuarios = await usuarios_response.json()
	let usuario_id = usuarios[7].id
	let posts_response = await fetch (`${url}posts?userId=${usuario_id}`)
	let posts = await posts_response.json()
	
	// let comments_response = await Promise.all(posts.map(
    //     async post=> {
    //         let fetch_comment = await fetch(`${url}comments?postId=${post.id}`)
    //         let comment = await fetch_comment.json()
    //         console.log(comment) 
    //     }))

        let comentarios_response = await Promise.all(posts.map(
            async post => await fetch(`${url}posts?userId=${post_id}`)))

        let comentarios = await Promise.all(comentarios_response.map(async response => await response.json()))
    
        console.log(comentarios)
}

obtenerComentarios()

