<template>
<v-app>
    <v-navigation-drawer v-model="menuMobile" dark clipped app disable-resize-watcher>
        <v-img :src="logo" contain height="30" class="ma-6" />
        <v-list>
            <v-list-item exact>
                <v-list-item-content @click="openSimposio()">
                    <v-list-item-title >
                        El evento
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item exact v-scroll-to="{ el: '#agenda', offset: -100 }">
                <v-list-item-content>
                    <v-list-item-title>
                        Agenda
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item exact v-scroll-to="{ el: '#speakers', offset: -100 }">
                <v-list-item-content>
                    <v-list-item-title >
                        Speakers
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
             <v-list-item exact @click="openInscripcion()">
                <v-list-item-content>
                    <v-list-item-title >
                        Inscríbete
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed color="app-bar-th" height="78" dark>
        <CommonTHLogo dark class="mr-16" />
        <v-toolbar-title>
           <a href="/" text> <v-img :src="logo" height="35" contain ></v-img></a>
        </v-toolbar-title>
        <v-btn text dark class="mx-2" to="/">Evento</v-btn>
        <v-btn text dark class="mx-2" to="/agenda" >Agenda </v-btn>
        <v-btn text dark class="mx-2" to="/eshowroom">Showroom</v-btn>
        <v-btn text dark class="mx-2" to="/expo" >Expo</v-btn>
        <v-spacer />
        <v-tooltip bottom content-class="bottom" v-if="!this.$vuetify.theme.dark">
            <template v-slot:activator="{ on }">
                <v-btn icon @click.stop="toggleTheme" v-on="on">
                    <v-icon color="secondary_text_dark" dark>dark_mode</v-icon>
                </v-btn>
            </template>
            <span>{{ $t('change_to_theme_dark')}}</span>
        </v-tooltip>
        <v-btn fab class="body-2 mr-3 primary--text" depressed @click="userDrawer = !userDrawer">
            <v-badge bordered bottom color="success" class="float-right" dot offset-x="10" offset-y="10">
                <CommonAvatar :alt="user.displayName" size="40" />
            </v-badge>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="menuMobile = !menuMobile" class="d-md-none" />
    </v-app-bar>
    <LayoutNotificationsDrawer v-model="notificationDrawer" :notifications="notifications" />
    <LayoutUserOptionsDrawer v-model="userDrawer" :user="user" :userName="user.displayName" :userRole="user.role" />
    <confirm-dialog />
        <v-container class="container-default">
            <nuxt />
        </v-container>
  
</v-app>
</template>

<script>

export default {
    middleware: 'auth',
    data() {
        return {
            menuMobile: false,
            userDrawer: false,
        }
    },
    computed: {
        user() {
            return this.$store.state.authUser;
        }
    },
    methods: {
        openRegister() {
            this.registerDialog = true
        },
        openLogin() {
            this.loginDialog = true
        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString())
        },
        toggleThemeDark() {
            this.$vuetify.theme.dark = true
        },
        logout() {
            this.$store.dispatch('users/logout').then(result => {
                window.location.href = '/'
            }, error => {
            //    console.log(error)
            })
        }
    }

}
</script>
