<template>
    <section id="portfolio">
        <v-card>
            <v-card-title class="font-exan section">
                <h1>Portfolio</h1>
            </v-card-title>
        </v-card>
        <br />
        <v-sheet class="mx-auto" elevation="8" min-height="340">
            <v-slide-group
                class="py-4 px-0"
                active-class="success"
                show-arrows="desktop"
            >
                <v-slide-item v-for="(project, key) in projects" :key="key">
                    <v-card
                        light
                        class="ma-4"
                        :width="cardWidth"
                        elevation="8"
                    >
                        <a
                            target="_blank"
                            :href="`/images/portfolio/${project.img}`"
                        >
                            <v-img
                                :src="`/images/portfolio/${project.img}`"
                            ></v-img>
                        </a>

                        <v-card-title class="font-exan">{{
                            project.title
                        }}</v-card-title>

                        <v-card-subtitle v-if="project.subtitle">
                            {{ project.subtitle }}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn
                                v-if="project.link"
                                text
                                :href="project.link"
                                target="_blank"
                            >
                                Link
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn icon @click="show = !show">
                                <v-icon>{{
                                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                                }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>

                                <v-card-text v-if="project.developments">
                                    <span class="font-weight-bold"
                                        >Developments:
                                    </span>
                                    <ul
                                        v-for="(
                                            development, key1
                                        ) in project.developments"
                                        :key="key1"
                                    >
                                        {{
                                            development
                                        }}
                                    </ul>
                                </v-card-text>

                                <v-card-text v-if="project.features">
                                    <span class="font-weight-bold"
                                        >Features:
                                    </span>
                                    <ul
                                        v-for="(
                                            feature, key2
                                        ) in project.features"
                                        :key="key2"
                                    >
                                        {{
                                            feature
                                        }}
                                    </ul>
                                </v-card-text>

                                <v-card-text v-if="project.stacks">
                                    <span class="font-weight-bold"
                                        >Technologies</span
                                    >: {{ project.stacks }}
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </section>
</template>

<script>
import portfolio from "@/static/data/portfolio.json";

export default {
    methods: {
        preview(project) {
            console.log(project);
            this.selectedImg = project.img;
        },
    },
    computed: {
        cardWidth() {
            return this.$vuetify.breakpoint.mobile ? "280px" : "500px";
        },
    },
    data() {
        return {
            show: false,
            selectedImg: null,
            projects: portfolio,
        };
    },
};
</script>

<style lang="scss" scoped>
.v-card__title.section {
    background-color: #041b2b;
    border-top: medium ridge #a2f7f6;
    border-bottom: medium ridge #a2f7f6;
}

.v-card__text {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
    text-shadow: none;
}
</style>
