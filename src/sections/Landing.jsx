import React from "react";
import Container from "@material-ui/core/Container";
import LandingProgress from "../components/LandingProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar";
import { ReactComponent as Like } from '../assets/icons/Like.svg'
import { ReactComponent as Calendar } from '../assets/icons/Calendar.svg'

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage: `linear-gradient(to top, #0A0B1A, transparent), url('/images/Background.png')`,
    backgroundSize: "cover",
  },
  container: {
    height: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  head: {
    display: "flex",
    justifyContent: "left",
    alignContent: "left",
    alignItems: "left",
    textAlign: "left",
    flexDirection: "column",
    fontWeight: 700,
    fontFamily: "Libre Baskerville",
    color: "white",
    marginBottom: "24px",
  },
  para: {
    fontWeight: 400,
    opacity: "60%",
    fontFamily: "Nunito",
    color: "white",
    maxWidth: "450px",
  },
  progressbar: {
    display: "flex",
    justifyContent: "space-between",
    overflow: 'auto',
    padding: '24px 0'
  },
}));


export default function Landing() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Navbar />
      <Container className={classes.container} maxWidth="lg">
        <div style={{ marginBottom: '64px' }}>
          <Typography className={classes.head} component="div" variant="h2">
            Cari Cari
          </Typography>
          <Typography className={classes.para} variant="h6">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </Typography>
        </div>
        <div className={classes.progressbar}>
          <LandingProgress icon={<Like />} value={0} label="Label" progressValue={70} />
          <LandingProgress icon={<Calendar />} value={0} label="Label" progressValue={0} />
          <LandingProgress icon={<Calendar />} value={0} label="Label" progressValue={0} />
          <LandingProgress icon={<Calendar />} value={0} label="Label" progressValue={0} />
        </div>
      </Container>
    </section>
  );
}
