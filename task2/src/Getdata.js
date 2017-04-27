var tab = document.getElementsByClassName('tab');
for(var i =0; i < tab.length; i++) {
 tab[i].addEventListener('click',Requestfile,false);
}

function Requestfile(clickEvent) {
 var request = new XMLHttpRequest();
 var currentTab = clickEvent.currentTarget;
 var fileName = currentTab.htmlFor.split("tab")[1];
 var currentEvent = clickEvent;
 request.open('GET', 'https://mughees-ilyas.github.io/tab-challange/task2/content/file'+ fileName + '.html', true);
 request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
   var resp = request.responseText;
   var TabHtml = '<div class="tab-content">' + resp + '</div>'
   currentTab.insertAdjacentHTML("afterend",TabHtml)
   currentTab.removeEventListener("click",Requestfile ,false);
   } 
  };
 request.send();
 }
