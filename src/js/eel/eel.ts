
//***************************************************************/
//* TYPING OF THE JS->PYTHON INTERFACE */
//***************************************************************/

type EelFunction<T> = ()=>(()=>Promise<T>)

//Typing of Python responses
interface EelPythonFunctions {
    /** Loads the URL for a generated image from server */
    getRandomImage: EelFunction<string>
}

/**A generic server response object response, to avoid try catch for server errors.
 * Will either hava data set or error and errorTrace .*/
export type EelResponse<T> = Partial<{
    error:string,
    errorTrace:string,
    data:T
}>;

const eelEndpoints:EelPythonFunctions = window['eel'];

//***************************************************************/
//* PUBLIC API FOR REST OF REACT APP                            */
//***************************************************************/


export async function getRandomImage():Promise<EelResponse<string>>{
    try{
        var k =  await eelEndpoints.getRandomImage()();
    }catch (e){
        return {
            error: e.errorText,
            errorTrace: e.errorTraceback
        }
    }
    return {data:k};
}