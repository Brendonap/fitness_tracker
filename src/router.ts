import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/summary",
      name: "summary",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Summary.vue")
    },
    {
      path: "/exercise",
      name: "exercise",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Exercise.vue")
    },
    {
      path: "/workout/:exercise",
      name: "workout",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Workout.vue")
    }
  ]
});
