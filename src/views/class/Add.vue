<template>
    <div>
        <div id="add-grade">
            <v-card>
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-temperature-celsius
                    </v-icon>
                    <span class="title font-weight-light">Add Class</span>
                </v-card-title>
                <v-form
                    ref="form"
                    lazy-validation
                    style="padding:30px;"
                >
                    <v-text-field
                        label="Class Name"
                        name="name"
                        required
                    ></v-text-field>
                    <v-btn
                        color="info"
                        class="mr-4"
                    >
                    Add New
                    </v-btn>
                    <v-btn
                        class="mr-4"
                        to="/class"
                    >
                    Back
                    </v-btn>
                </v-form>
            </v-card>
        </div>
    </div>
</template>