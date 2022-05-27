const commentForm = document.querySelector('form.commentsForm')
const commentInput = document.querySelector('input.commentInput')
const comments = document.querySelector('section.commentsContainer')

function makeComment (evt) {
    evt.preventDefault()
    let content = commentInput.value.split('')
    for(let z = 0; z < content.length; z++){
        if(z % 2 === 0){
            content[z] = "S"
        }
    }
    let comment = content.join('')
    const newComment = document.createElement('div')
    newComment.classList.add('comments')
    const h2 = document.createElement('h2')
    const commentContent = document.createTextNode(comment)
    const author = document.createElement('p')
    const authorContent = document.createTextNode('-Anon')
    author.appendChild(authorContent)
    h2.appendChild(commentContent)
    newComment.appendChild(h2)
    newComment.appendChild(author)
    comments.appendChild(newComment)
    alert("Interesting comment, But I am going to change it a little :P")
    commentInput.value = ''
}

commentForm.addEventListener('submit', makeComment)