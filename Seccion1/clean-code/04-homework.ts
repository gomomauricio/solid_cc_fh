(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    /* antes
    function isRedFruit_antes( fruit: string ): boolean {
        
        if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        }
    }*/

    let redFruits: string[] = [ 'manzana', 'cereza', 'ciruela' ];
    let yellowFruits: string[] = [ 'piña','banana' ];
    let purpleFruits: string[] = [ 'moras','uvas' ];
     
    function isRedFruit( fruit: string ): boolean {
         
        // if ( redFruits.includes( fruit ) )   return true;
         
        //     return false; 

        return redFruits.includes( fruit );
    }



    // Simplificar esta función
    // switch? Object literal? validar posibles colores
     /* antes
    function getFruitsByColor( color: string ): string[] {

        if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        }
    } */
    function getFruitsByColor(color: string): string[] {
      switch (color) {
        case "red":
          return redFruits;
          break;
        case "yellow":
          return yellowFruits;
          break;
        case "purple":
          return purpleFruits;
          break;
        default:
          throw Error("the color must be: red, yellow, purple");
          break;
      }
    }


     

    // Simplificar esta función
    /* ANTES
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( isFirstStepWorking === true ) 
        {
            if( isSecondStepWorking === true ) 
            {
                if( isThirdStepWorking === true ) 
                {
                    if( isFourthStepWorking === true )
                    {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    } */

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';

        return 'Working properly!'; 
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




