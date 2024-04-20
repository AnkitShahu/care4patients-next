
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import WPAPI from 'wpapi'
import { CommonHero, CommonSidebar, SectionalHeading, BookAndCall, InterestFree, TermsNCondition, CustomCard } from '../../../components/components'
import Banner from '../../../public/child-benefit/Banner.jpg'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import ChildBenefitTreatment from '../../../public/child-benefit/child-benefit-compressed.jpg'
import { CheckCircleOutline, RadioButtonUncheckedOutlined } from '@mui/icons-material'

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://pritams3.sg-host.com/wp-json/wp/v2/categories?slug=children-dentistry`)
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }

const ChildBenefit = ({ data }) => {
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
    { id: "child_benefit_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "child_benefit_breadcrumb_2", link: null, title: 'Child Benefit' }
  ]

  return (
    <>

      <Head>
        <title>Child Dentist Carrum Downs | CDBS Carrum Downs | Child Benefit</title>
        <meta name="description" content="CDBS schedule allows child dental services for the kids between 2-17 years. Child dentists in Carrum Downs carry out the dental treatment very gently." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Child Benefit" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                      <section>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box mb={1}>
                            <Image src={ChildBenefitTreatment} alt="child benefit dental treatment - CDBS" />
                          </Box>
                          <Typography className="para">Thanks to the Australian Governments CDBS program. Eligible Kids between 2 – 17 years can get up to $1000* worth of dental services. Carrum Downs Dental Group at Shop T5, 100 Hall Road can BULK BILL treatment costs under this program for eligible kids.</Typography>
                          <Typography className="para">If you are not sure if you are eligible just give us a call and provide your medicate number. We will be able to confirm if you are eligible.</Typography>
                          <Typography className="para">At Carrum Downs Dental Group we have a play area for kids to engage themselves before the treatment. Also, during the treatment we can provide the child with distraction or entertainment with Kids channels or Movies while we gently complete the dental treatment.</Typography>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4 bg-grey rounded-lg'>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box p={1}>
                            <SectionalHeading variant="h4" title="To be eligible:" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="The child must be between 2–17 years old." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Have a Medicare card." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary={<strong>The child’s family receives Family Tax Benefit Part A or one of the following Australian Government payments:</strong>} />
                                </ListItem>
                              </List>
                              <Box pl={3}>
                                <List className='m-0 p-0'>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Youth Allowance" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="ABSTUDY" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Disability Support Pension" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Parenting Payment" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Special Benefit" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Carer Payment" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Double Orphan Pension" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Veteran’s Children Education Scheme, if the child is 16 or over" />
                                  </ListItem>
                                  <ListItem>
                                    <ListItemIcon>
                                      <RadioButtonUncheckedOutlined style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Military Rehabilitation and Compensation Act Education and Training Scheme, if the child is 16 or over" />
                                  </ListItem>
                                </List>
                              </Box>
                            </Box>
                            <Box my={2}>
                              <BookAndCall appointment={true} call={true} />
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
                        <Container maxWidth="xxl" className='p-0'>
                          <Box>
                            <SectionalHeading variant="h4" title="How to Claim the Child Benefit" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Box>
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Just book an appointment with us and let us know if you are eligible for claiming this benefit. If you are unsure we can check the eligibility on your behalf with you Medicare card number." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="Bring your medicare card along for your appointment." />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                  </ListItemIcon>
                                  <ListItemText primary="After your appointment we will bulk bill your treatment costs and this means you don’t need to pay from your pocket." />
                                </ListItem>
                              </List>
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      <section className='mt-md-5 mt-4'>
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
                                      What services are covered under CDBS?
                                    </button>
                                  </h3>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>The Child Dental Benefits Schedule provides individual benefits for services such as examinations, x-rays. Fissure sealing, cleaning, root canals and extractions.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Does CDBS cover wisdom teeth removal?
                                    </button>
                                  </h3>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Yes. People under CBDS are eligible for wisdom teeth removal through Medicare.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Is children’s dental covered by Medicare?
                                    </button>
                                  </h3>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                      <p className='para'>Absolutely. CDBS is a Medicare funding scheme that provides the eligible child with up to $1000 for dental costs of up to 2 calendar years.</p>
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
                            <SectionalHeading variant="h5" color="var(--dark-blue)" title="Book an appointment with Carrum Downs Dental (Shop T5, Hall Road) on 03-9782 1200 for your wisdom tooth extraction." align="center" />
                            <Box mt={2} className="d-flex justify-content-center">
                              <BookAndCall appointment={true} call={true} />
                            </Box>
                          </Box>
                        </Container>
                      </section>
                      {/* <section className="mt-md-5 mt-4">
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
                      </section> */}
                    </Grid>
                    <Grid item xs={12} lg={4}>
                      <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main> : null
      }
    </>
  )
}

export default ChildBenefit
