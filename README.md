# react-final-proyect
El proyecto utiliza localstorage para almacenar datos seleccionados por usuario, Context API para el manejo y manipulación de estos datos.

El proyecto es una “filmoteca” en el cual el usuario puede seleccionar películas como ya vistas, en lista , darle un puntaje a una película.
 
Puntos extra si se agrega un filtro por cada lista en el cual pueda ordenar alfabéticamente, 
o basado en rating. Cada película se puede clickear y abrir una nueva ruta “/pelicula/:id” 
en el cual se va a mostrar todos los detalles de la película, y se le permita el usuario darle un ratea la película.


El Contexto se debe de usar como el medio por el cual el estado de datos se cambia en el localstorage, 
además que desde este se hace la carga inicial de localstorage, de no existir define la estructura de datos. 

Debe existir otra ruta “/profile” en el cual el usuario pueda ver sus listas, 
puede reutilizar componente visual del preview de la película. 
Además puntos extra si el Context además utiliza un tema el cual cual se puede cambiar entre ellos desde la navegación principal.