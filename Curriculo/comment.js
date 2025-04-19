function addCommentToContainer(event) {
    event.preventDefault();
    const commentUsername = document.querySelector('#comment-username-input');
    const commentContent = document.querySelector('#comment-content-input');
    if (commentContent.value === '') {
        return;
    }
    const commentsList = document.querySelector('#comments-list');

    const newCommentLi = document.createElement('li');

    const newCommentContainerDiv = document.createElement('div');
    newCommentContainerDiv.classList.add('comment-container');
    newCommentLi.appendChild(newCommentContainerDiv);

    const newCommentUsernameDiv = document.createElement('div');
    newCommentUsernameDiv.classList.add('comment-username');
    newCommentUsernameDiv.textContent = commentUsername.value;
    newCommentContainerDiv.appendChild(newCommentUsernameDiv);
    
    const newCommentContentDiv = document.createElement('div');
    newCommentContentDiv.classList.add('comment-content');
    newCommentContentDiv.textContent = commentContent.value;
    newCommentContainerDiv.appendChild(newCommentContentDiv);

    commentsList.appendChild(newCommentLi);
    commentContent.value = '';
    window.scrollTo(0, document.body.scrollHeight);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#comment-form').addEventListener('submit', addCommentToContainer);
    document.addEventListener('keydown', (event) => {
        const commentUsername = document.querySelector('#comment-username-input');
        const commentContent = document.querySelector('#comment-content-input');
        if (event.key === 'Enter' && document.activeElement === commentContent) {
            addCommentToContainer(event);
        } else if (event.key === 'Enter' && document.activeElement === commentUsername) {
            document.activeElement = commentContent;
        }
    });
});