var datalength=0;
var currentuser=0;
var len=0;
function clr1(){
  document.getElementById('users').style.opacity=1;
  document.getElementById('oneuser').style.opacity=1;
  document.getElementById('createpost').style.opacity=1;
  document.getElementById('usercreation').style.display='none';
}
function focus1(){
  document.getElementById('users').style.opacity=0.3;
  document.getElementById('oneuser').style.opacity=0;
  document.getElementById('createpost').style.opacity=0.3;
  document.getElementById('usercreation').style.display='block';
  
  


}
function newpost(){
  var tit=document.getElementById("tit").value;
  var cont=document.getElementById("content").value;

  let date = new Date().toJSON();

  const postData = {
    
    Title: tit,
    content: cont,
    createdAt: date,
    id: len,
    userId: currentuser
  };
  
  fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${currentuser}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => location.reload())
    .catch((error) => console.error(error));
}
function save(){
  var name1=document.getElementById('name2').value;
  var avatar1=document.getElementById('avatar').value;
  if(name1=="" || avatar1==""){
    alert("Empty");
  }
  else{
  
    let date = new Date().toJSON();
    console.log(date);

    const endpoint = 'https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users';

const userData = {
  avatar: avatar1,
  createdAt: date,
  id: datalength,
  name: name1
  
};

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('User created successfully:', data);
    clr1();
    

  })
  .catch(error => {
    console.error('Error while creating user:', error);
  });

  }
  
}

function getUsers() {
    fetch('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users')
      .then(response => response.json())
      .then(data => {
        datalength=data.length;
        const userList = document.getElementById('users');
        const userList1 = document.getElementById('oneuser');
        console.log(data);
        data.forEach(user => {
          const div = document.createElement('div');
        
          div.style.alignItems = 'center'; // center the contents vertically
          div.style.padding = '20px'; // add some padding
          div.style.backgroundColor='white';
          div.style.color='black';
          div.style.height='80px';
          div.style.marginBottom='30px';
          div.style.marginLeft='20px';
          div.style.width='300px';
          
          div.style.borderRadius='20px';
          div.style.cursor='pointer';
          div.style.fontSize='19px';
          const img = document.createElement('img');
          img.src = user.avatar; // set the image source to the avatar URL
          img.alt = user.name; // set the alternative text to the user's name
          img.style.height='70px';
          img.style.borderRadius = '50%'; // make the image circular
          img.style.marginRight = '10px'; // add some spacing to the right of the image
          img.style.float='left';
          const name=document.createElement('h4');

          const nametemp = document.createTextNode(user.name);
          name.style.fontWeight='100';
          name.append(nametemp);

          
          div.appendChild(img);
          const button2=document.createElement('button');
            const val1=document.createTextNode('DELETE');
            button2.style.marginTop='-120px';
            button2.style.height='20px';
            button2.style.float='right';
            button2.append(val1);
           
            button2.addEventListener('click', () =>{
              const userId = user.id;
              
              const endpoint = `https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userId}`;
          

fetch(endpoint, {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('Post deleted successfully');
    location.reload();
  })
  .catch(error => {
    console.error('Error while deleting post:', error);
  });
  
            });
           
          const textDiv = document.createElement('div');
          textDiv.appendChild(name);
          textDiv.appendChild(document.createElement('br'));
         
          div.appendChild(textDiv);
          userList.appendChild(div);
          const post1=document.createElement('div');
          post1.innerHTML='';
          post1.style.position='relative';
          post1.style.bottom='150px';
          div.append(button2);
          div.addEventListener('click', () => {
            
           const mydiv= document.getElementById('oneuser');
           mydiv.innerHTML='';
            
            try{
              document.getElementById('createpost').style.display='block';
              
            }
            catch(err){
              console.log(err);
            }
            
           console.log(user);
            const div1 = document.createElement('div');
            div1.innerHTML='';
          div1.style.display = 'flex'; // set the display to flex
          div1.style.alignItems = 'center';
          
          // center the contents vertically
         
        
          div1.style.color='black';
          div1.style.height='200px';
          div1.style.marginBottom='30px';
          div1.style.width='300px';
          div1.style.marginLeft='20px';
          div1.style.position='relative';
          div1.style.bottom='70px';          
          div1.style.borderRadius='20px';
          div1.style.fontSize='19px';
          currentuser=user.id;
          const img1 = document.createElement('img');
          img1.src = user.avatar; // set the image source to the avatar URL
          img1.alt = user.name; // set the alternative text to the user's name
          img1.style.height='60px';
          img1.style.borderRadius = '50%'; // make the image circular
          img1.style.marginRight = '10px'; // add some spacing to the right of the image
          len=user.recent_posts.length;
          const name1 = document.createTextNode(user.name);
          div1.append(img1);
          const textDiv1 = document.createElement('div');
          textDiv1.append(name1);
          textDiv1.append(document.createElement('br'));
         
          div1.append(textDiv1);
          userList1.innerHTML = '';
          userList1.append(div1);
          user.recent_posts.forEach(view => {
            const title1=document.createElement('h3');
            
            const title= document.createTextNode(view.Title);
            title1.append(title);
            const content1= document.createElement('p');

  
            const content=document.createTextNode(view.content);
            content1.append(content);
            const date1=document.createElement('B');
            const date= document.createTextNode(view.createdAt);
            date1.append(date);
            const button1=document.createElement('button');
            const val=document.createTextNode('DELETE');
            button1.style.marginBottom='100px';
            button1.append(val);
           
            button1.addEventListener('click', () =>{
              const userId = user.id;
              const postId= view.id;
              const endpoint = `https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${userId}/posts/${postId}`;
          

fetch(endpoint, {
  method: 'DELETE'
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('Post deleted ');
    location.reload();
  })
  .catch(error => {
    console.error('Error while deleting post:', error);
  });
  
            });
            const div2= document.createElement('div');
            div2.style.backgroundColor='white';
            div2.style.marginLeft='30px';
            div2.style.padding='10px';
            div2.style.marginBottom='20px';
            div2.style.borderRadius='20px';
            div2.style.width='400px';
            
            div2.appendChild(title1);
            div2.appendChild(content1);
            div2.appendChild(date1);
            div2.append(button1);
            post1.appendChild(div2);
          });
          userList1.appendChild(post1);
            
          });
          
        });
      })
      .catch(error => console.error(error));
  }
  getUsers();
  