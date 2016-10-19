function displayList(selector, list) 
{
    var dom = document.querySelector(selector);
    /* this document fragment is just for performance 
     * We create all the elements to add to the page
     * add them to the fragment, then add the fragment to
     * the page.  Much faster than just adding all the
     * elements to the page one at a time
     * 
     */
    var docfrag = document.createDocumentFragment();
    
    /* JavaScript now has built in foreach loops for arrays */
    list.forEach(function(value) 
    {
        /* you can use the creaeElement tag to create any HTML element you want */
        var li = document.createElement("li");            
        li.textContent = value.name['first'] + " " + value.name['last'];
        
        /* you can set any attribute using the function below for any Created element */
        li.setAttribute('class', 'link');
        /*you can even attach events to the element */
        li.addEventListener('click', launchRequest2.bind(null, '../Hankey_Lab2/data/' + value._id +'.json'));
        docfrag.appendChild(li);
    });
    
    /* after the fragment is completed we can add it to the page */
    dom.appendChild(docfrag);
}

function displayPicture(selector, item)
{
    var dom = document.querySelector(selector);
    var docfrag = document.createDocumentFragment();

    /* remove any child elements */
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    } 
    
    var img = document.createElement("img");
    img.setAttribute('src', '../Hankey_Lab2/img/' + item.picture);
    img.setAttribute('alt', '');
    
    dom.appendChild(img);
}

function displayContent(selector, item) 
{
    var dom = document.querySelector(selector);
    var docfrag = document.createDocumentFragment();

    /* remove any child elements */
    while (dom.firstChild) {
        dom.removeChild(dom.firstChild);
    }   

    docfrag.appendChild( createParagraphElement('Name: ', item.name['first'] + " " + item.name['last']));
    docfrag.appendChild( createParagraphElement('Company: ', item.company));
    docfrag.appendChild( createParagraphElement('Email: ', item.email));
    docfrag.appendChild( createParagraphElement('Phone: ', item.phone));
    docfrag.appendChild( createParagraphElement('Address: ', item.address));
    docfrag.appendChild( createParagraphElement('Registered: ', item.registered));
    docfrag.appendChild( createParagraphElement('Age: ', item.age));
    docfrag.appendChild( createParagraphElement('Eye Color: ', item.eyeColor));
    docfrag.appendChild( createParagraphElement('Greeting: ', item.greeting));
    docfrag.appendChild( createParagraphElement('Favorite Fruit: ', item.favoriteFruit));
    docfrag.appendChild( createParagraphElement('Balanace: ', item.balance));
    docfrag.appendChild( createParagraphElement('About: ', item.about));

    var completed = createParagraphElement('Active: ', item.isActive);
    completed.setAttribute('class', 'link');
    completed.addEventListener('click', function(){
         item.isActive = !item.isActive;
         displayContent(selector, item);
     });

    docfrag.appendChild( completed );
    dom.appendChild(docfrag);
}

/* custom function to generate a template for our view */
function createParagraphElement(label, text) 
{
    var pTag = document.createElement('p'),
        strongTag = document.createElement('strong'),
        strongText = document.createTextNode(label),
        pText = document.createTextNode(text);

        strongTag.appendChild(strongText);
        pTag.appendChild(strongTag);  
        pTag.appendChild(pText);  
        return pTag;
}

function makeRequest(url) 
{
            
    var promise = new Promise( httpPromise );
    
    function httpPromise(resolve, reject) {
        var httpRequest = new XMLHttpRequest();

         if ( !httpRequest ) {
           reject('Giving up :( Cannot create an XMLHTTP instance');
         }
         
         httpRequest.open('GET', url);
         httpRequest.send();
         
         httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
         httpRequest.addEventListener('error', httpReject.bind(httpRequest));
         
         function httpResolve() {                        
            if ( this.status >= 200 && this.status < 300 ) {
                // Performs the function "resolve" when this.status is equal to 2xx
                resolve(JSON.parse(this.response));
            } else {
                // Performs the function "reject" when this.status is different than 2xx
                reject(this.statusText);
            }                          
         }
         
         function httpReject() {
             reject(this.statusText);
         }

    }
    
    // Return the promise
    return promise;
}


var callback = {
  firstSuccess: function(data) {
    //console.log(1, 'First Success', data);
    displayList('ul.users',data.users);
  },
  successList: function(data)
  {
     //console.log(1,'success',data);
     displayPicture('.featured figure', data)
     displayContent('.featured article', data);
  },
  error: function(data) {
    console.log(2, 'error', data);
  }
};

function launchRequest(url)
{
    makeRequest(url).then(callback.firstSuccess, callback.error);
}

function launchRequest2(url)
{
    makeRequest(url).then(callback.successList, callback.error);
}

window.addEventListener('load', launchRequest.bind(null, '../Hankey_Lab2/data/users.json'));