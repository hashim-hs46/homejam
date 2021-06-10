import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import ReviewCard from "../components/ReviewCard";
import UpcomingShowCard from "../components/UpcomingShowCard";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0A0B1A",
    color: 'white',
    padding: '64px 0'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',

    '& section': {
      padding: '64px 0'
    }
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    fontWeight: 700,
    fontFamily: "Libre Baskerville",
    color: "white",
    paddingBottom: "8px",
  },
  headingDivider: {
    width: '48px',
    height: '2px',
    backgroundColor: '#0259EB'
  },
  subHead: {
    width: '200px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#ffffff61'
  },
  pager: {
    '& span': {
      color: 'white'
    },
  },
  viewAll: {
    color: '#E5C558'
  },
  upcomingContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    overflow: 'auto',
    display: "flex",
    justifyContent: "space-between",
    marginTop: '64px',
    padding: '24px 0',
  },
  reviewContainer: {
    position: 'relative',
    width: '100%',
    minHeight: '400px',
    overflow: 'auto',
    display: "flex",
    justifyContent: "space-between",
    marginTop: '64px',
    padding: '24px 0',

  },
}));


export default function UpcomingShows() {
  const classes = useStyles();
  const review = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."

  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Container maxWidth='lg'>
          <div className={classes.headingContainer}>
            <div>
              <Typography className={classes.heading} component="div" variant="h5">
                Upcoming Shows
              </Typography>
              <div className={classes.headingDivider} />
            </div>
            <Typography className={classes.viewAll}>View All</Typography>
          </div>
          <div className={classes.upcomingContainer}>
            <UpcomingShowCard image='/images/Img1.png' name="Benny Dayal" showType="Folk" />
            <UpcomingShowCard image='/images/Img2.png' name="Vijay Yesudas" showType="Bollywood" />
            <UpcomingShowCard image='/images/Img3.png' name="Andrea Jeremiah" showType="Folk" />
            <UpcomingShowCard image='/images/Img4.png' name="Shilpa Rao" showType="Folk" />
          </div>
        </Container>

        <Container maxWidth='lg'>
          <div className={classes.headingContainer}>
            <div>
              <Typography className={classes.heading} component="div" variant="h5">
                Reviews
              </Typography>
              <div className={classes.headingDivider} />
            </div>
            <div className={classes.subHead}>
              <Typography className={classes.pager}><span>1</span>/12</Typography>
              <IconButton color="inherit">
                <ArrowBackIcon />
              </IconButton>
              <IconButton color="inherit">
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
          <div className={classes.reviewContainer}>
            <ReviewCard image='/images/review1.jpg' name="Hellen Jummy" location="Palo Alto, CA" flag="US" review={review} />
            <ReviewCard image='/images/review2.jpg' name="Isaac Oluwatemilorun" location="Palo Alto, CA" flag="US" review={review} />
            <ReviewCard image='/images/review3.jpeg' name="Hellen Jummy" location="Palo Alto, CA" flag="US" review={review} />
          </div>
        </Container>
      </div>
    </section>
  );
}
