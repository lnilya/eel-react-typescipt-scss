
//***************************************************************/
//* PYTHON->JS INTERFACE */
//***************************************************************/

//Not that this file needs to be a .js file otherwise eel won't be able to detect it.
//Second the expose function needs to be literally "eel.expose...", since the way eel
//works is to scan .js files for the occurance of eel . expose(...)
//the file is located in public so it doesn't get minifier or in any way touched by buildchain.

const eel = window['eel'];

if(eel){
    eel.expose(hello,'hello');
    function hello(x) {
        window.__el_js_hello(x)
    }
}
