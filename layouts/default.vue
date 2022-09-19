<template>
<v-app>
    <v-navigation-drawer v-model="menuMobile" dark color="primary" clipped app disable-resize-watcher>
        <CommonTHLogo dark class="ma-6" />
        <v-list>
            <v-list-item exact>
                <v-list-item-content to="/">
                    <v-list-item-title>
                       Inicio
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item exact to="/agenda">
                <v-list-item-content>
                    <v-list-item-title>
                        Agenda
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item exact href="https://experiencia.coadental.com/#/home" target="_blank">
                <v-list-item-content>
                    <v-list-item-title>
                        E-showroom
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item exact to="/expo">
                <v-list-item-content>
                    <v-list-item-title>
                        Expo
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app fixed color="app-bar-th" height="78" dark v-if="!$vuetify.breakpoint.xs">
        <CommonTHLogo dark class="mr-16"  v-if="false"/>
        <img src="/img/Logo_COA.png" width="180" class="mr-16"/>
            <v-btn text dark class="mx-2" to="/">Inicio</v-btn>
            <v-btn text dark class="mx-2" to="/agenda">Agenda </v-btn>
            <v-btn text dark class="mx-2" href="https://experiencia.coadental.com/#/home" target="_blank">E-showroom</v-btn>
            <v-btn text dark class="mx-2" to="/expo">Expo</v-btn>
        <v-spacer/>
        <v-tooltip bottom content-class="bottom" v-if="!this.$vuetify.theme.dark">
                <template v-slot:activator="{ on }">
                    <v-btn icon @click.stop="toggleTheme" v-on="on">
                        <v-icon color="secondary_text_dark" dark>dark_mode</v-icon>
                    </v-btn>
                </template>
                <span>{{ $t('change_to_theme_dark')}}</span>
            </v-tooltip>
            <v-tooltip bottom content-class="bottom" v-else>
                <template v-slot:activator="{ on }">
                    <v-btn icon @click.stop="toggleTheme" v-on="on">
                        <v-icon color="secondary_text" dark>light_mode</v-icon>
                    </v-btn>
                </template>
                <span>{{ $t('change_to_theme_light')}}</span>
            </v-tooltip>
        <v-btn text @click="openLogin" v-if="!user.displayName">
            Ingresar
        </v-btn>
        <v-btn fab class="body-2 mr-3 primary--text" depressed @click="userDrawer = !userDrawer" v-if="user.displayName">
            <v-badge bordered bottom color="success" class="float-right" dot offset-x="10" offset-y="10">
                <CommonAvatar :alt="user.displayName" size="40" />
            </v-badge>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="menuMobile = !menuMobile" class="d-xs-block d-md-none" />
    </v-app-bar>
    <v-app-bar app fixed color="app-bar-th" height="78" dark v-else>
        <CommonTHIcon dark />
        <v-spacer></v-spacer>
        <v-tooltip bottom content-class="bottom" v-if="!this.$vuetify.theme.dark">
                <template v-slot:activator="{ on }">
                    <v-btn icon @click.stop="toggleTheme" v-on="on">
                        <v-icon color="secondary_text_dark" dark>dark_mode</v-icon>
                    </v-btn>
                </template>
                <span>{{ $t('change_to_theme_dark')}}</span>
            </v-tooltip>
            <v-tooltip bottom content-class="bottom" v-else>
                <template v-slot:activator="{ on }">
                    <v-btn icon @click.stop="toggleTheme" v-on="on">
                        <v-icon color="secondary_text" dark>light_mode</v-icon>
                    </v-btn>
                </template>
                <span>{{ $t('change_to_theme_light')}}</span>
            </v-tooltip>
        <v-btn text @click="openLogin" v-if="!user.displayName">
            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn fab class="body-2 mr-3 primary--text" depressed @click="userDrawer = !userDrawer" v-if="user.displayName">
            <v-badge bordered bottom color="success" class="float-right" dot offset-x="10" offset-y="10">
                <CommonAvatar :alt="user.displayName" size="40" />
            </v-badge>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="menuMobile = !menuMobile" class="d-xs-block d-md-none" />
    </v-app-bar>
    <DialogsLogin v-model="loginDialog" @openRegister="openRegister" />
    <DialogsRegister v-model="registerDialog" />
    <LayoutNotificationsDrawer v-model="notificationDrawer" :notifications="notifications" />
    <LayoutUserOptionsDrawer v-model="userDrawer" :user="user" :userName="user.displayName" :userRole="user.role" v-if="user.displayName" />
    <confirm-dialog />
    <snackbar />
    <v-container fluid class="container-default" :class="($vuetify.breakpoint.xs)? 'px-0' : ''">
        <nuxt />
    </v-container>
    <v-footer class="footer-default py-6">
        <v-row>
            <v-col>
                <img src="/img/18-Logo-COA.png" />
            </v-col>
            <v-col class="text-right">
                <img src="/img/ESR_MEM.png" width="250"/>
               
            </v-col>
        </v-row>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            menuMobile: false,
            userDrawer: false,
            loginDialog: false,
            registerDialog: false,
            notificationDrawer: false,
            notifications: []
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
