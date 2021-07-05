import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";

// teacher
import Teacher from '../views/teacher/Index.vue';
import EditTeacher from '../views/teacher/Edit.vue';

// student
import Student from '../views/student/Index.vue';
import AddStudent from '../views/student/Add.vue';
import EditStudent from '../views/student/Edit.vue';
import ShowStudent from '../views/student/Show.vue';
// class
import Class from '../views/class/Index.vue';
import AddClass from '../views/class/Add.vue';
import EditClass from '../views/class/Edit.vue';

import Att from '../views/attendence/Index.vue';
import DetailAtt from '../views/attendence/DetailAttendence.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children:[
      {
        path: "/teacher",
        name: "Teacher",
        components: {
          default: Dashboard,
          MainView: Teacher,
        }
      },
      {
        path: "/edit-teacher",
        name: "EditTeacher",
        components: {
          default: Dashboard,
          MainView: EditTeacher,
        }
      },
      {
        path: "/student",
        name: "Student",
        components: {
          default: Dashboard,
          MainView: Student,
        }
      },
      {
        path: "/show-student",
        name: "ShowStudent",
        components: {
          default: Dashboard,
          MainView: ShowStudent,
        }
      },
      {
        path: "/add-student",
        name: "AddStudent",
        components: {
          default: Dashboard,
          MainView: AddStudent,
        }
      },
      {
        path: "/edit-student",
        name: "EditStudent",
        components: {
          default: Dashboard,
          MainView: EditStudent,
        }
      },
      {
        path: "/class",
        name: "Class",
        components: {
          default: Dashboard,
          MainView: Class,
        }
      },
      {
        path: "/add-class",
        name: "AddClass",
        components: {
          default: Dashboard,
          MainView: AddClass,
        }
      },
      {
        path: "/edit-class",
        name: "EditClass",
        components: {
          default: Dashboard,
          MainView: EditClass,
        }
      },
      {
        path: "/attendence",
        name: "Att",
        components: {
          default: Dashboard,
          MainView: Att,
        }
      },
      {
        path: "/detail-attendence",
        name: "DetailAttend",
        components: {
          default: Dashboard,
          MainView: DetailAtt,
        }
      },
      // {
      //   path: "/about",
      //   name: "About",
      //   component: () =>
      //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
      // },
    ]
  },

];

const router = new VueRouter({
  routes,
});

export default router;
