<template>
    <v-sheet>
        <v-parallax src="/img/annar_bg.jpg" class="parallax-hero">
            <v-row justify="center" class="flex-column align-center fill-height">
                <v-sheet class="transparent py-12 text-center" width="100%">
                    <v-img class="mb-2" :src="logo" height="190" contain />
                    <h4 class="secondary--text mb-6">¡Con ANNAR, Alcanza el MÁXIMO nivel en la CALIDAD!</h4>
                    <Countdown deadline="November 24, 2020, 8:00" v-if="false"></Countdown>
                    <h4 class="card-date secondary--text">
                        <font-awesome-icon :icon="['far', 'calendar']" /><br>
                        24 al 27 NOV<br>
                        <font-awesome-icon :icon="['far', 'clock']" /><br>
                        8 a<br>
                        17 HS
                    </h4>
                    <v-btn color="primary" class="mt-6 px-8 py-5 btn-evento rounded" tile depressed @click="handleEvent('/evento')">
                        Entrar al evento
                    </v-btn>
                </v-sheet>
            </v-row>
        </v-parallax>
        <v-container class="principal" id="simposio">
            <v-row justify="space-between">
                <v-col cols="12" md="6" class="pa-6">
                    <h4 class="text-center primary--text">¿A quién va dirigido?</h4>
                    <p class="text-center py-3 px-8">
                        Invitamos a participar de este simposio a todos los profesionales de las industrias altamente
                        reguladas que tienen laboratorio de control de calidad en los sectores farmacosmético, alimentos
                        y bebidas, análisis a terceros, entes regulatorios y centros de investigación.
                    </p>
                    <h4 class="text-center primary--text">Alcance</h4>
                    <p class="text-center py-3 px-8">
                        Profesionales de las áreas de microbiología, fisicoquímica, investigación y desarrollo, control de
                        calidad, gerencia de compras y gerencia general.
                    </p>
                </v-col>
                <v-col cols="12" md="6" class="text-center">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NMnWt8peJSc?controls=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="primary my-5">
            <v-container class="principal" id="speakers">
                <speakers />
            </v-container>
        </v-container>
        <v-container class="principal">
            <v-row justify="center" class="mt-10">
                <v-col cols="12" class="pb-12">
                    <h3 class="primary--text text-center">Socios comerciales</h3>
                </v-col>
                <v-col cols="12">
                    <v-container>
                        <v-row justify="center" class="px-2 text-center align-center">
                            <v-col cols="9" md="3"><img src="/img/logos/CHR-Magar4.png" contain height="70" alt="CHR Magar"></v-col>
                            <v-col cols="9" md="3"><img src="/img/logos/Microbiologics4.png" contain height="70" alt="Microbiologics"></v-col>
                            <v-col cols="9" md="3"><img src="/img/logos/Scharlab4.jpg" contain height="70" alt="Scharlab"></v-col>
                        </v-row>
                        <v-row justify="center" class="text-center align-center">
                            <v-col cols="6" md="2"><img src="/img/logos/qiagen.jpg" contain height="70" alt="Qiagen"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/alliance.jpg" contain height="70" alt="Alliance"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/ad-bio.jpg" contain height="70" alt="ad-bio"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/copan.jpg" contain height="70" alt="Copan"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/nuve.jpg" contain height="70" alt="nuve"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/seegene.jpg" contain height="70" alt="Seegene"></v-col>
                        </v-row>
                        <v-row justify="center" class="text-center align-center">
                            <v-col cols="6" md="2"><img src="/img/logos/vircell.jpg" contain height="70" alt="Vircell"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/corning.jpg" contain height="70" alt="Corning"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/axygen.jpg" contain height="70" alt="Axygen"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/pncq.jpg" contain height="70" alt="PNCQ"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/liofilchen.jpg" contain height="70" alt="liofilchem"></v-col>
                            <v-col cols="6" md="2"><img src="/img/logos/biovision.jpg" contain height="70" alt="Biovision"></v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="primary my-5">
            <v-container class="principal">
                <v-row class="pa-4" justify="space-between">
                    <v-col cols="12" md="9">
                        <h3 class="white--text mb-3">
                            !Con ANNAR, Alcanza el MÁXIMO nivel en la CALIDAD! Normatividad + Trazabilidad + Productividad
                        </h3>
                        <p class="white--text">Gracias por tu interés en participar en nuestro evento, por favor ten en cuenta que se trata de un evento dirigido a clientes actuales ANNAR, por lo cual la información alojada en este formulario será sometida a validación.
                        </p>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-btn color="black" class="mt-6 px-8 py-5 rounded" dark tile depressed @click="openInscripcion()">
                            Inscríbete
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <login-dialog v-model="loginDialog" :eventRouteNew="eventRouteNew" @modified="closeDialog" />
    
        <inscripcion v-model="inscripcionDialog" @modified="closeDialog" />
    </v-sheet>
    </template>
    
    <script>
    
    import {
        mapGetters
    } from 'vuex'
    
    export default {
        layout: 'evento',
        data() {
            return {
                agenda: null,
                inscripcionDialog: false,
                loginDialog: false,
                logo: "/img/Annar-white.png",
                eventRoute: '',
                eventRouteNew: ''
            }
        },
        computed: {
            ...mapGetters({
                user_me: 'users/me',
            }),
        },
        methods: {
            openInscripcion() {
                this.inscripcionDialog = true
            },
            closeDialog(val) {
                this.inscripcionDialog = val
                this.loginDialog = val
            },
            handleEvent(eventRoute) {
                let routeData = this.$nuxt.$router.resolve({ name: eventRoute });
                if (this.user_me != null) {
                    switch (eventRoute) {
                        case '/evento':
                            this.$nuxt.$router.push('/evento');
                            break;
                        case '/conferencias/sala1':
                            this.$nuxt.$router.push('/conferencias/sala1');
                            break;
                        case '/conferencias/sala2':
                            this.$nuxt.$router.push('/conferencias/sala2');
                            break;
                        case '/networking':
                            this.$nuxt.$router.push('/networking');
                            break;
                    }
                } else {
                    this.eventRouteNew = eventRoute
                    this.loginDialog = true
                }
            }
        }
    }
    </script>
    