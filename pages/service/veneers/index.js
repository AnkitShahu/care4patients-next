import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import WPAPI from 'wpapi'
import { BookAndCall, CommonHero, CommonSidebar, SectionalHeading, CustomCard, InterestFree, TermsNCondition } from '../../../components/components'
import Banner from '../../../public/Veneers/venners.jpg'
import PorcelainVeneers from '../../../public/Veneers/porcelain-Veneers.jpg'
import { Box, Container, Grid, Typography } from '@mui/material'

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://pritams3.sg-host.com/wp-json/wp/v2/categories?slug=veneers`)
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }

const Veneers = ({ data }) => {
  const [show, setShow] = useState(false)
  const [width, setWidth] = useState()
  const [blogs, setBlogs] = useState([])
  // const [category] = data

  // const wp = new WPAPI({
  //   endpoint: "https://pritams3.sg-host.com/wp-json/"
  // })


  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  // const fetchBlog = async () => {
  //   const posts = await wp.posts().embed().param({ categories: [category.id] }).perPage(2).page(1).get();
  //   setBlogs(posts)
  // }

  // useEffect(() => {
  //   if (category) {
  //     fetchBlog()
  //   }
  // })

  const breadcrumb = [
    { id: "Veneers_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "Veneers_breadcrumb_2", link: null, title: 'Dental Veneers in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Porcelain Veneers Dentist | Best Dentist Carrum Downs</title>
        <meta name="description" content="Porcelain veneers are the perfect choice for improving your smiles. Carrum Downs Dental has the best dentists that perform smile makeovers at affordable costs." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Dental Veneers in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} lg={8}>
                        <section>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="When you look at pictures do you ever wish your teeth were whiter, straighter, more aligned?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>At Carrum Downs Dental Group at Shop T5, 100 Hall Road our dentists perform porcelain veneer ‘smile makeovers’ which can address all of these issues. We are delighted to be able to offer this “Hollywood” technique to our patients.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="What are porcelain Veneers?" align='center' color="var(--dark-blue)" />
                              <Box mt={3}>
                                <Grid container spacing={5}>
                                  <Grid item xs={12} md={6}>
                                    <Image src={PorcelainVeneers} alt="porcelain-Veneers" />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <Typography className='para'><strong>Porcelain veneers are thin shells of ceramic that bond directly to the front surfaces of the teeth.</strong> They are an ideal choice for improving your smile and have become increasingly popular due to their simplicity and versatility.</Typography>
                                    <Typography className='para'>Placing custom teeth veneers requires a high degree of technical skill as well as attention to cosmetic detail. We place dental veneers routinely, and design each case individually to match and enhance the characteristics of each patient’s smile.</Typography>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4">
                          <Container maxWidth="xxl" className="p-0">
                            <SectionalHeading variant="h2" title="Will they look like normal teeth?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className='para'>When bonded to the teeth, the ultra-thin porcelain veneers are virtually undetectable. They are also highly resistant to coffee, tea, or even cigarette stains. For strength and appearance, their resemblance to healthy, white tooth enamel is unsurpassed by other restorative options.</Typography>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4 bg-grey">
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="How durable are porcelain veneers?" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                              <Typography className='para'>With proper care, porcelain veneers will brighten your smile for well over a decade. At Carrum Downs Dental Group on Frankston-Dandenong Road we ensure that your teeth veneers are crafted from the highest quality porcelains and are bonded with the most advanced and proven materials available.</Typography>
                              <Typography className='para'>Refraining from using your veneers as tools to open and cut things will prolong their life, and if accidental breakage or damage occurs, it is usually possible to replace only the veneer involved.</Typography>
                              <Typography className='para'>Call Carrum Downs Dental on <strong>03-9782 1200</strong> today for your consultation and Change your smile.</Typography>
                              <Box mt={3}>
                                <BookAndCall appointment={true} call={true} />
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4">
                          <Container maxWidth="xxl" className="p-0">
                            <Box>
                              <Box>
                                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                              </Box>
                              <Box mt={3}>
                                <div className="accordion" id="accordionExample">
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne">
                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Are veneers covered by dental insurance?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Being a cosmetic procedure, it depends on the insurance cover you have. Check with your</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Do dental veneers stain?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Dental veneers are made from stain-resistant composite, so they do not get easily stained. However, they can be susceptible to staining over time.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Do porcelain veneers ruin your teeth?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>No, porcelain veneers do not ruin natural teeth. In fact, they are customized to fit over your teeth and enhance the smile.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Do veneers make your breath smell?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>No, veneers do not make your breath smell. The foul smell could be caused by other factors and the neglect of your oral hygiene.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                      <InterestFree />
                      <TermsNCondition />
                    </section>
                    <section className='mt-md-5 mt-4 bg-grey'>
                      <Container maxWidth="xxl" className="p-0">
                        <Box p={2}>
                          <SectionalHeading variant="h5" color="var(--dark-blue)" title="Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction." align="center" />
                          <Box mt={2} className="d-flex justify-content-center">
                            <BookAndCall appointment={true} call={true} />
                          </Box>
                        </Box>
                      </Container>
                    </section>
                    <section className="mt-md-5 mt-4">
                      <Container maxWidth="xxl" className="p-0">
                        <Box>
                          <SectionalHeading variant="h2" color="var(--dark-blue)" title="Recent Posts" align="center" />
                        </Box>
                        <Box mt={3}>
                          <Grid container spacing={3}>
                            {
                              blogs.map(item => <Grid item key={item.id} xs={12} md={6} >
                                <CustomCard cardMedia={item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].source_url : null : null : null} navlink={true} link={`/${item.slug}/`} cardTitle={item.title.rendered} cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} cardHeight="auto" cardCls="shadow grow m-3" List={null} cardMediaAlt={item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].alt_text ? item._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} />
                              </Grid>)
                            }
                          </Grid>
                        </Box>
                      </Container>
                    </section>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : null
      }
    </>
  )
}

export default Veneers