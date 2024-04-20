import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WPAPI from 'wpapi'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from '@mui/material'
import { CommonSidebar, SectionalHeading, BookAndCall, TermsNCondition, CustomCard, CommonHero, InterestFree } from '../../../components/components'
import Slider1 from '../../../public/WisdomTeeth/Slider1.jpg'
import Slider2 from '../../../public/WisdomTeeth/Slider2.jpg'
import Slider3 from '../../../public/WisdomTeeth/Slider3.jpg'
import Slider4 from '../../../public/WisdomTeeth/Slider4.jpg'
import Banner from '../../../public/WisdomTeeth/Banner.jpg'
import { CheckCircleOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';

// export const getServerSideProps = async () => {
//   const res = await fetch(`https://pritams3.sg-host.com/wp-json/wp/v2/categories?slug=wisdom-teeth`)
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }

const WisdomTeeth = ({ data }) => {
  const [hydration, setHydration] = useState(false)
  const [width, setWidth] = useState()
  const [blogs, setBlogs] = useState([])
  const [mail, setMail] = useState({
    username: "",
    userphone: "",
    useremail: "",
    message: ""
  })
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState({})
  // const [category] = data

  // const wp = new WPAPI({
  //   endpoint: "https://pritams3.sg-host.com/wp-json/"
  // })

  useEffect(() => {
    if (typeof window !== undefined) {
      setHydration(true)
    } else {
      setHydration(false)
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
  // }, [blogs, category])

  const breadcrumb = [
    { id: "WisdomTeeth_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "WisdomTeeth_breadcrumb_2", link: null, title: 'Wisdom Teeth Removal in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Wisdom Teeth Removal Treatment | Carrum Downs Dental Group</title>
        <meta name="description" content="We have experienced & specialized in wisdom teeth removal dentists in Carrum Downs. Now don't suffer from symptoms of wisdom tooth extraction. Call Us now!" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Wisdom Teeth Removal in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        hydration ? <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} lg={8}>
                        <section>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" align="left" title="Wisdom Tooth and Other Surgical Extractions" color="var(--dark-blue)" />
                            {
                              ["<strong>“Come along for an opinion. Most complex extractions can be managed successfully on site, without the need of a hospital visit.”</strong>", "Carrum Downs Dental Group’s general dentists are specialised in Wisdom tooth, Impacted and Surgical extractions.We can remove your wisdom teeth in a caring way to relieve you of the pain and aches.", "We only recommend the removal of wisdom teeth if they are impacted or infected. The extraction is straightforward if the Wisdom tooth is straight and is not impacted and the <strong>costs for this will be from $200*</strong>.", "A minor surgery (including sectioning the bones) will be required for Impacted and horizontally growing tooth. The cost for this extraction <strong>starts from $300*</strong> and depends on the Impaction.", "In a very few circumstances, it may be too difficult to remove the tooth at our practice and in these cases we may refer patients to a specialist oral surgeon who is skilled in dealing with most complex cases. You can <strong>email us your OPG/X-Ray</strong> and we can advise you if we can remove it and can also provide you with the approximate cost"].map(item => <Typography key={item} className="Para" dangerouslySetInnerHTML={{ __html: item }} />)
                            }
                            <Box my={3}>
                              <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                pagination={{
                                  clickable: true,
                                }} className="slide-text mySwiper"
                                modules={[Navigation, Pagination, Autoplay]}
                                loop={true}
                                slidesPerView={1}
                                autoplay={{
                                  delay: 5000,
                                  disableOnInteraction: false,
                                }}
                              >
                                {
                                  [
                                    { id: "wisdom-tooth-x-ray", image: Slider1 },
                                    { id: "wisdom-tooth-x-ray2", image: Slider2 },
                                    { id: "new-wisdom-tooth-x-ray", image: Slider3 },
                                    { id: "wisdom-tooth-improper-positioning", image: Slider4 }
                                  ].map(item => <SwiperSlide key={item.id}>
                                    <Image src={item.image} alt={item.id} />
                                  </SwiperSlide>)
                                }
                              </Swiper>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <Box>
                                <SectionalHeading variant="h2" title="Symptoms requiring Wisdom tooth extraction." align="left" color="var(--dark-blue)" />
                                <List>
                                  {
                                    ["The Wisdom teeth dint fully erupt and is causing Impaction or overcrowding.", "Chronic pain in your gums around the wisdom tooth. The pain is caused because of food and bacteria getting trapped in between impacted teeth.", "Wisdom teeth did not come out straight and cause your teeth to shift and move over time.", "Wisdom teeth causing decay of the adjacent tooth. Due to the location of the Wisdom tooth"].map(item => <ListItem key={item} className="ps-0">
                                      <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                      </ListItemIcon>
                                      <ListItemText primary={item} />
                                    </ListItem>)
                                  }
                                </List>
                              </Box>
                              <Box mt={3}>
                                <SectionalHeading variant="h2" title="What happens during your Wisdom tooth extraction?" align="left" color="var(--dark-blue)" />
                                {
                                  ["Prior to the surgery your dentist will discuss with you the procedure and will let you know what to expect during and after the procedure. A local anaesthetic will be given to numb the area around the wisdom tooth so you do not feel any pain. To remove the wisdom tooth, your dentist will remove the gum tissue or bone over your tooth. The wisdom tooth is either extracted or cut in to small pieces to make way for easier removal. Stitches may be required after the extraction. The dentist will advise if all of the wisdom teeth can be removed in a single or multiple sitting.", "If you are Anxious about getting the dental treatment done, we can also provide Laughing Gas or Happy Gas sedation to help reduce your pain and anxiety during the treatment."].map(item => <Typography key={item} className="para" dangerouslySetInnerHTML={{ __html: item }} />)
                                }
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
                                  {
                                    [
                                      { id: "One", que: "Why are wisdom teeth removed?", ans: "A wisdom tooth can be removed for various reasons, such as a wisdom tooth that failed to erupt fully, chronic pain on the gums around the wisdom tooth, a tooth that didn’t come out straight or a wisdom tooth causing decay to the adjacent teeth." },
                                      { id: "Two", que: "Does Medicare cover wisdom teeth removal?", ans: "Yes, wisdom teeth removal is covered under Medicare for eligible Kids under the CDBS Program." },
                                      { id: "Three", que: "What to eat after wisdom teeth removal?", ans: "Following wisdom teeth removal, you should eat soft foods and liquids such as yoghurt, mashed potatoes, pudding and smoothies. Cold foods like ice cream can offer relief." },
                                      { id: "Four", que: "after wisdom teeth removal?", ans: "Following wisdom teeth removal, you should eat soft foods and liquids such as yoghurt, mashed potatoes, pudding and smoothies. Cold foods like ice cream can offer relief." }
                                    ].map(item => <div key={`faq-${item.id}`} className="accordion-item">
                                      <h3 className="accordion-header" id={`heading${item.id}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}>
                                          {item.que}
                                        </button>
                                      </h3>
                                      <div id={`collapse${item.id}`} className="accordion-collapse collapse show" aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                          <p className='para'>{item.ans}.</p>
                                        </div>
                                      </div>
                                    </div>)
                                  }
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
                        <Box px={3}>
                          <Box mb={5} style={{ border: "2px solid var(--grey)", borderRadius: "1.2rem" }}>
                            <Box py={2}>
                              <SectionalHeading variant="h5" color="var(--dark-blue)" title="Contact Us" align="center" />
                            </Box>
                            <Box p={3}>
                              <form method='post' action='https://formsubmit.co/d53a69bc539b96c63b2afdcb0767af8d' encType="multipart/form-data">
                                <div className='row'>
                                  <div className='col-12'>
                                    <div className='form-group'>
                                      <input type="text" placeholder='Name' className='form-control' name='username' required />
                                    </div>
                                  </div>
                                  <div className='col-12'>
                                    <div className='form-group'>
                                      <input type="tel" placeholder='Phone Number' className='form-control' name='userphone' required />
                                    </div>
                                  </div>
                                  <div className='col-12'>
                                    <div className='form-group'>
                                      <input type="email" placeholder='Email' className='form-control' name="useremail" required />
                                    </div>
                                  </div>
                                  <div className='col-12'>
                                    <div className='form-group'>
                                      <input className='form-control' type="file" name="attachment" />
                                    </div>
                                  </div>
                                  <div className='col-12'>
                                    <div className='form-group'>
                                      <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="2" placeholder="Your message" name="message" required></textarea>
                                    </div>
                                  </div>
                                </div>
                                <Button focusRipple fullWidth className='blueFilledBtn text-white font-weight-bold' type='submit' style={{ fontSize: "1.2rem !important" }}>Submit</Button>
                              </form>
                            </Box>
                          </Box>
                        </Box>
                        <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : 'LOADING...'
      }
    </>
  )
}

export default WisdomTeeth