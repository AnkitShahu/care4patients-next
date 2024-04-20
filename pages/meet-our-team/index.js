import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { CommonHero } from '../../components/components';
import Banner from '../../public/meet-our-team/meet-our-team.jpg'
import Jhauj from '../../public/meet-our-team/headshot.jpg' 
import Swati from "../../public/meet-our-team/DrSwati.webp"
import Divya from "../../public/meet-our-team/DrDivya.webp"
import Chandni from "../../public/meet-our-team/DrChandni.jpeg"
import Chanrith from "../../public/meet-our-team/Chanrith.jpeg"
import Ken from "../../public/meet-our-team/ken.webp"


const MeetOurTeam = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState()

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

  const breadcrumb = [
    { id: "new_technology_breadcrumb_1", link: null, title: "Meet Our Team" }
  ]

  return (  
    <>

      <Head>
        <title>Meet Our Team – Carrum Downs Dental Group</title>
        <meta name="description" content="Our dental clinic has introduced new technologies to help enhance our practice and patient education. Explore the technologies" />
        <meta name="robots" content="index" />    
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Meet Our Professional Dental Team." align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                 
                <Box py={5}>
                  {/* <Typography variant="h2" align="center">HELLO!</Typography> */}
                  <Typography className="para" >This is us – the carrumdowns dental Team.</Typography>
                  <Typography className="para" >We pride ourselves on delivering the best cosmetic and restorative dental care possible and love getting to know our patients on a personal level. More importantly, we strive to go beyond the obvious to create a great environment in which you can feel safe and welcome.</Typography>
                  <Typography className="para">We’re excited to meet you!</Typography>
                  <Box mt={3}>
                    <Grid container>
                      {
                        [
                          { id: "doc-1", docName: "Dr. Swati",image: Swati, para: ["Dr Swati is a qualified dental professional with over 15 years of experience. She is registered with the Australian Health and Practice Regulatory Authority and certified by the Australian Dental Council.Her expertise lies in performing tooth extractions, root canal treatments, crown and bridge procedures, wisdom teeth extractions, restorative fillings, gum disease management, and cosmetic procedures such as veneers and teeth whitening.Dr Swati attends workshops and dental conferences regularly to keep up with the latest techniques and procedures. She uses her knowledge to help patients make informed decisions about their oral health and how to protect their gum and teeth.Dr Swati is not all work. She enjoys spending time with family and listening to music during her free time. She speaks three languages, including English, Hindi, and Marathi."] },
                          { id: "doc-2", docName: "Dr. Divya",image: Divya, para: ["Selva graduated in 2010 with a Bachelor’s degree in Dental surgery and is certified by the Australian Dental Council. Since then, she has been a top provider of dental care and treatment.Working for several dental practices for over a decade has provided Selva with vast work experience and a massive loyal patient base.Dr Selva strives to bring the latest procedures and practices to Springvale Dental Clinic; She has also been instrumental in ensuring that the dental team is always equipped with the necessary tools and knowledge.Her interests include cosmetic dentistry, restorative dentistry and root canal treatments along with surgical wisdom teeth extractions. She has experience with complex smile makeovers, porcelain and composite veneers, teeth whitening and makes patients confident about their smile. She speaks fluent English, Hindi, Tamil and Kannada."] },
                          { id: "doc-3", docName: "Dr. Jhauj",image: Jhauj, para: ["Dr. Jhauj graduated from The University of Melbourne in the class of 2020. He enjoys all aspects of dentistry from cleanings, to implants. Dr. Jhauj is motivated to continuously growing his knowledge from taking courses involving oral-moderate sedation, orthodontics and implant dentistry. Dr. Jhauj has experience dealing with dental trauma having worked as the team dentist for an ice hockey team while living in Canada. In his spare time Dr. Jhauj enjoys staying physically active and plays a variety of sports including soccer, volleyball, golf and ice hockey."] },
                          { id: "doc-4", docName: "Dr. Chandni",image: Chandni, para: ["Dr Chandni is your down to earth general dentist who is passionate about providing the best care for her patients. She graduated in 2013 with a Bachelor’s degree in Dental Science and is certified by the Australian Dental Council. She is a member of the Australian society of Endodontology as well.Chandni has worked in both the public and private sector. Her special interests include preventive and restorative dentistry, pedodontics and managing dental anxiety.Chandni places a strong emphasis on ensuring every patient is comfortable and relaxed while visiting the dentist. She keeps her skills updated by continuing professional development and going for different courses.Outside of Dentistry Chandni enjoys gardening and going for runs. She speaks fluent English, Punjabi and Hindi."] },
                          { id: "doc-5", docName: "Ms. Chanrith",image: Chanrith, para: ["Ms Chanrith Hean is a female Dental Prosthetist who speaks Cambodian and Khmer (as well as English). A 2012 graduate of RMIT University, Chanrith is passionate about helping patients smile confidently with the assistance of the various dental appliances that she custom-crafts. She also uses latest in digital technology to ensure the patient gets the best treatment outcome and it includes; Digital Dentures, Snap-on-Dentures or Implant Supported Dentures; Sleep Appliances etc."] },
                          { id: "doc-6", docName: "Mr. Ken",image: Ken, para: ["Ken is an accredited Biofunctional Prosthetic System (BPS) dental practitioner. His specialty lies in indentures. He provides high-quality dentures and expert consultations to clients regarding denture requirements. With over 40 years of experience in the industry, Ken ensures that his patients receive dentures of durable material and the necessary knowledge to properly take care of them.  In his spare time, Ken enjoys spending time with his grandchildren at his family farm. He teaches them how to herd the cows and occasionally gives them a ride on his tractor."] }
                        ].map(item => 
                        <Grid key={item.id} className="mt-5">
                          <Box>
                            <Grid container spacing={5}>
                              <Grid item xs={12} md={3}>
                                <Card >
                                  <CardMedia component="img" image={item.image.src} alt="dr_img" />
                                  <CardContent>
                                    <Typography variant="h3" className="text-center">{item.docName}</Typography>
                                    {/* {item.degree !== null ? <Typography variant="h4">{item.degree}</Typography> : null} */}
                                  </CardContent>
                                </Card>
                              </Grid>
                              <Grid item xs={12} md={7}>
                                <Box>
                                  {
                                    item.para.map((para, index) => <Typography key={`${item.id}.${index}`} className="para">{para}</Typography>)
                                  }
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>)
                      }
                    </Grid>
                  </Box>
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

export default MeetOurTeam
