<template>
    <div>
        <div id="add-class">
            <v-card>
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-account-group
                    </v-icon>
                    <span class="title font-weight-light">Update Student</span>
                </v-card-title>
                <v-form
                    ref="form"
                    lazy-validation
                    style="padding:30px;"
                >
                    <v-text-field
                        v-model="form.firstname"
                        label="First Name"
                        name="firstname"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="form.lastname"
                        label="Last Name"
                        name="lastname"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="form.student_id"
                        label="Student ID"
                        name="student_id"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="form.address"
                        label="Address"
                        name="address"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="form.phone"
                        label="Phone"
                        name="phone"
                        required
                    ></v-text-field>

                    <v-select
                        :items="getClass"
                        item-text="name"
                        item-value="id"
                        label="Select Class"
                    ></v-select>
                    <v-btn
                        color="info"
                        class="mr-4"
                    >
                    Update
                    </v-btn>
                    <v-btn
                        class="mr-4"
                        to="/student"
                    >
                    Back
                    </v-btn>
                </v-form>
            </v-card>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        form:{
            firstname:'da',
            lastname:'duon',
            student_id:'016',
            address:'Banteay Meanchey',
            phone:'0888 662 304',
        },
        getClass:[
            {
                name:'12 A',
            },
                        {
                name:'12 F',
            },
                        {
                name:'12 C',
            }
        ]
      }
    },
  }
</script>