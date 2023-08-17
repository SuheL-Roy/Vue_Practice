<template>
    <div v-if="get_blog_details && get_blog_details.id">
        <div class="form-group">
            <label for="">Name</label>
            <input v-model="comments.name" class="form-control" />
        </div>

        <div class="form-group">
            <label for="">Comment</label>
            <textarea v-model="comments.description" class="form-control"></textarea>
        </div>
        <div class="form-group mt-2">
            <button @click="comment_submit" class="btn btn-sm btn-success">
                submit
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
mapGetters
export default {

    data() {
        return {
            comments: {
                blog_id: "",
                name: "",
                description: "",
            },
        };
    },
    computed: {
        ...mapGetters([
            'get_blog_details'
        ])
    },
    methods: {
        ...mapActions([
            'post_comment'
        ]),
        comment_submit() {
            this.comments.blog_id = this.get_blog_details.id;
            this.post_comment(this.comments);
            this.comments = {
                blog_id: '',
                name: '',
                description: ''
            }
        },
    },
};
</script>

<style></style>
