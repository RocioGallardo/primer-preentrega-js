class Pelicula{
    constructor(nombre, año, categoria, puntuacion, duracion){
        this.nombre = nombre
        this.año = año
        this.categoria = categoria
        this.puntuacion = puntuacion
        this.duracion = duracion
}
}

const pelicula1 = new Pelicula("El juicio de los 7 de Chicago", 2020, ["drama"], 89, 128 )
const pelicula2 = new Pelicula("Claroscuro", 2021, ["drama"], 90, 99)
const pelicula3 = new Pelicula("La calle del terror : parte 3 - 1666", 2021, ["sobrenatural"], 89, 115)
const pelicula4 = new Pelicula("Enola Holmes", 2020, ["misterio", "crimen", "aventura"], 89, 123)
const pelicula5 = new Pelicula("I am mother", 2019, ["ciencia-ficcion", "suspenso"], 91, 115)
const pelicula6 = new Pelicula("High flying bird", 2019, ["deportes", "drama"], 89, 91 )
const pelicula7 = new Pelicula("La vida por delante", 2020, ["drama"], 92, 95)
const pelicula8 = new Pelicula("Da 5 bloods: Hermanos de armas", 2020, ["belico", "drama"], 92, 154)
const pelicula9 = new Pelicula("Una película de policías", 2021, ["drama"], 92, 107)
const pelicula10 = new Pelicula("Apolo 10 1/2: Una infancia espacial", 2022, ["aventura", "ciencia-ficcion"], 92, 98)
const pelicula11 = new Pelicula("See you yesterday", 2019, ["ciencia-ficcion"], 93, 87)
const pelicula12 = new Pelicula("The meyerowitz stories (nwe and selected)", 2017, ["comedia", "drama"], 93, 112)
const pelicula13 = new Pelicula("Cam", 2018, ["terror", "misterio"], 93, 95)
const pelicula14 = new Pelicula("Amor y monstruos", 2020, ["comedia"], 94, 108)
const pelicula15 = new Pelicula("Klaus", 2019, ["infantil", "comedia"], 94, 97)
const pelicula16 = new Pelicula("Historia de un matrimonio", 2019, ["romance", "drama"], 94, 136)
const pelicula17 = new Pelicula("El poder del perro", 2021, ["drama", "thriller", "romance"], 95, 126)
const pelicula18 = new Pelicula("El irlandés", 2019, ["crimen", "drama"], 95, 209)
const pelicula19 = new Pelicula("Donde está mi cuerpo", 2019, ["fantasia", "drama"], 96, 81)
const pelicula20 = new Pelicula("Roma", 2018, ["drama"], 96, 135)
const pelicula21 = new Pelicula("A todos los chicos de los que me enamoré", 2018, ["romance", "drama"], 96, 99)
const pelicula22 = new Pelicula("Yo soy dolemite", 2019, ["drama", "comedia"], 97, 117)
const pelicula23 = new Pelicula("Mudbound", 2017, ["drama"], 97, 134)
const pelicula24 = new Pelicula("Lionheart", 2018, ["drama"], 100, 95)
const pelicula25 = new Pelicula("Casa ajena", 2020, ["terror, suspenso"], 100, 93)

const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8, pelicula9, pelicula10, pelicula11, pelicula12, pelicula13, pelicula14, pelicula15, pelicula16, pelicula17, pelicula18, pelicula19, pelicula20, pelicula21, pelicula22, pelicula23, pelicula24, pelicula25]


alert("Hola ! tenemos una lista de las 25 películas de Netflix mejor valoradas por la crítica")

let respuesta, respuestaSwitch

do {
    respuesta = parseFloat(prompt(" Ingrese un numero dependiendo del tipo de búsqueda que desea hacer\n Si desea buscar según el año ingrese 1\n Si desea buscar según su categoría ingrese 2\n Si desea buscar según su duración presione 3\n Si desea buscar según su puntuación en Rotten Tomatoes ingrese 4 "))
    if ((respuesta != 1) && (respuesta!= 2) && (respuesta != 3) && (respuesta != 4)){
        alert("Por favor ingrese un número válido")
    }
} while((respuesta != "1") &&(respuesta != 2) && (respuesta != 3) && (respuesta != 4))



