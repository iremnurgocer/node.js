let posts = [
    { title: 'Post 1', content: 'This is the content of post 1' },
    { title: 'Post 2', content: 'This is the content of post 2' },
    { title: 'Post 3', content: 'This is the content of post 3' }
];


function listPosts() {
    posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title} - ${post.content}`);
    });
}


function addPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);
            resolve();
        }, 1000);
    });
}


async function runBlog() {
    console.log('Postlar sıralanıyor:');
    listPosts();

    console.log('\nYeni post ekleniyor...');
    await addPost({ title: 'Post 4', content: 'This is the content of post 4' });

    console.log('\nYeni post ile postlar tekrar sıralanıyor:');
    listPosts();
}

runBlog();