<template>
    <div>
        <div class="container">
            <v-btn class="my-2" color="primary" to="/attendence"><v-icon x-small>mdi-arrow-left</v-icon> Back</v-btn>
            <v-card
            >
                <h3 style="padding:30px;" >List Student Present</h3>
                <hr>

                <v-toolbar
                    flat
                    color="transparent"
                    style="padding:20px 0px;"
                >
                    <v-text-field
                        append-icon="mdi-magnify"
                        label="Search by first name..............."
                        single-line
                    ></v-text-field>
                </v-toolbar>

                <v-list three-line 
                    >
                    <v-list-item 
                        
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                <v-row>
                                    <v-col cols="12">
                                        <h4>Date: 2021</h4>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <span class="label-stu">Fist Name:</span>
                                        <span>da</span>
                                    </v-col>
                                    <v-col cols="3">
                                        <span class="label-stu">Last Name:</span> 
                                        <span>duon</span>
                                    </v-col>
                                    <v-col cols="3">
                                        <span class="label-stu">Address:</span> 
                                        <span>Benteay Meanchey</span>
                                    </v-col>
                                    <v-col cols="3">
                                        <span class="label-stu">Phone:</span>   
                                        <span>0888662304</span> 
                                    </v-col>
                                </v-row>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>