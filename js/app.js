fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setComment(data))

const setComment = (comments) => {
    // console.log(comments)
    const commentContainer = document.getElementById('div-container')
    for (const comment of comments) {
        // console.log(comment)
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = `
            <div class = "border border-1 rounded bg-light py-3 px-2 w-75 mx-auto mb-2">
                <h2 class = "fw-bold text-success">${comment.id}</h2>
                <h3 class = "text-primary my-3">${comment.title}</h3> 
                <p>${comment.body}</p> 
            </div>

        `;

        commentContainer.appendChild(commentDiv)
    }
}