<template>
<v-app class="bg-image">
    <Nuxt />
    <snackbar />
</v-app>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        const theme = localStorage.getItem("useDarkTheme");
        if (theme) {
            if (theme == "true") {
                setTimeout(() => {
                    this.toggleThemeDark()
                }, 500)
            }
        }
    },
    methods: {
        toggleThemeDark() {
            this.$vuetify.theme.dark = true
        },
    }
}
</script>
<style>

.bg-image {
  background: url(/bg.png), linear-gradient(134.28deg, #5818E0 20.62%, #1B192D 110.26%)  !important;
}
</style>

