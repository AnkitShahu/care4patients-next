import Banner from "../../public/Services/service-bg.jpg";
import {
  BlueFilledBtn,
  BlueOulinedBtn,
  CommonHero,
  SectionalHeading,
} from "../../components/components";
// import Wisdom from "../../public/Services/wisdom-teeth-removal-01.png";
import childBenefit from "../../public/Services/child-benefit-01.png";
import dentalImplant from "../../public/Services/dental-implants-01.png";
import denture from "../../public/Services/dentures-01.png";
import teethWhitening from "../../public/Services/teeth-whitening-01.png";
import CnB from "../../public/Services/crowns-and-bridge-01.png";
import veneers from "../../public/Services/veneers-01.png";
import invisalign from "../../public/Services/invisalign-01.png";
import RC from "../../public/Services/root-canal-01.png";
import teethCleaning from "../../public/Services/teeth-cleaning-01.png";
import dentalEmergency from "../../public/Services/emergency-01.png";
import toothFilling from "../../public/Services/fillings-01.png";
import React, { useState } from "react";
import Img from "../../public/dental-problems-img/tooth gaps/Tooth_gaps-01.png";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import teethMissing1 from "../../public/teeth-missing/Demo 01.png";
import teethMissing2 from "../../public/teeth-missing/Demo 01.png";
// import bridges from "../../public/teeth-missing/Demo 01.png";
// import denture from "../../../public/teeth-missing/teeth-missing1.png";
// import supportedDenture from "../../public/teeth-missing/Demo 01.png";
// import dentalImplants from "../../public/teeth-missing/Demo 01.png";
import Head from "next/head";
import PageContent from "../../components/PageContent";
import MobileContent from "../../components/MobileContent";
// import { PageContent } from "../../components/components";
// import mobilePageData from "../../components/MobileContent";
import Wisdom from "../../public/dental-problems-img/wisdom-teeth/Wisdom_teeth_01.png";
import ToothGap from "../../public/dental-problems-img/tooth gaps/Tooth_gaps-02.png";
const tabs = [
  "Wisdom Tooth pain",
  "Tooth Gap",
  "Teeth Sensitivity",
  "Stained Teeth",
  "Severe Toothache",
  "Knocked Out Teeth",
  "Gum Disease",
  "Dry Socket",
  "Dental Abscess",
  "Crooked Teeth",
  "Chipped Or Cracked Tooth",
  "Bruxism",
  "Bleeding Gums",
  "Bite Problems",
  "Bad Breath",
];

