let likeEl = document.getElementById("like-el");
let btnEl = document.getElementById("btn-el");
let commentEl = document.getElementById("comment-el");
let counter = 0;
const postSection = document.getElementById("post-section");
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "img/vangogh.jpg",
        post: "img/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "img/avatar-courbet.jpg",
        post: "img/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "img/avatar-ducreux.jpg",
        post: "img/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
  

function renderAllPostsToThePage() {
 

    for(let i = 0; i < posts.length; i++) {
        postSection.innerHTML += `  <div class="flex-container-post">
                                        <div>
                                        <img class="post-creator" src=${posts[i].avatar}> 
                                        </div>
                                        <div>
                                        <p class="posted-name">${posts[i].name}</p>
                                        <p class="posted-destination">${posts[i].location}</p>
                                        </div>
                                    </div>
                                    <div class="vangogh-post-img ">
                                        <button class="posted-img"><img class="posted-img" src=${posts[i].post}></button>
                                    <div>`
                                    
       likeEl.innerHTML += `${posts[i].likes}`
      commentEl.innerHTML += `${posts[i].comment}`
    }
}

renderAllPostsToThePage()

postSection.addEventListener("click" ,function() {

    console.log(counter)
    counter ++;
    likeEl.textContent = counter;
    
})