<template>
    <v-app>
        <v-navigation-drawer v-model="menuMobile" dark clipped app disable-resize-watcher>
            <CommonTHLogo dark class="ma-16"  v-if="false"/>
        <img src="/img/Logo_COA.png" width="180" class="ma-16"/>
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
        <v-navigation-drawer v-model="menuRooms" app temporary clipped disable-resize-watcher>
            <h3 class="title mt-8 ml-4 mb-8">Salas</h3>
        <v-list>
           
            <v-list-item v-for="item in rooms" :key="item.img" :to="item.to">
                <v-list-item-content>
                    <v-list-item-title>
                    <v-avatar :color="item.color" size="40" class="pa-2">
                        <v-img :src="'/img/rooms/'+item.img" width="20" contain></v-img>
                    </v-avatar>                   
                         {{item.name}}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>
        </v-navigation-drawer>
        <v-app-bar app  color="app-bar-th" height="78" dark>
            <CommonTHLogo dark class="mr-16"  v-if="false"/>
        <img src="/img/Logo_COA.png" width="180" class="mr-16"/>
            <v-toolbar-title>
               <a href="/" text> <v-img :src="logo" height="35" contain ></v-img></a>
            </v-toolbar-title>
            <v-btn text dark class="mx-2" to="/">Inicio</v-btn>
            <v-btn text dark class="mx-2" to="/agenda">Agenda </v-btn>
            <v-btn text dark class="mx-2" href="https://experiencia.coadental.com/#/home" target="_blank">E-showroom</v-btn>
            <v-btn text dark class="mx-2" to="/expo">Expo</v-btn>
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
        <v-main>
            <v-container fluid class="pa-0">
                <v-btn fab small absolute @click="menuRooms = !menuRooms" class="mt-5 ml-5">
                    <v-icon>menu</v-icon>
                </v-btn>
                <nuxt />
            </v-container>
        </v-main>    
    </v-app>
    </template>
    
    <script>
    
    export default {
        middleware: 'auth',
        data() {
            return {
                menuMobile: false,
                userDrawer: false,
                menuRooms: false,
                rooms: [{
                    name: 'Prostodoncia',
                    img: 'prostodoncia.png',
                    color: '#94C01F',
                    to: '/salas/prostodoncia'
                },
                {
                    name: 'Operatoria / Estética',
                    img: 'operatoria_dental.png',
                    color: '#941B80',
                    to: '/salas/operatoria'
                },
                {
                    name: 'Periodoncia e Implantología',
                    img: 'periodoncia_e_implantologia.png',
                    color: '#E5332A',
                    to: '/salas/periodoncia'
                },
                {
                    name: 'Odontopediatría',
                    img: 'odontopediatria.png',
                    color: '#36A8E0',
                    to: '/salas/odontopediatria'
                },
                {
                    name: 'Endodoncia',
                    img: 'endodoncia.png',
                    color: '#868686',
                    to: '/salas/endodoncia'
                },
                {
                    name: 'Práctica estudiantil',
                    img: 'practica_estudiantil.png',
                    color: '#F29100',
                    to: '/salas/practica'
                }
            ]
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
    