switch(respuesta){
    case 1 :
        do{
            respuestaSwitch = parseFloat(prompt("Ingrese el año de la película que quiere ver, las opciones son van entre 2017 y 2022\n (Los resultados se podrán ver en consola)"))
        } while (respuestaSwitch <= 2016 || respuestaSwitch>=2023)

        const peliculasFiltradasAño = peliculas.filter(pelicula => pelicula.año == respuestaSwitch)
        peliculasFiltradasAño.forEach(pelicula => {
            console.log(`Quizá pueda interesarte la película ${pelicula.nombre}, es de ${pelicula.categoría},dura ${pelicula.duracion} minutos y recibío ${pelicula.puntuacion} puntos en Rotten Tomatoes`)
        })
        break
    case 2 :
        do{
            respuestaSwitch = prompt("Ingrese la categoría que quiere ver, las opciones son : drama, sobrenatural, misterio, crimen, ciencia-ficcion, suspenso, deportes,belico, aventura, comedia\n (Los resultados se podrán ver en consola)").toLocaleLowerCase()
        } while (respuestaSwitch!= "drama" && respuestaSwitch!= "misterio" && respuestaSwitch!= "crimen" && respuestaSwitch!= "ciencia-ficcion" && respuestaSwitch!= "suspenso" && respuestaSwitch!= "deportes" && respuestaSwitch!= "belico" && respuestaSwitch!= "aventura" && respuestaSwitch!= "comedia")

        const peliculasFiltradasCategoria = peliculas.filter(pelicula => pelicula.categoria.includes(respuestaSwitch) == true)
        peliculasFiltradasCategoria.forEach(pelicula => {console.log(`Quizá pueda interesarte la película ${pelicula.nombre} del año ${pelicula.año}, es de ${pelicula.categoria},dura ${pelicula.duracion} minutos y recibió %${pelicula.puntuacion} de puntaje en Rotten Tomatoes`)
        })
        break
    case 3 :
        do{
            respuestaSwitch = parseFloat(prompt("Ingrese 1 si desea ver una película que dure menos de dos horas\n Ingrese 2 si desea ver una película que dure más de dos horas"))
        } while (respuestaSwitch != 1 && respuestaSwitch != 2)
        switch(respuestaSwitch){
            case 1 :
                const peliculasFiltradasDuracion1 = peliculas.filter(pelicula => pelicula.duracion < 120)
        peliculasFiltradasDuracion1.forEach(pelicula => {
            console.log(`Quizá pueda interesarte la película ${pelicula.nombre}, es de ${pelicula.categoría},dura ${pelicula.duracion} minutos y recibío ${pelicula.puntuacion} puntos en Rotten Tomatoes`)
        })
            break
            case 2 :
                const peliculasFiltradasDuracion2 = peliculas.filter(pelicula => pelicula.duracion > 120)
        peliculasFiltradasDuracion2.forEach(pelicula => {
            console.log(`Quizá pueda interesarte la película ${pelicula.nombre}, es de ${pelicula.categoría},dura ${pelicula.duracion} minutos y recibío ${pelicula.puntuacion} puntos en Rotten Tomatoes`)
        })
            break
        }
    break
    case 4 :
        do{
            respuestaSwitch = parseFloat(prompt("Para buscar según el puntaje ingrese un número entre el 89 y el 100  \n (Los resultados se podrán ver en consola)"))
        } while (respuestaSwitch < 89 || respuestaSwitch > 100)

        const peliculasFiltradas4 = peliculas.filter(pelicula => pelicula.puntuacion == respuestaSwitch)
        peliculasFiltradas4.forEach(pelicula => {
            console.log(`Quizá pueda interesarte la película ${pelicula.nombre}, es de ${pelicula.categoría},dura ${pelicula.duracion} minutos y recibío ${pelicula.puntuacion} puntos en Rotten Tomatoes`)
        })
        break

}



