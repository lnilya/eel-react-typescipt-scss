
//***************************************************************/
//* PYTHON->JS INTERFACE */
//***************************************************************/

//Not that this file needs to be a .js file otherwise eel won't be able to detect it.
//Second the expose function needs to be literally "eel.expose...", since the way eel
//works is to scan .js files for the occurance of eel . expose(...)

const eel = window['eel'];

eel.expose(hello,'hello');
function hello(x) {
  console.log('Python says: ' + x);
}
