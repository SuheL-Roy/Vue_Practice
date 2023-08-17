import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    Blog_list: [
      {
        id: 1,
        title: "blog1",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit1.",
      },
      {
        id: 2,
        title: "blog2",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit2.",
      },
      {
        id: 3,
        title: "blog3",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit3.",
      },
      {
        id: 4,
        title: "blog4",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit4.",
      },
      {
        id: 5,
        title: "blog5",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit5.",
      },
    ],
    Blog_details: {
      title: "",
      description: "",
    },
    comments: [
      {
        id: 1,
        blog_id: 1,
        name: "Rahim",
        description: "somthing went wrong",
      },
      {
        id: 2,
        blog_id: 2,
        name: "Karim",
        description: "somthing went wrong",
      },
      {
        id: 3,
        blog_id: 3,
        name: "jaman",
        description: "somthing went wrong",
      },
      {
        id: 4,
        blog_id: 3,
        name: "Bravo",
        description: "somthing went wrong",
      },

      {
        id: 5,
        blog_id: 4,
        name: "Bravo45",
        description: "somthing went wrong",
      },
      {
        id: 6,
        blog_id: 5,
        name: "Bravo34",
        description: "somthing went wrong",
      },
    ],
    selected_comments: [],
  },

  getters: {
    get_blog_list: (state) => state.Blog_list,
    get_blog_details: (state) => state.Blog_details,
    get_comments_list: (state) => state.comments,
    get_selected_comment_list: (state) => state.selected_comments,
  },

  mutations: {
    set_post_comment: (state, comment) => {
      comment.id = state.comments.length + 1;
      // this.selected_comments.shift(comment)
      state.comments.unshift(comment);
      // state.get_comments(comment.blog_id);
       console.log(comment);
    },

    set_blog_details: (state, blog) => {
      state.Blog_details = blog;
      // this.get_comments(blog.id);
      // console.log(blog);
    },
    set_comments: (state, blog_id) => {
      state.selected_comments = state.comments.filter(
        (item) => item.blog_id === blog_id
      );
    },
  },
  actions: {
    blog_detail(state, blog) {
      this.commit("set_blog_details", blog);
      this.commit("set_comments", blog.id);
    },
    post_comment(state, comment){
      this.commit("set_post_comment", comment);
      this.commit('set_comments',comment.blog_id);
    }
  },
});
