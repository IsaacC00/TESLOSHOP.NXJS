
//? not found es la pantalla por defecto de no encontrado
//? en este caso cuasndo no se encuentra la pantalla de N categoria
//? utilizamos el metodo notFound(); que regresa never; 
//? never: despues de lo que este el metodo notFound() no se va a ejecutar 

import { PageNotFound } from "@/components";

export default function () {
  return (
    <PageNotFound/>
  );
}