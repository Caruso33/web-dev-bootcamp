const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function(){
  // console.log('Ready state is...' + XHR.onreadyState);
  if(XHR.readyState === 4){//status 4 is request done
    if(XHR.status === 200){
      console.log(XHR.responseText);
    } else {
      console.log('There was a problem!');
    }
  }
}

XHR.open('GET', 'https://api.github.com/zen');
XHR.send()
