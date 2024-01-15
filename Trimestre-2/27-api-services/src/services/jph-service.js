

async function getFromJph(path, query){
    const queryStr = new URLSearchParams(query);
    const url = `https://jsonplaceholder.typicode.com/${path}?${queryStr}`;
    const response = await fetch(url);
    return response.json();
};

export async function getPosts(){
    return getFromJph('/posts');
};

export async function getPostsId(id){
    return getFromJph(`/posts/${id}`);
};

export async function getCommentsFromPost(postId){
    return getFromJph(`/posts/${postId}/comments`);
};


