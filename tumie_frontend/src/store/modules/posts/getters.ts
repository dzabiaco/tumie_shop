export default {
    posts(state:any){
        return state.posts;
    },
    hasPosts(state: any){
        return state.posts && state.posts.length > 0;
    },
    selectedPost(state: any){
        return state.selectedPost;
    },
    relatedPosts(state: any){
        return state.relatedPosts;
    }
}