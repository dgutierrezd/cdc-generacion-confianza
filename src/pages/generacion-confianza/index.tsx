import { Box, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Footer } from '../components/footer/footer';
import { Navbar } from '../components/navbar/navbar';

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
              lineHeight={'63.42px'}
              fontWeight={800}
              textAlign={'right'}
            >
              Proyecto social para la generación de confianza y promoción de la
              cultura de la legalidad Chec
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              color='secondary'
              fontSize={25}
              lineHeight={'33.96px'}
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
            display: 'flex',
            backgroundColor: 'primary.main',
            justifyContent: 'center',
          }}
        >
          <Grid item container justifyContent='space-between' py={10} xs={10}>
            <Grid item xs={4.3}>
              <Typography
                fontSize={56.47}
                lineHeight={'57.3px'}
                fontWeight={800}
                color='secondary.light'
              >
                Elementos que guían y soportan el proyecto:
              </Typography>
              <Typography
                color='black'
                fontSize={25}
                lineHeight={'33.96px'}
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
                lineHeight={'57.3px'}
                fontWeight={800}
                color='primary.dark'
                textAlign='center'
                pb={5}
              >
                Fundamentos corporativos
              </Typography>
              <Image src={'/imgs/GC_Mapa.png'} width={971} height={509} />
            </Grid>

            <Grid item container xs={12} justifyContent='center' pt={5}>
              <Grid item xs={8}>
                <Typography
                  fontSize={29.17}
                  lineHeight={'33.96px'}
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
                  lineHeight={'33.96px'}
                  fontWeight={800}
                  color='primary.dark'
                >
                  Enfoque de sostenibilidad CHEC:
                </Typography>
                <Typography
                  color='black'
                  fontSize={25}
                  lineHeight={'33.96px'}
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
                  lineHeight={'33.96px'}
                  fontWeight={800}
                  color='primary.dark'
                >
                  Enfoque de Responsabilidad Social Empresarial - RSE:
                </Typography>
                <Typography
                  color='black'
                  fontSize={25}
                  lineHeight={'33.96px'}
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
            width: '100%',
            display: 'flex',
            backgroundColor: (theme) => theme.palette.secondary.light,
            justifyContent: 'center',
          }}
        >
          <Grid item container justifyContent='space-between' py={10} xs={10}>
            <Grid item xs={6} justifyContent='center'>
              <Typography
                fontSize={56.47}
                lineHeight={'57.3px'}
                fontWeight={800}
                fontFamily='Open Sans'
                color='primary.main'
                textAlign='center'
              >
                Principios éticos que guían
              </Typography>
              <Typography
                fontSize={56.47}
                lineHeight={'57.3px'}
                fontWeight={800}
                color='background.default'
                textAlign='center'
                pb={5}
              >
                nuestro actuar
              </Typography>
              <Image src={'/imgs/principios-1.png'} width={650} height={577} />
            </Grid>
            <Grid item container xs={6}>
              <Grid item container xs={12} justifyContent='space-between'>
                <Grid item xs={2}>
                  <Image
                    src={'/imgs/p2-transparencia.png'}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={'29.17px'}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={'33.96px'}
                      fontWeight={800}
                    >
                      TRANSPARENCIA:
                    </Typography>{' '}
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
                    src={'/imgs/p2-transparencia.png'}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={'29.17px'}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={'33.96px'}
                      fontWeight={800}
                    >
                      RESPONSABILIDAD:
                    </Typography>{' '}
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
                    src={'/imgs/p2-calidez.png'}
                    width={127}
                    height={128}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Typography
                    color='black'
                    fontSize={20}
                    lineHeight={'29.17px'}
                    fontFamily='Open Sans'
                    textAlign='justify'
                  >
                    <Typography
                      component='span'
                      color='primary'
                      fontSize={25}
                      lineHeight={'33.96px'}
                      fontWeight={800}
                    >
                      CALIDEZ:
                    </Typography>{' '}
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
                  lineHeight={'57.3px'}
                  fontWeight={800}
                  color='primary.A100'
                  textAlign='justify'
                  pt={5}
                >
                  Propósito
                </Typography>
                <Typography
                  fontSize={25}
                  lineHeight={'33.96px'}
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
              lineHeight={'57.3px'}
              fontWeight={800}
              fontFamily='Open Sans'
              color='secondary.light'
              textAlign='center'
            >
              Direccionamiento Estratégico de
            </Typography>
            <Typography
              fontSize={56.47}
              lineHeight={'57.3px'}
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
              <Image src={'/imgs/Slider3.png'} width={835} height={478} />
            </Grid>
            <Grid item xs={5.8}>
              <Image src={'/imgs/Slider4.png'} width={835} height={478} />
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            backgroundColor: (theme) => theme.palette.primary.main,
            justifyContent: 'center',
          }}
        >
          <Grid item container justifyContent='center'>
            <Grid item xs={10} pt={10}>
              <Typography
                fontSize={64.58}
                lineHeight={'94.67px'}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                Temas Discutidos
              </Typography>
              <Typography
                fontSize={25}
                lineHeight={'33.96px'}
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
                    lineHeight={'33.96px'}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Competitividad del territorio:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={'33.96px'}
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
                    lineHeight={'33.96px'}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Servicios públicos integrados y eficientes:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={'33.96px'}
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
                    lineHeight={'33.96px'}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Comprabilidad por tarifas y cobertura:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={'33.96px'}
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
                    lineHeight={'33.96px'}
                    fontWeight={800}
                    color='primary.dark'
                    textAlign='left'
                  >
                    Mejoramiento de calidad de vida de las personas:
                  </Typography>
                  <Typography
                    fontSize={25}
                    lineHeight={'33.96px'}
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
                lineHeight={'94.67px'}
                fontWeight={800}
                color='secondary.light'
                textAlign='center'
              >
                Fundamentos Teóricos
              </Typography>
              <Grid item xs={12} pt={5}>
                <Typography
                  fontSize={25}
                  lineHeight={'33.96px'}
                  fontWeight={800}
                  color='primary.dark'
                  textAlign='left'
                >
                  Teoría del Cambio Social:
                </Typography>
                <Typography
                  fontSize={25}
                  lineHeight={'33.96px'}
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
                    backgroundColor: 'secondary.light',
                    width: '100%',
                    height: 400,
                  }}
                />
              </Grid>
              <Grid item container xs={5.5}>
                <Box
                  sx={{
                    borderRadius: 10,
                    backgroundColor: 'secondary.light',
                    width: '100%',
                    height: 400,
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={10} pt={5} pb={10}>
              <Typography
                fontSize={25}
                lineHeight={'33.96px'}
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

        <Grid item container justifyContent='center'>
          <Grid item xs={6} pt={10}>
            <Typography
              fontSize={64.58}
              lineHeight={'63.42px'}
              fontWeight={800}
              color='primary.main'
              textAlign='center'
            >
              Cómo surge el proyecto generación de confianza
            </Typography>
          </Grid>

          <Grid item container xs={12} pt={5}>
            <Typography
              fontSize={64.58}
              lineHeight={'63.42px'}
              fontWeight={800}
              color='primary.main'
              textAlign='center'
            >
              Cómo surge el proyecto generación de confianza
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default GeneracionResultados;
