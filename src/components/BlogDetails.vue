<template>
    <div>
        <div class="card mb-4">
            <div class="card-body">
                <h5>{{ get_blog_details.title }}</h5>
                <p>
                    {{ get_blog_details.description }}
                </p>
            </div>
        </div>
        <comments></comments>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import comments from "./comments.vue";
mapGetters;
export default {
    components: {
        comments,
    },
    computed: {
        ...mapGetters(["get_blog_details"]),
    },
};
</script>

<style></style>
