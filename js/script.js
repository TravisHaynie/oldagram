let counter = 21;
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
];


function renderAllPostsToThePage() {

    for (let i = 0; i < posts.length; i++) {
        postSection.innerHTML += 
                                `  
                                    <article>
                                        <section class="flex-container-post"> 
                                            <div>
                                                <img class="post-creator" src=${posts[i].avatar}> 
                                            </div>
                                            <div>
                                                <p class="posted-name">${posts[i].name}</p>
                                                <p class="posted-destination">${posts[i].location}</p>
                                            </div>
                                        </section>
                                        <section>
                                            <button class="posted-img">
                                                <img class="posted-img" src=${posts[i].post}>
                                            </button>
                                            <button class="heart" title="button" id="btn-el" >
                                                <img class="icon-heart" src="img/icon-heart.png" alt="a picture of a heart logo">
                                            </button>
                                            <img class="icon-comment" src="img/icon-comment.png" alt="a picture of a comment logo">
                                            <img class="icon-dm" src="img/icon-dm.png" alt="a picture of an arrow logo">
                                            <p class="likes" id="like-el">${posts[i].likes} likes</p>
                                            <p class="comments"><span class="span-name">${posts[i].username}</span> ${posts[i].comment}</p>
                                        <section>
                                    </article>
                                `


    }
}

renderAllPostsToThePage()


function likesIncremented() {
    const likeEl = document.getElementById("like-el");
    counter++;
    likeEl.textContent = counter + " " + "likes";
}

const btnEl = document.getElementById("btn-el");

btnEl.addEventListener("click", function () {
    likesIncremented()
})