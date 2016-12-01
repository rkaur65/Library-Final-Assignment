let books = [
  {author: 'Thomas Pynchon', subject: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', subject: '1Q84', genre: 'fiction', copies: 5},
  {author: 'John D MacDonald', subject: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', subject: 'Understanding Ecmascript 6', genre: 'javascript', copies: 3},
  {author: 'Thomas Phillips', subject: 'Long Slow Distance', genre: 'fiction', copies: 7}
]
let user=[
{name:'ramanjot',email:'ramansidhu' }



]
function boonam () {
  let aName = document.getElementById('bookname').value
  let name = books.filter((x) => x.subject.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.subject} by ${x.subject} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}







// event listeners
document.getElementById('boonam').addEventListener('click', boonam)

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

// this function add the books  in the library //

function addBook(){
 books.push({ title: document.getElementById('adtitle').value , author: document.getElementById('adauthor').value , year: document.getElementById('adyear').value })
 document.getElementById('adtitle').value=""
document.getElementById('adauthor').value=""
 document.getElementById('adyear').value="" 


}
 // this function shows the books that are available in the library with the full detail of the books//
function showAllBooks () {    
  hideAllBooks('allTheBooks')
  books.forEach((x) => {
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`available copies ${x.copies} by ${x.author} in ${x.genre} `)
    listItem.appendChild(textnode)
    document.getElementById('allTheBooks').appendChild(listItem)
  })
}
  function neUser(){
       user.push({name: document.getElementById('newUser').value, email:document.getElementById("newEmail").value});
       document.getElementById("newUser").value = "";
       document.getElementById("newEmail").value = "";
      
  
    }




