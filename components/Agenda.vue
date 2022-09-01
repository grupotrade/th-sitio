<template>
<v-row class="pa-md-4" justify="space-between">
    <v-col cols="12">
        <h3 class="primary--text text-center agenda">
            Agenda
        </h3>
        <v-sheet class="my-5 text-center">
            <v-btn rounded depressed class="ma-2 py-5 primary--text btn-color" target="_blank" href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=II%20Simposio%20para%20Industrias%20Reguladas%20-%20Annar%202020&amp;dates=20201124T110000Z/20201127T200000Z&amp;details=Invitamos%20a%20participar%20de%20este%20simposio%20a%20todos%20los%20profesionales%20de%20las%20industrias%20altamente%20reguladas%20que%20tienen%20laboratorio%20de%20control%20de%20calidad%20en%20los%20sectores%20farmacosm%C3%A9tico,%20alimentos%20y%20bebidas,%20an%C3%A1lisis%20a%20terceros,%20entes%20regulatorios%20y%20centros%20de%20investigaci%C3%B3n.&amp;location=https://simposioannarindustria.com/&amp;sprop=&amp;sprop=name:">
                <img src="/img/google-cal.png" class="mr-3 pa-1" /> Agregar a Calendar
            </v-btn>
            <v-btn rounded depressed class="ma-2 py-5 primary--text btn-color" target="_blank" href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/generator/generator.html%0ADTSTART:20201124T110000Z%0ADTEND:20201127T200000Z%0ASUMMARY:II%20Simposio%20para%20Industrias%20Reguladas%20-%20Annar%202020%0ADESCRIPTION:Invitamos%20a%20participar%20de%20este%20simposio%20a%20todos%20los%20profesionales%20de%20las%20industrias%20altamente%20reguladas%20que%20tienen%20laboratorio%20de%20control%20de%20calidad%20en%20los%20sectores%20farmacosm%C3%A9tico,%20alimentos%20y%20bebidas,%20an%C3%A1lisis%20a%20terceros,%20entes%20regulatorios%20y%20centros%20de%20investigaci%C3%B3n.%0ALOCATION:https://simposioannarindustria.com/%0AEND:VEVENT%0AEND:VCALENDAR">
                <img src="/img/ical.png" class="mr-3 pa-1" />Agregar a iCal
            </v-btn>
            <v-btn rounded depressed class="ma-2 py-5 primary--text btn-color" target="_blank" href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0AURL:http://carlsednaoui.github.io/add-to-calendar-buttons/generator/generator.html%0ADTSTART:20201124T110000Z%0ADTEND:20201127T200000Z%0ASUMMARY:II%20Simposio%20para%20Industrias%20Reguladas%20-%20Annar%202020%0ADESCRIPTION:Invitamos%20a%20participar%20de%20este%20simposio%20a%20todos%20los%20profesionales%20de%20las%20industrias%20altamente%20reguladas%20que%20tienen%20laboratorio%20de%20control%20de%20calidad%20en%20los%20sectores%20farmacosm%C3%A9tico,%20alimentos%20y%20bebidas,%20an%C3%A1lisis%20a%20terceros,%20entes%20regulatorios%20y%20centros%20de%20investigaci%C3%B3n.%0ALOCATION:https://simposioannarindustria.com/%0AEND:VEVENT%0AEND:VCALENDAR">
                <img src="/img/oulook-cal.png" class="mr-3 pa-1" />Agregar a Outlook
            </v-btn>
        </v-sheet>
    </v-col>
    <v-col cols="12">
        <v-card tile color="transparent" class="pa-2">
            <v-tabs v-model="agenda" centered>
                <v-tab>Día 1 Martes 24</v-tab>
                <v-tab>Día 2 Miércoles 25</v-tab>
                <v-tab>Día 3 Jueves 26</v-tab>
                <v-tab>Día 4 Viernes 27</v-tab>
            </v-tabs>
            <v-tabs-items v-model="agenda" class="mt-2">
                <v-tab-item>
                    <v-timeline :dense="$vuetify.breakpoint.xsOnly">
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>08:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Apertura.</h5>
                                        <p> ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> BPL enfocado a validación de sistemas computarizados e integridad de datos.</h5>
                                        <p> Rafael Enrique Rodriguez</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right">08:20</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>10:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Video lanzamiento AnnarTrace.</h5>
                                        <p> ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Integridad de datos analíticos en el <br>laboratorio de control de calidad.</h5>
                                        <p>Victoria Muentes Nieves</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right">10:05</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>11:40</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Importancia del muestreo ambiental de <br>partículas viables, como herramienta de <br>control de calidad en los procesos <br>productivos.</h5>
                                        <p>Gabriel Eduardo Ospino Torres</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Cómo integrar pronósticos y consumos <br>para una planeación más efectiva.</h5>
                                        <p>Alejandro Céspedes Peña</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right">14:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item color="#9432FB" small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>14:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Normatividad y retos en la implementación <br>del Sistema Globalmente Armonizado en Colombia.</h5>
                                        <p>Diego Reyes Jiménez</p>
                                        <v-chip pill class="sala2" href="/conferencias/sala2">Sala 2</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right ">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right">15:35</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item color="#9432FB" small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>15:35</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill class="sala2" href="/conferencias/sala2">Sala 2</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right ">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Demo Software.</h5>
                                        <p>ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right">16:05</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                    </v-timeline>
                </v-tab-item>
                <!-- DIA 2 -->
                <v-tab-item>
                    <v-timeline>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>07:45</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Espacio Promocional MBL.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> Prueba de desafío de desinfectantes <br>(Challenge tests).</h5>
                                        <p>Leticia Dias - Delene Strunger - Vitorio Santos Junior</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>08:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item color="#9532FB" small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>08:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Resolución de problemas más <br>frecuentes en HPLC.</h5>
                                        <p>Francisco Andrés Mocholi</p>
                                        <v-chip pill color="sala2" href="/conferencias/sala2">Sala 2</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item cprimary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Biología molecular en la detección y cuantificación de patógenos en la <br>industria de alimentos.</h5>
                                        <p>Viviana Clavijo</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">9:45</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item color="#9532FB" small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>10:15</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="sala2" href="/conferencias/sala2">Sala 2</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Lineamientos base en la Selección, <br>Verificación y Validación de <br>métodos (ISO/IEC 17025).</h5>
                                        <p>Tatiana Diaz Donato</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right font-montserrat">14:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>14:55</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Demo Software.</h5>
                                        <p>ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">15:10</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                    </v-timeline>
                </v-tab-item>
                <!-- DIA 3 -->
                <v-tab-item>
                    <v-timeline>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">08:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Calidad alimentaria. Control de patógenos <br>clave:<em> Listeria spp., Salmonella spp. y Campylobacter spp</em>.</h5>
                                        <p>Albert Garreta</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">


                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5> ¿Sabes en qué caso es obligatorio <br>pertenecer al RELAB? <br>Taller de aplicación.</h5>
                                        <p>Magda Romero - Yenny Gutierrez.</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                                                        <v-col cols="12" md="2" class="pa-0">
                                        <h5>9:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>11:20</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Validación de procesos de limpieza <br>y desinfección.</h5>
                                        <p>Bernardo Clavijo D</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">14:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>15:45</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right ">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Demo Software.</h5>
                                        <p>ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="text-md-right font-montserrat">16:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                    </v-timeline>
                </v-tab-item>
                <!-- DIA 4 -->
                <v-tab-item>
                    <v-timeline>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">08:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Nuevas Herramientas para el<br> análisis Microbiológico de patógenos<br> en la Industria.</h5>
                                        <p>Alberto Lerner</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>COV-Hygien Xpress: la solución manual para la detección rápida y segura del SARS-CoV-2 en superficies.</h5>
                                        <p>Alberto Lerner</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">9:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5><em>Burkholderia cepacea</em> Patógeno <br>de control obligado en la industria farmacéutica.USP &lt;60&gt;.</h5>
                                        <p>Xavier Torralba</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5 class="font-montserrat">9:35</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>10:20</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>ISO 17043:2010 <br>Programas de ensayos de aptitud.</h5>
                                        <p>Magda Romero</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Espacio Promocional ANNAR.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>11:25</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>14:00</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Demo Software.</h5>
                                        <p>ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small right>
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Cierre.</h5>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>15:00</h5>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                        <v-timeline-item primary small left class="text-md-right">
                            <v-container>
                                <v-row class="pt-1 flex-row-reverse">
                                    <v-col cols="12" md="2" class="pa-0">
                                        <h5>15:30</h5>
                                    </v-col>
                                    <v-col cols="12" md="10" class="pa-0">
                                        <h5>Actividad Sorpresa.</h5>
                                        <p>ANNAR Health Technologies</p>
                                        <v-chip pill color="primary--text btn-color" href="/conferencias/sala1">Sala 1</v-chip>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-timeline-item>
                    </v-timeline>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            agenda: null,
        }
    }
}
</script>
