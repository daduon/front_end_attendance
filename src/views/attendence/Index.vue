<template>
    <div>
        <div class="container" id="attend">
            <div class="row">
                <div class="col-3">
                    <v-card
                        max-width="200"
                    >
                        <v-card-text>
                            <h3 style="color:#007bff;">
                                Student Presence
                            </h3>
                            <hr class="my-3">
                            <h3>Students Total: 3</h3>
                            <v-btn class="my-2" to="/detail-attendence" small outlined color="indigo">Detials <v-icon x-small>mdi-arrow-right</v-icon> </v-btn>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="col-3">
                    <v-card
                        max-width="200"
                    >
                        <v-card-text>
                            <h3 style="color:#ffc107;">
                                Student Absent
                            </h3>
                            <hr class="my-3">
                            <h3>Students Total: 3</h3>
                            <v-btn class="my-2" to="/detail-attendence" small outlined color="indigo">Detials <v-icon x-small>mdi-arrow-right</v-icon> </v-btn>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </div>
        <div class="container">
            <v-card
            >
                <v-card-title>
                    <h3>Take Attendence in</h3>
                    <span class="mx-3">2021</span>
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
                    <template v-slot:[`item.attendence`]="{ item }">
                        <div class="d-flex">
                            <v-form
                                style="margin:7px;"
                            >
                                <v-btn 
                                    type="submit" 
                                    icon 
                                >
                                    <v-icon
                                        size="30"
                                        class="mr-2"
                                        color="success"
                                        style="margin:0px 10px;"
                                        @click="getId(item.id)"
                                    >
                                        mdi-checkbox-marked-circle
                                    </v-icon>
                                </v-btn>

                            </v-form>

                            <v-form
                                @submit.prevent="absent"
                                style="margin:7px;"
                            >
                                <v-btn type="submit" icon >
                                    <v-icon
                                        size="30"
                                        color="red"
                                        @click="getId(item.id)"
                                    >
                                        mdi-cancel
                                    </v-icon>
                                </v-btn>
                            </v-form>
                        </div>
                    </template>
                </v-data-table>
            </v-card>
        </div>
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
            { text: 'Presence & Absent', value: 'attendence' ,sortable: false},
        ],
        desserts: [
          {
            id:1,
            firstname:'da',
            lastname:'duon',
            student_id:16,
            address: 'pp',
          },
                    {
            id:2,
            firstname:'srey ta',
            lastname:'sean',
            student_id:20,
            address: 'pp',
          },
                    {
            id:3,
            firstname:'soventht',
            lastname:'leng',
            student_id:36,
            address: 'pp',
          },
          
        ],
      }
    },
  }
</script>