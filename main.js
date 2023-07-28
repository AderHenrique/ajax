document.addEventListener('DOMContentLoaded', function(){
   const naneElement = document.querySelector('#name');
   const userElement = document.querySelector('#username');
   const avatarElement = document.querySelector('#avatar');
   const reposElement = document.querySelector('#repos');
   const followersElement = document.querySelector('#followers');
   const followingElement = document.querySelector('#following');
   const linkElement = document.querySelector('#link');

   fetch('https://api.github.com/users/AderHenrique')
      .then(function(res){
         return res.json();
      })
      .then(function(json){
         naneElement.innerHTML = json.name;
         userElement.innerHTML = json.login;
         avatarElement.src = json.avatar_url;
         reposElement.innerHTML = json.public_repos;
         followersElement.innerHTML = json.followers;
         followingElement.innerHTML = json.following;
         linkElement.href = json.html_url
      })
})