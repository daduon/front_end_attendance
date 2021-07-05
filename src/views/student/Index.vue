<template>
  <div class="container">
      <div class="my-2">
        <v-btn color="primary" to="/add-student" >Add New</v-btn>
      </div>
      <v-card>
        <v-card-title>
          List Students
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
                @click="showItem(item)"
                color="teal"
                class="mr-2"
                >
                mdi-eye
                </v-icon>
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
            { text: 'Student Id', value: 'student_id' },
            { text: 'Address', value: 'address'},
            { text: 'Phone', value: 'phone',sortable:false},
            { text: 'Class', value: 'class',sortable:false},
            { text: 'Action', value: 'actions' ,sortable: false},
        ],
        desserts: [
          {
            id:1,
            firstname:'da',
            lastname:'duon',
            student_id:16,
            address: 'pp',
            phone:'0987456789',
            class:'12 A',
          },
                    {
            id:2,
            firstname:'srey ta',
            lastname:'sean',
            student_id:20,
            address: 'pp',
            phone:'0987456789',
            class:'12 F',
          },
                    {
            id:3,
            firstname:'soventht',
            lastname:'leng',
            student_id:36,
            address: 'pp',
            phone:'0987456789',
            class:'12 C',
          },
          
        ],
      }
    },
  }
</script>