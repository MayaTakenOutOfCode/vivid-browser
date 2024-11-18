
const backButton = document.getElementById("back-button");
const forwardButton = document.getElementById("forward-button");
const reloadButton = document.getElementById("reload-button");
const searchButton = document.getElementById("search-button");
const newWindowButton = document.getElementById("new-window-button");
const goButton = document.getElementById("go");

const urlInputField = document.getElementById("url-input");
let url = '';
const webView = document.getElementById("webview");


urlInputField.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        handleUrl();
    }
});
newWindowButton.addEventListener('click', () => {
    api.newWindow();
})

goButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleUrl();
});



function handleUrl(){
    let url = "";
    const inputUrl = urlInputField.value;

    if(inputUrl.startsWith("http://") || inputUrl.startsWith("https://")){
        url = inputUrl;
    } else{
        url = "http://" + inputUrl;
    }

    webView.src = url;
}

backButton.addEventListener('click', () => {
    webView.goBack();
});

forwardButton.addEventListener('click', ()=>{
    webView.goForward();
});

reloadButton.addEventListener('click', () => webView.reload());

if(!url){
    url = "https://google.com";
    webView.src = url;
    urlInputField.value = url;
}

searchButton.addEventListener('click', (event) => {
    url="https://ww.google.com";
    urlInputField.value = url;
    webView.src = url;
})

webView.addEventListener('did-navigate', (event) => {
    url = event.url;
    urlInputField.value = url;
})

