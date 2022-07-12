import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const GeneracionResultados = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Navbar />
      <Grid container justifyContent='center'>
        <Grid
          item
          container
          justifyContent='space-between'
          alignItems='center'
          py={10}
          xs={10.5}
        >
          <Grid item xs={5.5}>
            <Typography
              sx={{ color: (theme) => theme.palette.primary.light }}
              fontSize={62.5}
              lineHeight={"63.42px"}
              fontWeight={800}
              textAlign={"right"}
            >
              Proyecto social para la generación de confianza y promoción de la
              cultura de la legalidad Chec
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              color='secondary'
              fontSize={25}
              lineHeight={"33.96px"}
              fontFamily='Open Sans'
              textAlign='justify'
            >
              El Proyecto Social para la &quot;Generación de Confianza y
              promoción de la cultura de la legalidad&quot;, conocido
              actualmente a nivel comunitario y empresarial como
              &quot;Generación de Confianza&quot;, se orienta a generar un
              cambio de postura en todos los actors implicados
              (empresa-comunidad y demás instituciones vinculadas al proyecto)
              frente a su papel activo y transformador en la viabilización de
              acciones sociales y técnicas, cuyo fundamento se soporta en la
              promoción de la Cultura de la Legalidad.
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            backgroundColor: "primary.main",
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent='space-between' py={10} xs={10}>
            <Grid item xs={4.3}>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='secondary.light'
              >
                Elementos que guían y soportan el proyecto:
              </Typography>
              <Typography
                color='black'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
                pt={5}
              >
                Dado el alcance del objetivo propuesto, el proyecto en sí mismo
                ha presentado grandes retos para la empresa, que requirieron en
                su momento formular desde premisas distintas una lectura al
                indicador de pérdidas. A continuación, se presentan los
                fundamentos corporativos y teóricos que permitieron establecer
                desde una perspectiva rigurosa un proyecto que como “Generación
                de Confianza”, comprende que las transformaciones son solo
                posibles si las realizamos juntos.
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='primary.dark'
                textAlign='center'
                pb={5}
              >
                Fundamentos corporativos
              </Typography>
              <Image src={"/imgs/GC_Mapa.png"} width={971} height={509} />
            </Grid>

            <Grid item container xs={12} justifyContent='center' pt={5}>
              <Grid item xs={8}>
                <Typography
                  fontSize={29.17}
                  lineHeight={"33.96px"}
                  fontWeight={800}
                  color='secondary.light'
                  textAlign='center'
                  pb={5}
                >
                  El proyecto está respaldado por diferentes componentes
                  organizacionales, conceptuales y metodológicos. Desde la
                  concepción y foco de intervención establecida para el
                  proyecto. Este se relaciona con:
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={5.5} justifyContent='center' pt={5}>
              <Grid item>
                <Typography
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontWeight={800}
                  color='primary.dark'
                >
                  Enfoque de sostenibilidad CHEC:
                </Typography>
                <Typography
                  color='black'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  El concepto de sostenibilidad entendido como el conjunto de
                  condiciones económicas, sociales y ambientales que hacen
                  posible la existencia a largo plazo para alcanzarlo, la
                  organización trabaja en el establecimiento de una relación de
                  mutuo beneficio: Empresa-sociedad-ambiente que permitirá
                  obtener resultados en pro del desarrollo humano sostenible.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={5.5} justifyContent='center' pt={5}>
              <Grid item>
                <Typography
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontWeight={800}
                  color='primary.dark'
                >
                  Enfoque de Responsabilidad Social Empresarial - RSE:
                </Typography>
                <Typography
                  color='black'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  En CHEC y el Grupo EPM, se entiende la Responsabilidad Social
                  Empresarial (RSE), como: Los compromisos de origen obligatorio
                  y voluntario que como empresa y grupo empresarial, son
                  asumidos en la relación con los grupos de interés, conservando
                  como objetivo central la sostenibilidad.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.secondary.light,
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent='space-between' py={10} xs={10}>
            <Grid item xs={6} justifyContent='center'>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                fontFamily='Open Sans'
                color='primary.main'
                textAlign='center'
              >
                Principios éticos que guían
              </Typography>
              <Typography
                fontSize={56.47}
                lineHeight={"57.3px"}
                fontWeight={800}
                color='background.default'
                textAlign='center'
                pb={5}
              >
                nuestro actuar
              </Typography>
              <Image src={"/imgs/principios-1.png"} width={650} height={577} />
            </Grid>
            <Grid item container xs={6}>
              <Grid item container xs={12} justifyContent='space-between'>
                <Grid item xs={2}>
                  <Image
                    src={"/imgs/p2-transparencia.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={"29.17px"}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={"33.96px"}
                      fontWeight={800}
                    >
                      TRANSPARENCIA:
                    </Typography>{" "}
                    El sujeto ético sabe que sus actos no valen solo por el
                    efecto o resultado que produce, sino por la legitimidad que
                    la sociedad les imparte sobre la base de juzgar su
                    finalidad, el proceso de su ejecución en términos del
                    acatamiento de las reglas a las que ha de someterse, y la
                    completa información que permite juzgar acerca de ello. Cada
                    acción está en marcada por los fines de la sociedad las
                    reglas de distintos niveles creadas por esta y las
                    expectativas que el grupo EPM genera para los demás miembros
                    de la sociedad, mediante comunicación oportuna, veraz y
                    completa.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justifyContent='space-between'
                pt={5}
              >
                <Grid item xs={2}>
                  <Image
                    src={"/imgs/p2-transparencia.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={"29.17px"}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={"33.96px"}
                      fontWeight={800}
                    >
                      RESPONSABILIDAD:
                    </Typography>{" "}
                    Conocemos el papel que nos competen términos económicos,
                    sociales y ambientales, sabemos que ello implica el manejo
                    de recursos que pertenecen a los miembros actuales de la
                    sociedad, pero también a las generaciones futuras en
                    consecuencia, medimos el alcance de cada acto y asumimos las
                    consecuencias que ellos suponen para garantizar que nuestra
                    participación en la sociedad sea valiosa y reconocida.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                justifyContent='space-between'
                pt={5}
              >
                <Grid item xs={2}>
                  <Image
                    src={"/imgs/p2-calidez.png"}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={"29.17px"}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={"33.96px"}
                      fontWeight={800}
                    >
                      CALIDEZ:
                    </Typography>{" "}
                    La atención de las necesidades de cada uno en términos de
                    empatía, respeto y amabilidad es la base del servicio que
                    ofrecemos y el compromiso que asumimos en frente de cada
                    miembro de la sociedad. No discriminamos ni prejuzga mos
                    acerca de nadie por sus condiciones particulares ni en
                    función de la relación que mantenemos con ellos.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item container xs={12} justifyContent='center' pt={5}>
              <Grid item xs={8.3}>
                <Typography
                  fontSize={56.47}
                  lineHeight={"57.3px"}
                  fontWeight={800}
                  color='primary.A100'
                  textAlign='justify'
                  pt={5}
                >
                  Propósito
                </Typography>
                <Typography
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontWeight={800}
                  color='primary.dark'
                  textAlign='justify'
                >
                  En CHEC, como filial del Grupo EPM, buscamos permanecer en el
                  tiempo mediante la contribución al desarrollo de territorios
                  sostenibles y competitivos, generando bienestar y desarrollo
                  con equidad en los entornos donde participamos, a través del
                  desarrollo de proyectos de infraestructura y de la oferta a
                  nuestros clientes y usuarios de soluciones en energía,
                  mediante una actuación empresarial que armonice los resultados
                  financieros, sociales y ambientales.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid item container xs={12} justifyContent='center' pt={10}>
          <Grid item xs={10}>
            <Typography
              fontSize={56.47}
              lineHeight={"57.3px"}
              fontWeight={800}
              fontFamily='Open Sans'
              color='secondary.light'
              textAlign='center'
            >
              Direccionamiento Estratégico de
            </Typography>
            <Typography
              fontSize={56.47}
              lineHeight={"57.3px"}
              fontWeight={800}
              color='primary.main'
              textAlign='center'
              pb={5}
            >
              CHEC y grupo EPM
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent='center'>
          <Grid item container xs={10} justifyContent='space-between' pb={10}>
            <Grid item xs={5.8}>
              <Image src={"/imgs/Slider3.png"} width={835} height={478} />
            </Grid>
            <Grid item xs={5.8}>
              <Image src={"/imgs/Slider4.png"} width={835} height={478} />
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent='center'>
            <Grid item xs={10} pt={10}>
              <Typography
                fontSize={64.58}
                lineHeight={"94.67px"}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                Temas Discutidos
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                textAlign='center'
                pt={5}
              >
                En CHEC propiciamos el desarrollo con equidad de territorios
                sostenibles, con una mirada integral a partir de las siguientes
                dimensiones:
              </Typography>
            </Grid>

            <Grid item container xs={10} justifyContent='space-between' pt={5}>
              <Grid item container xs={5.5}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Competitividad del territorio:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Propiciar el desarrollo de la competitividad económica,
                    ambiental, social y global de los territorios donde
                    actuamos.
                  </Typography>
                </Grid>

                <Grid item xs={12} pt={5}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Servicios públicos integrados y eficientes:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Visión integral de los clientes y mercados en la provisión
                    de soluciones eficientes y competitivas en electricidad,
                    gas, agua, aseo y tecnología de la información y las
                    comunicaciones – TIC.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item container xs={5.5}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Comprabilidad por tarifas y cobertura:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Propiciar la universalización del servicio y el desarrollo
                    de tarifas competitivas que faciliten la comprabilidad.
                    Fortalecer la cultura del uso eficiente y racional de los
                    servicios públicos.
                  </Typography>
                </Grid>

                <Grid item xs={12} pt={5}>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Mejoramiento de calidad de vida de las personas:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={"33.96px"}
                    fontFamily='Open Sans'
                    color='black'
                    textAlign='justify'
                  >
                    Propiciar el mejoramiento de la calidad de vida de las
                    personas y el índice de desarrollo humano.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={10} pt={10}>
              <Typography
                fontSize={64.58}
                lineHeight={"94.67px"}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                Fundamentos Teóricos
              </Typography>
              <Grid item xs={12} pt={5}>
                <Typography
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontWeight={800}
                  color='primary.dark'
                  textAlign='left'
                >
                  Teoría del Cambio Social:
                </Typography>
                <Typography
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  color='black'
                  textAlign='justify'
                >
                  Desde los planteamientos de Kurt Lewin un elemento social es
                  mantenido en equilibrio por la interacción de dos grupos que
                  generan fuerzas opuestas; unas que intentan promover el cambio
                  (Fuerzas impulsoras) y otras que intentan mantener el “status
                  quo” (Fuerzas que refrenan). Las organizaciones son sistemas
                  en los cuales la situación actual no es un patrón estático
                  sino un equilibrio dinámico de fuerzas que trabajan en
                  direcciones opuestas, en este sentido, para que ocurra un
                  cambio las fuerzas impulsoras deben exceder las fuerzas que
                  refrenan, cambiando así el equilibrio.
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={10} justifyContent='space-between' pt={5}>
              <Grid item container xs={5.5}>
                <Box
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "secondary.light",
                    width: "100%",
                    height: 400,
                  }}
                />
              </Grid>
              <Grid item container xs={5.5}>
                <Box
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "secondary.light",
                    width: "100%",
                    height: 400,
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={10} pt={5} pb={10}>
              <Typography
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                color='black'
                textAlign='justify'
              >
                En esta lógica, CHEC grupo EPM emprende una apuesta empresarial
                desde la cual se hace prioritario, desarrollar cambios que
                permitan superar los factores que movilizan las fuerzas que
                refrenan; es a partir del reconocimiento que realiza CHEC grupo
                EPM de estas dinámicas de orden social, que se da inicio a la
                elaboración del proyecto en mención, así, se parte de la
                premisa, que intervenir una serie de variables asociadas a los
                hábitos, controles, normas y dinámicas sociales, permitirán
                paulatinamente, obtener los objetivos empresariales propuestos.
                Este ejercicio de reconocimiento se ha constituido para la
                empresa en un gran paso hacia el futuro, reconociendo que los
                procedimientos técnicos requieren para su sostenibilidad ser
                abordados desde el componente social.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid item container justifyContent='center' xs={10}>
          <Grid item xs={6} pt={10}>
            <Typography
              fontSize={64.58}
              lineHeight={"63.42px"}
              fontWeight={800}
              color='primary.main'
              textAlign='center'
            >
              Cómo surge el proyecto generación de confianza
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            pt={5}
            justifyContent='space-between'
            pb={10}
          >
            <Grid item xs={5.7}>
              <Typography
                color='secondary.main'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
              >
                Desde el año 2003, CHEC grupo EPM ha desarrollado acciones en el
                marco de diferentes proyectos, con el objetivo de disminuir los
                niveles de pérdidas de energía eléctrica, viabilizando acciones
                técnicas, educando y sensibilizando a los clientes frente al
                acceso y uso adecuado del servicio de energía, desarrollando
                además, estrategias formativas para dar sostenibilidad a los
                procesos empresariales.
              </Typography>
              <Typography
                color='secondary.main'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
                pt={6}
              >
                Pese a lo anterior, una vez finalizadas dichas acciones, se
                logró identificar que el nivel de pérdidas reducido no lograba
                mantenerse, hecho que condujo a buscar nuevas alternativas, en
                este sentido CHEC grupo EPM como empresa prestadora del servicio
                público de energía eléctrica y dando respuesta a sus compromisos
                legales frente a la prestación del servicio, en beneficio de sus
                clientes y usuarios, adopta estrategias técnicas de seguimiento
                y control entre las que se encuentran: Reubicación de medida en
                apoyo, habilitación de vivienda, remodelación de redtes,
                instalación de macromedidores, cambio de contadores, acciones de
                control y normalización e iniciativas sociales de carácter
                educativo e informativo, estas últimas, adoptadas con el fin de
                socializar y poner en consideración con clientes y usuarios, las
                acciones técnicas a emprenderse en los diferentes sectores que
                presentaban altas pérdidas de energía.
              </Typography>

              <Typography
                color='secondary.main'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
                pt={6}
              >
                Como respuesta a estas estrategias, clientes y comunidad bajo la
                influencia de factores de tipo cultural, político, económico y
                social, presentaron quejas y manifestaciones de inconformidad
                ante las alternativas técnicas emprendidas por la empresa, para
                mitigar los niveles de pérdidas de energía.
              </Typography>

              <Typography
                color='secondary.main'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
                pt={6}
              >
                Ante esta necesidad de empresa, se vislumbra la posibilidad, de
                realizar un ejercicio netamente social, donde el énfasis fuese
                “Cultura de Legalidad en el marco de la participación
                ciudadana”, entendiendo que estos elementos,
              </Typography>
            </Grid>
            <Grid item xs={5.7}>
              <Typography
                color='secondary.main'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
                pb={5}
              >
                podrían hacer la diferencia, con respecto a la cantidad de
                estrategias y soluciones de tipo técnico desarrolladas por la
                empresa, pero en las que lamentablemente, si bien se encontraban
                algunos resultados, se continuaba con la necesidad de
                complementar dichas acciones, es así, como se busca una
                alternativa en el proyecto Generación de Confianza, que lo que
                se pretendía, era realizar cambios importantes frente al
                comportamiento social de los territorios, orientados a
                fortalecer una cultura de legalidad, dado que ante cada solución
                técnica al problema, aparecía una condición de irregularidad
                frente al acceso y uso del servicio de energía de los usuarios,
                desde allí, se concluyó, que las acciones técnicas debían ir
                alineadas con el componente social, donde las personas, pudiesen
                adoptar comportamientos legales frente a cualquier circunstancia
                de la vida, es de esta manera, como nace el Proyecto Generación
                de Confianza, buscando entregar elementos que permitieran a las
                comunidades, encontrar ese sentido social y legal responsable en
                los entornos donde se identifica en mayor medida esta
                problemática social.
              </Typography>

              <Image src={"/imgs/GC-1.png"} width={769} height={576} />
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: "center",
            backgroundImage: `url(${"/imgs/GC-bg.png"})`,
          }}
        >
          <Grid item container xs={10} py={10} justifyContent='space-between'>
            <Grid item xs={7}>
              <Typography
                fontSize={64.58}
                lineHeight={"63.42px"}
                fontWeight={800}
                color='primary.main'
              >
                Objetivos
              </Typography>
              <Typography
                fontSize={39.15}
                lineHeight={"38.44px"}
                fontWeight={800}
                color='secondary.light'
                py={5}
              >
                General
              </Typography>
              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Apalancar la recuperación y/o mitigación de los niveles de
                  pérdidas de energía no técnicas, a partir de procesos de
                  involucramiento social y comunitario, que promuevan el fomento
                  de la cultura de la legalidad y la consolidación de procesos
                  de fidelización y acercamiento de la empresa, con el grupo de
                  interés Comunidad y Clientes, desde la perspectiva de generar
                  confianza en el territorio donde se ejecute la propuesta.
                </Typography>
              </Stack>

              <Typography
                fontSize={39.15}
                lineHeight={"38.44px"}
                fontWeight={800}
                color='secondary.light'
                py={5}
              >
                Específicos
              </Typography>
              <Stack direction='row' spacing={2}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Identificar y seleccionar comunidades objetivo a partir del
                  diagnóstico de pérdidas de energía.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Establecer acercamientos con actores sociales representativos
                  que pueden servir de vehículo para el desarrollo del proyecto.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Identificar las necesidades de la comunidad a través de los
                  actores sociales.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Concertar intereses y acciones que serán abordadas dentro del
                  proyecto de acuerdo con criterios de integralidad y los
                  análisis de elegibilidad, viabilidad y prioridad.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Implementar alianzas, estrategias y acciones integrales,
                  enfocadas a mitigar los problemas seleccionados que afectan
                  las comunidades y que fomentan el uso indebido del servicio de
                  energía.
                </Typography>
              </Stack>

              <Stack direction='row' spacing={2} pt={4}>
                <ArrowForwardRoundedIcon
                  sx={{ fontSize: 40 }}
                  color='primary'
                />
                <Typography
                  color='secondary.light'
                  fontSize={25}
                  lineHeight={"33.96px"}
                  fontFamily='Open Sans'
                  textAlign='justify'
                >
                  Analizar el impacto de las acciones realizadas sobre las
                  pérdidas no técnicas, generando ajustes en el proyecto y
                  lecciones aprendidas para ejercicios futuros.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={4} alignSelf='flex-end'>
              <Typography
                fontSize={39.15}
                lineHeight={"38.44px"}
                fontWeight={800}
                color='primary.main'
                py={5}
              >
                Población Impactada
              </Typography>
              <Typography
                color='secondary.light'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                pt={5}
              >
                <Typography
                  component='span'
                  color='primary.main'
                  fontSize={25}
                  lineHeight={"33.96px"}
                >
                  {"Clientes: "}
                </Typography>
                Se impactan aquellos clientes que en el desarrollo del proyecto
                son identificados como reincidentes.
              </Typography>

              <Typography
                color='secondary.light'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                pt={5}
              >
                <Typography
                  component='span'
                  color='primary.main'
                  fontSize={25}
                  lineHeight={"33.96px"}
                >
                  {"Comunidad: "}
                </Typography>
                Se impactan líderes, representantes y organizaciones de tipo
                social y comunitario presentes en el territorio.
              </Typography>

              <Typography
                color='secondary.light'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                pt={5}
              >
                <Typography
                  component='span'
                  color='primary.main'
                  fontSize={25}
                  lineHeight={"33.96px"}
                >
                  {"Trabajadores y contratistas: "}
                </Typography>
                Involucra a trabajadores y contratistas de la empresa en
                acciones del proyecto.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "primary.main",
            justifyContent: "center",
          }}
        >
          <Grid item container justifyContent='center' py={10} xs={10}>
            <Grid item xs={10}>
              <Typography
                fontSize={64.58}
                lineHeight={"94.67px"}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                Población Impactada
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                color='black'
                fontSize={25}
                lineHeight={"33.96px"}
                fontFamily='Open Sans'
                textAlign='justify'
              >
                Las estrategias emprendidas dentro de este proyecto se llevaron
                a cabo en los barrios o sectores de 3 municipios del
                departamento de Caldas: La Dorada, Manizales y Marmato; donde se
                han identificado nodos considerados como reincidentes y de altas
                pérdidas. <br /> <br /> Desde el proyecto, se buscó fortalecer y
                apoyar las diversas iniciativas, que algunas instituciones y
                organizaciones comunitarias venían adelantando en los
                territorios y que lograban articularse de manera efectiva al
                enfoque empresarial de CHEC, fue así, como desde el año 2012, se
                dio inicio al proceso de relacionamiento basado en la Confianza
                con las siguientes organizaciones:
              </Typography>
            </Grid>

            <Grid item container xs={12} justifyContent='space-between' pt={8}>
              <Grid item xs={4}>
                <Stack direction='row' spacing={3}>
                  <Box pt={5}>
                    <Image src={"/imgs/dorada.png"} width={85} height={218} />
                  </Box>
                  <Typography
                    fontSize={39.15}
                    lineHeight={"38.44px"}
                    fontWeight={800}
                    color='background.default'
                  >
                    La Dorada
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                container
                xs={7}
                justifyContent='space-between'
                alignItems='center'
              >
                <Grid item xs={2.3}>
                  <Image src={"/imgs/manizales.png"} width={197} height={106} />
                </Grid>
                <Grid item xs={9.3}>
                  <Typography
                    fontSize={39.15}
                    lineHeight={"38.44px"}
                    fontWeight={800}
                    color='background.default'
                  >
                    Manizales
                  </Typography>
                  <Typography
                    fontSize={22.96}
                    lineHeight={"38.44px"}
                    color='black'
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    Fundación Huellas de Vida, Comité Interbarrial de
                    Ciudadanía, Alianza público privada contra la defraudación
                    de fluidos- contra el fraude, Casa de la Cultura
                    Villahermosa y Nevado, Manizales Hip Hop, Barra Holocausto
                    Norte (Parche La Descendencia 5), Grupo Vértigo, I.E Andres
                    Bello, Juntas de Acción Comunal, Círculo de Mujeres,
                    Biblioteca El Nevado y el proyecto comunitario Ayuda a un
                    Amigo Callejero.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container xs={10} py={5}>
              <Grid
                item
                container
                xs={12}
                justifyContent='space-between'
                alignItems='center'
              >
                <Grid item xs={0.6}>
                  <Image src={"/imgs/marmato.png"} width={76} height={116} />
                </Grid>
                <Grid item xs={11.2}>
                  <Typography
                    fontSize={39.15}
                    lineHeight={"38.44px"}
                    fontWeight={800}
                    color='background.default'
                  >
                    Marmáto
                  </Typography>
                  <Typography
                    fontSize={22.96}
                    lineHeight={"38.44px"}
                    color='black'
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    Inicia en el año 2018 con las siguientes
                    organizaciones:Comité para el Desarrollo Turístico de
                    Marmato, Club de la salud, comunidades Afrodescendientes,
                    Amigos del Llano, Fundación artística y cultural “Son de
                    Oro”, Asociación de joyeros tradicionales “Asojomar”,
                    Asociación de Mineros Tradicionales, Asociación Marmateña de
                    Mujeres Emprendedoras &quot;Asociamme&quot;, Corporación
                    para el Desarrollo Social Sostenible de Marmato, Parcialidad
                    Indígena Cartama, Grupo social Titanes de Oro, Institución
                    Educativa el Llano, Institución educativa General Ramón
                    Marín (Corregimiento San Juan), Institución educativa
                    Marmato, Biblioteca municipal, Casa de la Cultura, Bomberos
                    voluntarios de Marmato, Biblioteca La Plaza, Hospital San
                    Antonio de Marmato, Asomitrama, Grupo de fútbol femenino
                    mujeres siglo XXI.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item pt={10}>
              <Image src={"/imgs/GC-line-time.png"} width={1343} height={789} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </Box>
  );
};

export default GeneracionResultados;
