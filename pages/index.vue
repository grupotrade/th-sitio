<template>
<v-sheet>
    <v-sheet class="hero my-8 mx-4">
        <v-row dense>
            <v-col cols="12" lg="6">
                <v-sheet color="transparent" class="py-8 px-12">
                    <h1 class="white--text mb-6">Bienvenidos a <br />Experiencia COA Dental</h1>
                <h4 class="white--text">Encontrá las mejores marcas<br /> y contenidos exclusivos</h4>
                <Countdown deadline="November 24, 2020, 8:00" v-if="false"></Countdown>
                <v-btn color="secondary" class="mt-6 px-8 py-5 btn-evento rounded" tile depressed @click="openLogin()" v-if="!user.displayName">
                    Iniciar sesión
                </v-btn>
                </v-sheet>
                
            </v-col>
            <v-col cols="6" v-if="$vuetify.breakpoint.lgAndUp">
                <img src="/img/hero.png" class="hero-img"  />
            </v-col>
        </v-row>
    </v-sheet>
    <v-container fluid id="productos" class="px-4">
        <v-col cols="12" class="pb-12">
            <h3 class="primary--text text-center"><span class="secondary--text">Productos</span> destacados</h3>
        </v-col>
        <v-row>
            <v-col cols="12" lg="3" v-for="item in products" :key="item">
                <v-card elevation="4" rounded class="py-3">
                    <v-img :src="'img/products/'+item.img"></v-img>
                    <v-card-text>
                        <h4 class="py-3">{{item.name}}</h4>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" rounded depressed v-if="user.displayName" class="px-4">
                            Ver más
                        </v-btn>
                        <v-btn color="primary" rounded depressed @click="openLogin" v-else class="px-4">
                            Iniciar sesión
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container fluid id="marcas" class="px-4">
        <v-row justify="center" class="mt-10">
            <v-col cols="12" class="pb-12">
                <h3 class="primary--text text-center"><span class="secondary--text">Encontrá las</span> mejores marcas</h3>
            </v-col>
            <v-slide-group v-model="model" class="px-8" show-arrows>
                <v-slide-item v-for="(item, i) in brands" :key="i" class="pa-1">
                    <v-img :src="'img/brands/'+item.img" width="200"  class="mx-8"></v-img>
                </v-slide-item>
            </v-slide-group>

        </v-row>
    </v-container>
    <v-container fluid id="salas" class="px-4">
        <v-col cols="12" class="pb-12">
            <h3 class="primary--text text-center"><span class="secondary--text">Visitá nuestras</span> salas 360°</h3>
        </v-col>
        <v-row justify="center">
            <v-col cols="6" lg="2" v-for="item in rooms" :key="item" class="text-center">
                <v-avatar :color="item.color" class="pa-4" width="80" height="80">
                    <v-img :src="'img/rooms/'+item.img" width="50" contain></v-img>
                   
                </v-avatar>
                <h5 class="text-center mt-3" :style="'color:'+item.color">{{item.name}}</h5>
            </v-col>
        </v-row>
    </v-container>
    <v-container fluid class="primary mt-5 pa-4">
       
            <v-row class="pa-4" justify="space-between">
                <v-col cols="12" md="9">
                    <h3 class="white--text mb-3">
                        Conocé nuestras <br />capacitaciones
                    </h3>
                    <p class="white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus error tempore earum quod dicta officia numquam natus accusamus in, quia omnis! Obcaecati iste soluta perferendis aspernatur doloribus illo magnam!
                    </p>
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn color="secondary" class="mt-6 px-8 py-5 rounded" dark tile depressed @click="openRegister()">
                        Inscribite
                    </v-btn>
                </v-col>
            </v-row>
      
    </v-container>
    <DialogsLogin v-model="loginDialog" @openRegister="openRegister" />
    <DialogsRegister v-model="registerDialog" />
</v-sheet>
</template>

<script>
export default {
    data() {
        return {
            agenda: null,
            eventRoute: '',
            eventRouteNew: '',
            loginDialog: false,
            registerDialog: false,
            products: [{
                    name: 'Endomate TC2',
                    img: 'endomate_tc2.png'
                },
                {
                    name: 'Flexidam',
                    img: 'flexidam.png'
                },
                {
                    name: 'Ipex II',
                    img: 'ipex_2.png'
                },
                {
                    name: 'Panamax Plus 2',
                    img: 'panamax_plus_2.png'
                }
            ],
            brands: [{
                    img: 'carestream.jpg'
                },
                {
                    img: 'coltene.jpg'
                },
                {
                    img: 'nsk.jpg'
                },
                {
                    img: 'philips.jpg'
                },
                {
                    img: 'septodont.jpg'
                }
            ],
            rooms: [{
                name: 'Prostodoncia',
                    img: 'prostodoncia.png',
                    color: '#94C01F'
                },
                {
                    name: 'Operatoria / Estética',
                    img: 'operatoria_dental.png',
                    color: '#941B80'
                },
                {
                    name: 'Periodoncia e Implantología',
                    img: 'periodoncia_e_implantologia.png',
                    color: '#E5332A'
                },
                {
                    name: 'Odontopediatría',
                    img: 'odontopediatria.png',
                    color: '#36A8E0'
                },
                {
                    name: 'Endodoncia',
                    img: 'endodoncia.png',
                    color: '#868686'
                },
                {
                    name: 'Práctica estudiantil',
                    img: 'practica_estudiantil.png',
                    color: '#F29100'
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
        }
    }
}
</script>

<style scoped>
.hero {
    background-repeat: no-repeat !important;
    background-color: #1c3b8b !important;
    border-radius: 25px;
    background-position: right !important;
    background-size: contain !important;
    min-height: 320px;
}
.hero-img {
    position: absolute;
    width: 540px;
    margin: -30px 0 0 36px;
}
</style>
