import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    opacity: 0.2,
    color: theme.palette.grey[200],
  },
  top: {
    color: "#DD4CAC",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.5
  }
}));

export default function LandingProgress({ icon, value, label, progressValue }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          {icon}
          <Typography variant="h6">{value}</Typography>
          <Typography>{label}</Typography>
        </div>
      </div>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={200}
        thickness={0.5}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={200}
        thickness={0.5}
        value={progressValue}
      />
    </div>
  )
}