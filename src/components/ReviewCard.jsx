import { Avatar, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    minWidth: '300px',
    margin: '0 24px',
    position: 'relative',
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#fff',
    padding: '36px 24px',
    backgroundColor: "#111229",
    border: "2px solid #E5AF56",
    borderRadius: '16px',
  },
  shadow: {
    marginLeft: "6px",
    marginTop: "-12px",
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
    background: "linear-gradient(143.63deg, #276C73 5.43%, #5293E8 110.6%)",
    borderRadius: '16px',
    transitionDuration: '0.3s',
  },
  header: {
    display: 'flex',
    marginBottom: '16px',
  },
  titleContainer: {
    marginLeft: '16px',
  },
  avatar: {
    width: '48px',
    height: '48px'
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 0',
    "& img": {
      marginRight: "8px"
    }
  },
  name: {
    fontWeight: 700,
    fontSize: '16px',
    fontFamily: "Libre Baskerville",
    color: "white",
    margin: "8px 0 16px 0",
  },
  location: {
    fontWeight: 600,
    fontSize: '11px',
    fontFamily: "Nunito",
    color: "#E5C558",
  },
  review: {
    color: '#fff',
    maxWidth: '300px',
    fontWeight: 400,
    fontSize: '16px',
    fontFamily: "Nunito",
  }
}));


export default function ReviewCard({ image, name, location, flag, review }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.header}>
            <Avatar className={classes.avatar} src={image} />
            <div className={classes.titleContainer}>
              <Typography variant="subheading1" className={classes.name}>{name}</Typography>
              <div className={classes.locationContainer}>
                <img alt={location} src='/images/US.png' />
                <Typography className={classes.location}>{location}</Typography>
              </div>
            </div>
          </div>
          <div>
            <Typography className={classes.review}>{review}</Typography>
          </div>
        </CardContent>
      </Card>
      <div className={classes.shadow} />
    </div>
  )
}