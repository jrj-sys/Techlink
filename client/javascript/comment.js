async function commentFormHandler(e) {
  e.preventDefault();

  const comment_text = document.querySelector('#comment').value.trim();
  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
  if (comment_text && post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form .btn').addEventListener('click', commentFormHandler);