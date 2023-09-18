// Getting the element by id and its specific selectors
var getBtn = document.querySelector('#Add');
var getEtSubmit = document.querySelector('#text-element-tr');
var getTextValue = document.querySelector('#text');
var getTextDisplayColumn = document.getElementById('et-text-column');
var textCount = 1;
var getDeleteBtn = document.querySelector('#delete');
var getEditBtn = document.getElementById('edit');
var getExistText1 = document.querySelector('#text-contents');
var getExistTextAll = document.querySelectorAll('#text-contents');
var getEditTextNum = document.getElementById('text-s-no');
var getEditFindBtn = document.getElementById('ft-elmt');


// Getting user given text by executing the following function
function useUserText(){


getTextDisplayColumn.innerHTML += '<p class ="text-primary px-2" id = "text-contents">'+textCount+') '+ getTextValue.value +'</p>' + '<hr>';
getTextValue.value ="";
textCount++;
   
}
// Edit user given text by executing the following function
function editExisttext(){

    let text_index = getEditTextNum.value;
   let hasElement = getTextDisplayColumn.contains(getExistText1);
   if(hasElement){
    document.getElementById('show-text').innerText = getExistTextAll[text_index].innerText;
   }
   else{
    document.getElementById('msg-info').innerHTML= '<p class="w-100 bg-danger text-white p-2" id="info-msg">'+"Entered text not found"+'</p>'
   }
    

}
// Deleting user given text by executing the following function
function DeleteText(){
  getTextDisplayColumn.innerHTML="";
  textCount =1;
}

//Execute the Appropriates by executing these function
function Allevent(){
    
     getBtn.setAttribute('data-bs-toggle','modal');
     getBtn.setAttribute('data-bs-target','#myModal');
     getEditBtn.setAttribute('data-bs-toggle','modal');
     getEditBtn.setAttribute('data-bs-target','#myModal-1');
     getEtSubmit.addEventListener('click',useUserText);
     getDeleteBtn.addEventListener('click',DeleteText);
    getEditFindBtn.addEventListener('click',editExisttext);
     console.log(getTextContent.innerHTML);
   
    }

Allevent();
