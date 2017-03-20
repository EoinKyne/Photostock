// specify some parameters
let selectedImages = [] // Array called selectedimages
let img = document.createElement('img') //assign element 'img' to variable img
let retrievedArray = localStorage.getItem('arrayinfo') // assign localstorage with key 'arrayinfo' into variable retrieved Array
let myImageArray = JSON.parse(retrievedArray) //call JSON.parse method on retrievedarray an put into myImageArray

    // loop over myImagearray
    for(let i=0; i < myImageArray.length; i++){
        // create 'img' element in the document and assign to nextImage
        let nextImage = document.createElement('img')
            // set the attributes to each image 
            nextImage.setAttribute('src', myImageArray[i].src)
            nextImage.setAttribute('id', myImageArray[i].id)
        // append to the DOM (target is the 'output' in the html)
        document.getElementById('output').appendChild(nextImage) 
    }

// OUTPUT TO HOLD USERNAME
// create 'h3' element in document
let myGreeting = document.createElement('h3')
    // append to div id=main   
    main.appendChild(myGreeting)    

// get from local storage variable with key 'usr'
let retrieved = localStorage.getItem('usr')
    // add to my h2 element 'retrived variable plus your selected photos are:'
    myGreeting.innerHTML = `${retrieved} your selected photos are: `

    
// BUTTON TO MOVE TO BACK TO IMAGES
let rtnBtn = document.createElement('button')
    // set a button name, set an id
    rtnBtn.innerHTML = 'Return to Main Page'
    rtnBtn.setAttribute('id', 'rtnBtnGo')
            
    // add an click event listener to the button to call function goToMyPhotoStock(
    rtnBtn.addEventListener('click', goToMyPhotoStock)
    returnButton.appendChild(rtnBtn)

// event handler for click event to go to next page 'MyPhotoStock.html
function goToMyPhotoStock(){
    location.href = "MyPhotoStock.html"
}

