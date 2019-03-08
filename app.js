//FETCH = XHR + PROMESAS

// let url = 'https://jsonplaceholder.typicode.com/'

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

// async function foo(){
//     //fetch().then().catch();
//     let pedido = await fetch();
//     console.log(pedido);
// }
// console.log(foo)


// async function obtenerComentarios(){
//     let usuarios_response = await fetch(`${url}users`);
//     let usuarios = await usuarios_response.json();
//     console.log(usuarios)
// }
// obtenerComentarios();



/*****************************************clase_x */

// function ajax(params){
// 	let xhr = new XMLHttpRequest
// 	xhr.open(params.metodo,params.url)
// 	xhr.addEventListener("load",function(){
// 		if (xhr.status == 200) {
// 			params.success(JSON.parse(xhr.response))
// 		}
// 	})
// 	xhr.send()
// }
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

// async function obtenerComentarios(){
// 	let usuarios_response = await fetch(`${url}users`)
// 	let usuarios = await usuarios_response.json()
// 	let usuario_id = usuarios[7].id
// 	let posts_response = await fetch (`${url}posts?userId=${usuario_id}`)
// 	let posts = await posts_response.json()
	
// 	// let comments_response = await Promise.all(posts.map(
//     //     async post=> {
//     //         let fetch_comment = await fetch(`${url}comments?postId=${post.id}`)
//     //         let comment = await fetch_comment.json()
//     //         console.log(comment) 
//     //     }))

//         let comentarios_response = await Promise.all(posts.map(
//             async post => await fetch(`${url}posts?userId=${post_id}`)))

//         let comentarios = await Promise.all(comentarios_response.map(async response => await response.json()))
    
//         console.log(comentarios)
// }

// obtenerComentarios()




/**NODE**********************************/


//modulos

//app.js
// (function(exports, /*otras...*/){

// })()


//incluir modulos

// require('NOMBRE DEL MODULO')    //local - sincronica - top level , no se puede incluir en if, etc. almacena los modulos en buffers


//exportar info de un modulo
/*
module.exports = {}
module.exports.a = 1 // module.exports = { a: 1 }
exports.a = 1
exports = a //NO SE PUEDE PORQUELA VARIABLE EXPORTS ES LOCAL DEL MODULO ENTONCES PISARLA CON OTRO VALOR IMPLICA QUE LA REEMPLAZAMOS CON LA VARIABLE A
*/
/*Buffer - Stream - EventEmitter(idem addEventListener en front*/


    

/********
(DESTRUCTURING)


let arr = [1,2,3]
let uno = arr[0]
let dos = arr[1]
let tres = arr[2]

--> igual a:

let {uno, dos, tres} = arr

---------------*----------



let obj ={x:1, y:2}
let x = obj.x
let y = obj.y

--> igual a:

let {x:x, y:x} = obj   --> igual a:    {x, y} = obj  (PROPERTY SHORTHAND)

*/


//EVENT EMITTER

// const events = require ('events');

// const {EventEmitter} = events   //let EventEmitter = events.EventEmitter 

// let mi_variable = new EventEmitter()

// //suscribirme a un evento:

// mi_variable.on('click', a=>{
//     setImmediate(() => {console.log(('Me hicieron click'))});
//     console.log(a);
//     //process.nextTick(()=>console.log('Next tick'))
// })

// //disparar un evento:

// mi_variable.emit('click', 1)

// //Buffers
// //

// //Stream
// //transicion de datos de un lugar a otro



let buffer = new Buffer('hola')

console.log(buffer)