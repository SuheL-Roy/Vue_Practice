<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card mb-3" v-for="item in get_blog_list" :key="item.id">
        <div class="card-body" @click="blog_detail(item)" style="cursor: pointer;">
          <h5>{{ item.title }}</h5>
          <p>
            {{ item.description }}
          </p>
        </div>

      </div>
    </div>

    <div class="col-md-6">
      <blog-details :post_comment="post_comment" :selected_comments="selected_comments"></blog-details>


    </div>

  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
import BlogDetails from './BlogDetails.vue';
export default {
  components: { BlogDetails },
  data() {
    return {
      // Blog_list: [
      //   {
      //     id: 1,
      //     title: 'blog1',
      //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit1.'
      //   },
      //   {
      //     id: 2,
      //     title: 'blog2',
      //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit2.'
      //   },
      //   {
      //     id: 3,
      //     title: 'blog3',
      //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit3.'
      //   },
      //   {
      //     id: 4,
      //     title: 'blog4',
      //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit4.'
      //   },
      //   {
      //     id: 5,
      //     title: 'blog5',
      //     description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit5.'
      //   }

      // ],
      // Blog_details: {
      //   title: '',
      //   description: ''
      // },
      comments: [
        {
          id: 1,
          blog_id: 1,
          name: 'Rahim',
          description: 'somthing went wrong'
        },
        {
          id: 2,
          blog_id: 2,
          name: 'Karim',
          description: 'somthing went wrong'
        },
        {
          id: 3,
          blog_id: 3,
          name: 'jaman',
          description: 'somthing went wrong'
        },
        {
          id: 4,
          blog_id: 3,
          name: 'Bravo',
          description: 'somthing went wrong'
        },

        {
          id: 5,
          blog_id: 4,
          name: 'Bravo45',
          description: 'somthing went wrong'
        },
        {
          id: 6,
          blog_id: 5,
          name: 'Bravo34',
          description: 'somthing went wrong'
        },
      ],
      selected_comments: [],
    };

  },
  computed: {
    ...mapGetters([
      'get_blog_list'
    ])
  },

  methods: {
    ...mapActions(['blog_detail']),

    // get_blog_details(blog) {
    //   this.Blog_details = blog;
    //   this.get_comments(blog.id);

    // },
    // get_comments(blog_id) {
    //   this.selected_comments = this.comments.filter((item) => item.blog_id === blog_id);
    // },
    // post_comment(comment) {
    //   comment.id = this.comments.length + 1
    //   // this.selected_comments.shift(comment)
    //   this.comments.unshift(comment)
    //   this.get_comments(comment.blog_id);
    //   console.log(comment);
    // }
  },
};
</script>
