(() => {

    // función para obtener información de una película por Id
    // function getAllMovies( movieId: string ) {
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // function getAllMovieActors( id: string ) {
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    // function getUsuario( ActorId: string ) {
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    // function movie(title: string, description: string, rating: number, cast: string[] ) {
    interface Movie{
        cast: string[];
        description: string; 
        rating: number; 
        title: string; 
    }
    function createMovie( { title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    // function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    ////////////////////////////////

    


})();




