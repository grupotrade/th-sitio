<template>
<img class="THLogo" alt="ebooking" :src="$vuetify.theme.dark || dark ? '/THLogo_dark.svg' : '/THLogo.svg'">
</template>

<script>
export default {
    name: 'logo-th',
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.THLogo {
    width: 180px;
}
</style>
