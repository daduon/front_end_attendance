<template>
    <div class="container">
        <div class="my-2">
          <v-btn color="primary" to="/add-class" >Add New</v-btn>
        </div>
        <v-card>
          <v-card-title>
            List Class
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          >
              <template v-slot:[`item.actions`]="{ item }">
                  <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                  color="warning"
                  
                  >
                  mdi-pencil
                  </v-icon>
                  <v-icon
                  small
                  @click="deleteItem(item)"
                  color="red"
                  >
                  mdi-delete
                  </v-icon>
              </template>
          </v-data-table>
        </v-card>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
            { text: 'Id', value: 'id',sortable:false},
            { text: 'Class', value: 'class',sortable:false},
            { text: 'Action', value: 'actions' ,sortable: false},
        ],
        desserts: [
          {
            id:1,
            class:'12 A',
          },
                    {
            id:2,
            class:'12 B',
          },
                    {
            id:3,
            class:'12 C',
          },
          
        ],
      }
    },
  }
</script>