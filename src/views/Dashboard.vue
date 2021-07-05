<template>
    <div>
      <div class="container">
        <v-app id="inspire">
          <v-app id="inspire">
            <v-navigation-drawer
              v-model="drawer"
              app
            >
              <v-list dense>
                <v-list-item to="/teacher">
                  <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Teachers</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="/student">
                  <v-list-item-action>
                    <v-icon>mdi-account-group</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Students</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="/class">
                  <v-list-item-action>
                    <v-icon>mdi-temperature-celsius</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Class</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="/attendence">
                  <v-list-item-action>
                    <v-icon>mdi-alpha-a-box</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Attendence</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
        
            <v-app-bar
              app
              color="indigo"
              dark
            >
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <v-toolbar-title>Take Attendance Students</v-toolbar-title>
            </v-app-bar>
        
            <v-main>
              <v-container
                class="fill-height"
                fluid
              >
                <v-row
                >
                  <v-col>
                    <router-view class="main-view" name="MainView"></router-view>
                  </v-col>
                </v-row>
              </v-container>
            </v-main>
            <v-footer
              color="indigo"
              app
            >
              <span class="white--text">&copy; {{ new Date().getFullYear() }} Take Attendance Students</span>
            </v-footer>
          </v-app>
        </v-app>
      </div>
    </div>
</template>

<script>
export default {
    props: {
    source: String,
  },

  data: () => ({
    drawer: null,
  }),
}
</script>