// specify some parameters
let whichData = 'data/photos.json' // photo JSON source
let whichMethod = 'GET' // method used to 'get images
let chosenCategory = 'animals' // default/selected chosenCategory when webpage opens
let target = document.getElementById('output') // 'output' in the photostock webpage html where the image array will be loaded
let xhr = new XMLHttpRequest() // the API used to transfer / connection between client side and server side
let selectedImages = [] // array called selected Images


function makeAJAXrequest(){// prepare the request
    xhr.open(whichMethod, whichData)
// specify the event listeners
    xhr.onreadystatechange = handleReadyState
    xhr.send() // this is the moment the request is made
}

// event listener functions
function handleReadyState(response){
    // check we have readyState of 4 and status of 200
    if(xhr.readyState == 4 && xhr.status == 200){
        // we know for sure we have received the data
        let data = JSON.parse(xhr.response)
        // now we can put this model into the view
        
            console.log(data) // Print out objects to the console
            
        // loop over the array        
        for(let i=0; i<data.length; i++){
            
            // if condition of loop, if the category attribute at object[i] is 'abstract'
            if(data[i].category == chosenCategory){
                    
            // create 'img' element in the document and assign to nextImage
            let nextImage = document.createElement('img')
                    
                // set the attributes to each image 
                nextImage.setAttribute('id', 'myImages')
                nextImage.setAttribute('src', `data/gallery/${data[i].filename}.jpg`)
                nextImage.setAttribute('alt', data[i].category)
                nextImage.setAttribute('title', data[i].desc)
                nextImage.setAttribute('href', 'javascript:selectImage')
                nextImage.setAttribute('longdesc', data[i].filename)
                    

            // append to the DOM (target is the 'output' in the html)
            target.appendChild(nextImage)
            }
        } // end of 'for' loop
    }
}

// SELECT BY CATAGORY
// make an initial request
makeAJAXrequest()
 
// find in the document by element id 'categories' and assign this to categoryChooser
let categoryChooser = document.getElementById('categories')
    // Add an event listener to catch a change in the select menu in the html and pass it to the function handleChange
    categoryChooser.addEventListener('change', handleChange)
 
// event handler for 'change' event on the <select> tag
function handleChange(){
    target.innerHTML = ''  //clear away all the current imagesset document.getelementById('output').innerHTML to zero
    chosenCategory = categoryChooser.value // Assign the value choosen to variable chosenCategory
    console.log(chosenCategory) // log the choosenCategory to the console
    makeAJAXrequest()  //call a new request   
}



// SELECT BY IMAGE & SET IN LOCAL STORAGE

// find in the document by element id 'output' and assign this to imageChooser
let imageChooser = document.getElementById('output')
    // Add an event listener to catch a 'click' event and pass it to the function sendImage
    imageChooser.addEventListener('click', saveImage)

// event handle for 'click' event on an image passing it an image parameter    
function saveImage(image){
	//target event property gets the element on which the event originally occured
    imageChooser = image.target  
    
    // if the parent node of the img element in imageChooser is 'output'
    if(imageChooser.parentNode.id == 'output'){
        // change the border color to red
        imageChooser.style.borderColor = "red"
        
        //set the image in local storage giving it the key 'imginfo' and the value [src: the source attribute of the image, id: the id attribute of the image]. Use JSON stringify method to convert to a string 
        localStorage.setItem('imginfo', JSON.stringify({src:imageChooser.src, id:imageChooser.id}))    
    }
    
    // RETRIEVE IMAGES & APPEND TO DOCUMENT
    
    // create 'img' element in the document and assign to img
    let selectImg = document.createElement('img')
    // get information from local storage with key 'imginfo'
    let retrievedData = localStorage.getItem('imginfo') 
    //Use JSON.parse method to take retrived String value and split src and id information and assign to myImages
    let myImages = JSON.parse(retrievedData) 
        // assign src and id information to new img element
        selectImg.src = myImages.src 
        selectImg.id = myImages.id 
		//append img elements to div id='selected'
        document.getElementById('selected').appendChild(selectImg) 
        
		// push information onto the array selectedImages
        selectedImages.push(myImages)  
        //set the image in local storage giving it the key 'arrayinfo' and the value [src: the source attribute of the image, id: the id attribute of the image]. Use JSON stringify method to convert to a string
        localStorage.setItem('arrayinfo', JSON.stringify(selectedImages)) 

        //clear information from local storage with key 'imginfo'
        //localStorage.removeItem('imginfo') 
}

// DESELECT IMAGES AND REFRESH PAGE

// find in the document by element id 'selected' and assign this to deSelectChooser
let deSelectChooser = document.getElementById('selected')
    // Add an event listener to catch a 'click' event and pass it to the function deSelectImage
    deSelectChooser.addEventListener('click', deSelectImage) 

// event handler for 'click' event on an image passing it an image parameter
function deSelectImage(image){
    //target event property gets the element on which the event originally occured
    deSelectChooser = image.target 
    // if the parent node of the img element in deSelectChooser is 'selected'
    if(deSelectChooser.parentNode.id == 'selected'){
        // Clear information from local storage with key 'arrayinfo'
        localStorage.removeItem('arrayinfo') 
        // reload window
        window.location.reload(false)  
    }   
}



// OUTPUT TO HOLD USERNAME

// create 'h2' element in document
let myGreeting = document.createElement('h2')
    // append to div id=main
    main.appendChild(myGreeting)

// get from local storage variable with key 'usr'
let retrieved = localStorage.getItem('usr')
    // add to my h2 element 'welcome plus retrived variable
    myGreeting.innerHTML = `Welcome ${retrieved}`    


// BUTTON TO MOVE TO SELECTED IMAGES
let btn = document.createElement('button')
    // set a button name, set an id
    btn.innerHTML = 'Go to My Selected Photos'
    btn.setAttribute('id', 'btnGo')
            
    // add an click event listener to the button to call function gotoSelectedImages()
    btn.addEventListener('click', goToSelectedImages)
    button.appendChild(btn)

// event handler for click event to go to next page 'myphotostockselected.html'   
function goToSelectedImages(){
        location.href = "MyPhotoStockSelected.html"
        
    }




    





