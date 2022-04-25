export default {
    loadPosts(state: any, payload: any){
        state.posts = payload;
    },
    loadPost(state: any, payload: any){
        state.selectedPost = payload;
    },
    loadRelatedPosts(state: any, payload: any){
        state.relatedPosts = payload;
    }
}