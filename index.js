var list = document.getElementById('list');

const getLists =async(url)=>{
    let res=await fetch(url);
    let data = await res.json();
    console.log(data);
    display(data);
}

const display=(data)=>{
    
    data.map(lists => {
        let listItem = document.createElement('li');
        
       
        listItem.classList ='file';
        listItem.textContent = lists;
        listItem.addEventListener("click",()=>{
            // window.location.href = ;
            // console.log("Working")
            list.innerHTML="";
            var currUrl = `http://localhost:7000/api/${lists}`
            getLists( currUrl )
        })
        list.append(listItem);
        
        
    });
    
}

var listUri = document.querySelectorAll('.file');
console.log(listUri);
// listUri.forEach(i=>{
    // var text = i.textContent;
    // var url = `http://localhost:7000/api/${text}`;
        
    // i.addEventListener('click', fetchContent(url))
    // log
// })





const fetchContent = async(url)=>{
    let res=await fetch(url);
    let data = await res.json();
    console.log(data);
    display(data);
}

getLists('http://localhost:7000/api');