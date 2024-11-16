document.querySelector('.create-post input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const postText = e.target.value.trim();
      if (postText) {
        const feed = document.querySelector('.feed');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
          <div class="post-header">
            <img src="https://via.placeholder.com/40" alt="User Picture">
            <span class="username">You</span>
          </div>
          <div class="post-content">
            <p>${postText}</p>
          </div>
          <div class="post-actions">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>`;
        feed.prepend(newPost);
        e.target.value = '';
      }
    }
  });
  