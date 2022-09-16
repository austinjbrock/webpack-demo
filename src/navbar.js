const createLayout = () => {

   let content = document.getElementById('content')
   content.innerHTML = `
   <nav>   
   <button id="home">Home</button>
   <button id="menu">Menu</button>
   <button id="contact">Contact</button>
   </nav>
   <h1>Tabbed Browsing</h1>
   `

   content.classList.add('hello')

}

createLayout()


 export default createLayout