const index = () => {
  const [selectedTab, setSelectedTab] = useState(0);
   
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const mobilePageData = [
    {
      title: "Wisdom Tooth Pain",
      content:
        "Wisdom teeth are the last set of molars to erupt, usually between the late teens and early twenties. When these teeth become impacted or only partially emerge, they can cause significant pain and problems.The cramped space in the back of the mouth often leaves no room for wisdom teeth to fully come in.Partially emerged teeth end up trapped against the other molars and jawbone,leading to inflammation, infection risk, and damage to nearby teeth",
      imageSrc: Wisdom,
      readMoreLink: "/dental-problems/wisdom-tooth-pain",
    },
    {
      title: "Tooth Gap",
      content:
        "Gaps in your teeth entail more than just an aesthetic concern. They could potentially elevate the likelihood of tooth decay and various other dental complications. Feel free to pay a visit to Carrum Downs Dental Group, where our amiable dental experts will skillfully assist you in addressing and handling the gaps within your teeth.",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/tooth-gap",
    },
    {
      title: "Teeth Sensitivity",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/teeth-sensitivity",
    },
    {
      title: "Stained Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/stained-teeth",
    },
    {
      title: "Severe Toothache",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/severe-toothache",
    },
    {
      title: "Knocked Out Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/knocked-out-tooth",
    },
    {
      title: "Gum Disease",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/gum-disease",
    },
    {
      title: "Dry Socket",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/dry-socket",
    },
    {
      title: "Dental Abscess",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/dental-abscess",
    },
    {
      title: "Crooked Teeth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/crooked-teeth",
    },
    {
      title: "Chipped Or Cracked Tooth",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/chipped-or-cracked-tooth",
    },
    {
      title: "Bruxism",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/bruxism",
    },
    {
      title: "Bleeding Gums",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/bleeding-gums",
    },
    {
      title: "Bite Problems",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/bite-problems",
    },
    {
      title: "Bad Breath",
      content: "Content for Tooth Gap page...",
      imageSrc: ToothGap,
      readMoreLink: "/dental-problems/bad-breath",
    },
  ];
  return (
    <>
      <Head>
        <title>Dental Problems Carrum Downs | Carrum Downs Dental</title>
        <meta
          name="description"
          content="Carrum Downs Dental offers wisdom teeth extraction, dental implants, teeth whitening, dentures, root canal, & other services in Carrum Downs, you can count on Us."
        />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/service/" />
      </Head>
      <CommonHero
        bg={Banner}
        breadcrumb={null}
        title="Dental Problems"
        align="left"
        color="#fff"
      />
      <main>
        <section>
          {/* <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}> */}
          <section
            className="teeth-missing-section1"
            style={{
              //   marginTop: "12rem",
              backgroundColor: "#1ebdb6",
              marginBottom: "2rem",
              position: "relative",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="text-white"
                      gutterBottom
                    >
                      Always Care for Your Dental Problems.
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white"
                      gutterBottom
                    >
                      Dental problems are unbelievably common, but most people
                      are unsure of how to address them correctly. Ignoring your
                      oral problems can be very consequential moving forward
                      therefore it is very important to get them checked out so
                      you can prevent any future complications and maintain your
                      beautiful smile forever.
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white"
                      gutterBottom
                    >
                      {" "}
                      At carrumdowns Dental Clinic, we supply excellent dental
                      care and give you lots of information so that you know how
                      to maintain a charming smile. Our team of experts has lots
                      of experience in addressing common dental issues. We are
                      committed to allowing you to understand your own mouth
                      better. Book an appointment today.
                    </Typography>
                    <Box>
                      <BlueFilledBtn
                        navlink={true}
                        btnTitle="BOOK APPOINTMENT"
                        btnLink="/book-now/"
                      />
                      <BlueOulinedBtn
                        anchor={true}
                        btnTitle="03-9782 1200"
                        btnLink="tel:03-9782 1200"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <Image
                    src={teethMissing1}
                    alt="Image"
                    width={450}
                    height={400}
                  />
                </Grid>
              </Grid>
            </Container>
          </section>
          <div className="lower_clipPath"></div>
          <section>
            <Container>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="d-flex justify-content-center"
                >
                  <Image
                    src={teethMissing2}
                    alt="Image"
                    width={450}
                    height={400}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Restore Missing Teeth and Improve Your Overall Health
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Missing teeth can lead to a number of oral problems,
                      including difficulty chewing and speaking. When one or
                      more teeth are missing, it can also cause the surrounding
                      teeth to shift out of place and affect your bite. This
                      misalignment can then lead to issues such as tooth decay,
                      gum disease, and even TMJ disorder.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      It's important to address missing teeth as soon as
                      possible for both aesthetic and health reasons. With
                      advancements in modern dentistry, there are various
                      options available for restoring missing teeth that look
                      natural and function like real teeth.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      At Carrum Downs Dental Group, we offer personalized
                      treatment plans that cater specifically to each patient's
                      needs. Our goal is always to restore our patients' smiles
                      so they feel confident in their appearance while
                      maintaining optimal oral health.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>

          <div className="upper_clipPath"></div>
          <section
            style={{
              backgroundColor: "#1ebdb6",
              marginBottom: "2rem",
              position: "relative",
              paddingBottom: "6rem",
            }}
          >
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      className="text-white"
                      gutterBottom
                    >
                      Dental Services That Can Address Missing Teeth
                    </Typography>
                    <Typography
                      variant="body1"
                      className="text-white"
                      gutterBottom
                    >
                      At Carrum Downs Dental Group, we understand the importance
                      of addressing missing teeth to maintain oral health and
                      improve overall well-being. Our dental team provides a
                      range of services that can help restore your smile.
                    </Typography>
                  </Box>
                </Grid>
                {/* mobile view  */}
                <Container>
                  <Grid item xs={12} md={6}>
                    {/* <MobileContent selectedTab={selectedTab} /> */}
                    {/* {mobilePageData.map((data, index) => (
                      <Box sx={{ px: 2 }} key={index}>
                        <div className="mobile-accordion">
                          <div
                            className="accordion"
                            id={`accordionExample-${index}`}
                          >
                            <div className="accordion-item d-md-block">
                              <h3
                                className="accordion-header"
                                id={`heading-${index}`}
                              >
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${index}`}
                                  aria-expanded="true"
                                  aria-controls={`collapse-${index}`}
                                >
                                  {data.title}
                                </button>
                              </h3>
                              <div
                                id={`collapse-${index}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent={`#accordionExample-${index}`}
                              >
                                <div className="accordion-body">
                                  <p className="para">{data.content}</p>
                                  <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className="d-flex justify-content-center"
                                  >
                                    <Image
                                      src={data.imageSrc}
                                      alt="Image"
                                      width={450}
                                      height={400}
                                      className="img-fluid"
                                    />
                                  </Grid>
                                  <Link
                                    href={data.readMoreLink}
                                    className="bg-blue"
                                  >
                                    Read More..
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    ))} */}
                    {mobilePageData.map((data, index) => (
                      <Box className="py-1" key={index}>
                        <div className="mobile-accordion">
                          <div
                            className={`accordion ${index === 0 ? "show" : ""}`}
                            id={`accordionExample-${index}`}
                          >
                            <div className="accordion-item d-md-block">
                              <h3
                                className="accordion-header"
                                id={`heading-${index}`}
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${index}`}
                                  aria-expanded={index === 0 ? "true" : "false"}
                                  aria-controls={`collapse-${index}`}
                                >
                                  {data.title}
                                </button>
                              </h3>
                              <div
                                id={`collapse-${index}`}
                                className={`accordion-collapse collapse ${
                                  index === 0 ? "show" : ""
                                }`}
                                aria-labelledby={`heading-${index}`}
                                data-bs-parent={`#accordionExample-${index}`}
                              >
                                <div className="accordion-body">
                                  <p className="para">{data.content}</p>
                                  <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    className="d-flex justify-content-center"
                                  >
                                    <Image
                                      src={data.imageSrc}
                                      alt="Image"
                                      width={450}
                                      height={400}
                                      className="img-fluid"
                                    />
                                  </Grid>
                                  <Link
                                    href={data.readMoreLink}
                                    className="bg-blue"
                                  >
                                    Read More..
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </Grid>
                </Container>
                {/* <div className="medium-large-layout"> */}
                <Container className="medium-large-layout">
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      md={4}
                      style={{
                        overflowY: "auto",
                        maxHeight: "60vh",
                      }}
                    >
                      <Paper>
                        <Tabs
                          className="show-tabs-hide-accordion"  
                          orientation="vertical"
                          variant="scrollable"
                          value={selectedTab}
                          onChange={handleTabChange}
                        >
                          {tabs.map((tab, index) => (
                            <Tab
                              label={tab}
                              key={index}
                              style={{
                                backgroundColor:
                                  selectedTab === index
                                    ? "skyblue"
                                    : "transparent",
                                borderRadius:
                                  selectedTab === index ? "5px" : "0px",
                              }}
                            />
                          ))}
                        </Tabs>
                      </Paper>
                    </Grid>
                    {/* <Grid item xs={8} md={8}>
                      <div>Content for {tabs[selectedTab]} goes here.</div>
                      <Link href="/">Read More..</Link>
                    </Grid> */}
                    <Grid item xs={8} md={8}>
                      {/* <div>Content for {tabs[selectedTab]} goes here.</div> */}

                      <PageContent selectedTab={selectedTab} />
                      {/* <Box sx={{ p: 2 }}>
                        <Typography
                          variant="h5"
                          component="h2"
                          className="text-white"
                          gutterBottom
                        >
                          Learn More About Missing Teeth
                        </Typography>
                        <Typography
                          variant="body1"
                          className="text-white"
                          gutterBottom
                        >
                          Are you struggling with missing teeth? Not only can it
                          affect your appearance and confidence, but it can also
                          lead to oral problems and impact your overall health.
                          That's why restoring missing teeth is crucial, and
                          Carrum Downs Dental Group is here to help. Our dental
                          clinic offers a range of services that can address
                          missing teeth, improve your oral health, and boost
                          your self-esteem.
                        </Typography>
                      </Box>

                      <Image src={Img}
                        alt="Image"
                        width={450}
                        height={400}
                      />

                      <Link
                        href="/dental-problems/wisdom-tooth-pain"
                        className="bg-blue"
                      >
                        Read More..
                      </Link> */}
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Container>
          </section>
          <div className="lower_clipPath"></div>
          <section className="mt-4 ">
            <Container>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2 }}>
                  <Box>
                    <SectionalHeading
                      variant="h2"
                      color="var(--dark-blue)"
                      title="Frequently Asked Questions About Missing Teeth"
                      align="center"
                    />
                  </Box>
                  <Box mt={3}>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What causes tooth loss?
                          </button>
                        </h3>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="para">
                              Tooth loss can result from a variety of factors,
                              including decay, gum disease, injury, or trauma.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Can missing teeth affect my overall health?
                          </button>
                        </h3>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="para">
                              Yes! Missing teeth can impact your ability to eat
                              and speak properly, which in turn affects your
                              nutrition and confidence. It may also lead to bone
                              loss in the jaw over time.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How long does it take to restore missing teeth?
                          </button>
                        </h3>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="para">
                              The duration depends on the treatment plan
                              selected by your dentist. In some cases, where
                              there is enough healthy bone available at the site
                              of the gap left behind by the missing tooth/teeth,
                              an implant-supported crown can be completed
                              relatively quickly - sometimes within one day!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What are the Disadvantages of having a Missing
                            Tooth?
                          </button>
                        </h3>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="para">
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Discomfort while eating </strong>{" "}
                                    Difficulty in chewing hard foods may lead to
                                    digestion issues and unhealthy snacking
                                    habits. Moreover, the unnatural movement of
                                    your mouth while chewing food can also cause
                                    jaw pain.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Bone density loss </strong> Lack of
                                    motion in key areas of the jawbone can cause
                                    a reduction in bone mass and strength over
                                    time. This can result in weaker bones and
                                    significant loss of bone density.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Premature facial aging </strong>{" "}
                                    Progressive bone loss without tooth roots
                                    stimulating the jawbone can make a face
                                    hollow over time.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Teeth misalignment </strong> The
                                    absence of support from missing teeth can
                                    cause the neighbouring teeth to move and
                                    shift, leading to misaligned teeth.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Speech impediments </strong> A
                                    missing tooth can result in difficulty
                                    communicating with others and create speech
                                    impediments.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Periodontal disease </strong> The
                                    space left behind by a missing tooth can
                                    become a breeding ground for bacteria,
                                    increasing the chances of infection and the
                                    potential development of gum disease.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>
                                      Compromised facial aesthetics{" "}
                                    </strong>{" "}
                                    A missing tooth can impact the aesthetics of
                                    your smile, leaving a lasting impression on
                                    those around you. It may even cause feelings
                                    of embarrassment or unattractiveness.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Decreased confidence </strong> A
                                    missing tooth can result in plummeting
                                    self-esteem, preventing new experiences such
                                    as meaningful social connections or career
                                    opportunities.
                                  </ListItemText>
                                </ListItem>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            What happens if I lose a tooth and don't replace it?
                          </button>
                        </h3>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="para">
                              Although a missing tooth may appear to be
                              insignificant, it can result in various issues
                              beyond just affecting your smile. The absence of
                              support and stability provided by each tooth in
                              your mouth can cause the remaining teeth to shift
                              toward the empty space, resulting in an uneven
                              bite. This can lead to difficulties while flossing
                              and increase the likelihood of plaque build-up,
                              potentially causing gum disease and further tooth
                              loss.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            What are the Benefits of Addressing a Missing Tooth?
                          </button>
                        </h3>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="para">
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Improved appearance </strong> One of
                                    the most significant benefits of addressing
                                    a missing tooth is improved appearance.
                                    Replacing one or more teeth can boost your
                                    self-esteem and make you feel more confident
                                    in social or professional settings. You'll
                                    look great and feel more confident than ever
                                    before.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Restored oral health </strong>
                                    Addressing tooth loss can help you achieve
                                    optimal oral health. You can return to
                                    enjoying good oral hygiene and living
                                    without discomfort. Leaving a gap in your
                                    mouth can lead to various oral health
                                    problems, including gum disease, tooth
                                    decay, and bone loss.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>Restored functionality </strong>{" "}
                                    Addressing your missing tooth issue can
                                    restore the normal function of your mouth.
                                    It can give you back dental functions like
                                    chewing, biting, and speaking. Managing the
                                    problem can help you regain your teeth's
                                    original benefits and restore balance and
                                    aesthetics to your smile.
                                  </ListItemText>
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <CheckCircleOutline
                                      style={{ color: "var(--dark-blue)" }}
                                    />
                                  </ListItemIcon>
                                  <ListItemText>
                                    <strong>
                                      Support for remaining teeth{" "}
                                    </strong>{" "}
                                    Filling the gap left behind by that lost
                                    tooth can also provide much-needed stability
                                    and support to adjacent teeth, supporting
                                    the remaining teeth. It can help the
                                    adjacent teeth maintain proper alignment
                                    while preventing food debris from collecting
                                    in the empty gap.
                                  </ListItemText>
                                </ListItem>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Container>
          </section>
          {/* </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container> */}
        </section>
      </main>
    </>
  );
};

export default index;

// {mobilePageData.map((data, index) => (
//   <Box sx={{ px: 2 }}>
//     <div className="mobile-accordion">
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item d-md-block">
//           <h3 className="accordion-header" id="headingOne">
//             <button
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapseOne"
//               aria-expanded="true"
//               aria-controls="collapseOne"
//             >
//               {data.title}
//             </button>
//           </h3>
//           <div
//             id="collapseOne"
//             className="accordion-collapse collapse show"
//             aria-labelledby="headingOne"
//             data-bs-parent="#accordionExample"
//           >
//             <div className="accordion-body">
//               <p className="para">{data.content}</p>
//               <Grid
//                 item
//                 xs={12}
//                 md={6}
//                 className="d-flex justify-content-center"
//               >
//                 <Image
//                   src={data.imageSrc}
//                   alt="Image"
//                   width={450}
//                   height={400}
//                   className="img-fluid"
//                 />
//               </Grid>
//               <Link
//                 href={data.readMoreLink}
//                 className="bg-blue"
//               >
//                 Read More..
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Box>
// ))}
{
  /* <Box sx={{ px: 2 }}>
                      <div className="mobile-accordion">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item d-md-block">
                            <h3 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Wisdom Tooth Pain
                              </button>
                            </h3>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p className="para">
                                  Wisdom teeth are the last set of molars to
                                  erupt, usually between the late teens and
                                  early twenties. When these teeth become
                                  impacted or only partially emerge, they can
                                  cause significant pain and problems. The
                                  cramped space in the back of the mouth often
                                  leaves no room for wisdom teeth to fully come
                                  in. Partially emerged teeth end up trapped
                                  against the other molars and jawbone, leading
                                  to inflammation, infection risk, and damage to
                                  nearby teeth.
                                </p>
                                <Grid
                                  item
                                  xs={12}
                                  md={6}
                                  className="d-flex justify-content-center"
                                >
                                  <Image
                                    src={Wisdom}
                                    alt="Image"
                                    width={300}
                                    height={300}
                                    className="img-fluid"
                                  />
                                </Grid>
                                <Link
                                  href="/dental-problems/wisdom-tooth-pain"
                                  className="bg-blue"
                                >
                                  Read More..
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box> */
}
{
  /* <Box sx={{ px: 2 }} className="">
                      <div className="mobile-accordion">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item d-md-block">
                            <h3 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Wisdom Tooth Pain
                              </button>
                            </h3>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p className="para">
                                  Wisdom teeth are the last set of molars to
                                  erupt, usually between the late teens and
                                  early twenties. When these teeth become
                                  impacted or only partially emerge, they can
                                  cause significant pain and problems. The
                                  cramped space in the back of the mouth often
                                  leaves no room for wisdom teeth to fully come
                                  in. Partially emerged teeth end up trapped
                                  against the other molars and jawbone, leading
                                  to inflammation, infection risk, and damage to
                                  nearby teeth.
                                </p>
                                <Grid
                                  item
                                  xs={12}
                                  md={6}
                                  className="d-flex justify-content-center"
                                >
                                  <Image
                                    src={Wisdom}
                                    alt="Image"
                                    width={300}
                                    height={300}
                                    className="img-fluid"
                                  />
                                </Grid>
                                <Link
                                  href="/dental-problems/wisdom-tooth-pain"
                                  className="bg-blue"
                                >
                                  Read More..
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box> */
}
{
  /* <section className="mt-4 ">
                  <Container>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ p: 1 }}>
                        <Box>
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h3 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  What causes tooth loss?
                                </button>
                              </h3>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="para">
                                    Tooth loss can result from a variety of
                                    factors, including decay, gum disease,
                                    injury, or trauma.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                  </Container>
                </section> */
}

{
  /* <Container className="medium-large-layout">
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={4}
                      md={4}
                      style={{
                        overflowY: "auto",
                        maxHeight: "60vh",
                      }}
                    >
                      <Paper>
                        <Tabs
                          className="show-tabs-hide-accordion" // Show tabs on larger screens
                          orientation="vertical"
                          variant="scrollable"
                          value={selectedTab}
                          onChange={handleTabChange}
                        >
                          {tabs.map((tab, index) => (
                            <Tab
                              label={tab}
                              key={index}
                              style={{
                                backgroundColor:
                                  selectedTab === index
                                    ? "skyblue"
                                    : "transparent",
                                borderRadius:
                                  selectedTab === index ? "5px" : "0px",
                              }}
                            />
                          ))}
                        </Tabs>
                      </Paper>
                    </Grid>
                    <Grid item xs={8} md={8}>

                      <Typography
                        variant="body1"
                        className="text-white"
                        gutterBottom
                      >
                        Content for {tabs[selectedTab]} goes here.
                      </Typography>
                      <Button>Read More</Button>
                    </Grid>
                  </Grid>
                </Container> */
}
