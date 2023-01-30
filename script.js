let search_btn = document.getElementById('search_btn')

let country_name = document.getElementById('country_input')


search_btn.addEventListener('click',()=>{
    console.log(country_name)
    let country = country_name.value;
    
    let finalURL = `http://universities.hipolabs.com/search?country=${country}`

    console.log(finalURL);

        fetch(finalURL)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);

            // created the university list array
            let university_list =[];
        
            // adding nameofUniversity and its link to the university list
            for(let names of data){
                university_list.push([names.name , names.web_pages[0]])
            }

            // wrong country name or any other error
            if(university_list.length==0 || country=='')   throw 'Please Enter a <b>  valid </b> country name'

            university_list_block.innerHTML=''

            let header=document.createElement('h1');
            header.textContent =`List of Universities in ${country}`
            header.style.marginLeft = "250px";

            university_list_block.appendChild(header)

            // creating order list in which we will add li tag to show the list of university 
            let listElement = document.createElement('ol')

            university_list_block.appendChild(listElement)

            // adding university to the ol tag
            for(let item of university_list){
            
                let listItem = document.createElement('li');
                let anchortag = document.createElement('a');
                
                listItem.appendChild(anchortag)

                anchortag.textContent=item[0];
                anchortag.href=item[1];

                anchortag.style.textDecoration='none'
                anchortag.style.color='black'
                anchortag.style.fontSize='22px'
                listItem.style.marginTop='8px'

                listItem.style.marginLeft="20px"             

                listElement.appendChild(listItem);
            }

        }).catch(()=>{
            university_list_block.innerHTML = `
            <h2 class='error'>Please Enter a <b>  valid </b> country name </h2>
            `
        })

})


