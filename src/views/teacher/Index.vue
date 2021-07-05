<template>
    <div class="container">
        <v-card>
            <v-card-title>
            List Teachers
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
                to="/edit-student"
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
            { text: 'First Name', value: 'firstname' },
            { text: 'Last Name', value: 'lastname' },
            { text: 'Email', value: 'email'},
            { text: 'Phone', value: 'phone',sortable:false},
            { text: 'Class', value: 'class',sortable:false},
            { text: 'Action', value: 'actions' ,sortable: false},
        ],
        desserts: [
          {
            id:1,
            firstname:'da',
            lastname:'duon',
            email: 'da@gmail.com',
            phone:'0987456789',
            class:'12 A',
          },
                    {
            id:2,
            firstname:'srey ta',
            lastname:'sean',
            email: 'sreyta@gmail.com',
            phone:'0987456789',
            class:'12 F',
          },
                    {
            id:3,
            firstname:'soventhy',
            lastname:'leng',
            email: 'soventhy@gmail.com',
            phone:'0987456789',
            class:'12 C',
          },
          
        ],
      }
    },
  }
</script>