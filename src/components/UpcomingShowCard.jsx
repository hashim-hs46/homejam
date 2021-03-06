import { Button, Card, CardContent, CardMedia, Chip, Divider, IconButton, makeStyles, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { useLayoutEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    minWidth: '250px',
    maxHeight: '400px',
    margin: '0 24px',
    position: 'relative'
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#fff',
    backgroundColor: "#111229",
    borderRadius: '8px',
  },
  shadow: {
    marginLeft: "4px",
    marginTop: "-8px",
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
    borderRadius: '8px',
  },
  media: {
    minWidth: '250px',
    height: '220px'
  },
  chip: {
    width: "auto",
    height: 'auto',
    backgroundColor: "#E5C558",
    borderRadius: '1px',
    padding: '2px 6px',
    fontFamily: "Nunito",
    fontWeight: 600,
    fontSize: "12px",
    "& .MuiChip-label": {
      padding: 0
    }
  },
  hostName: {
    fontWeight: 700,
    fontFamily: "Libre Baskerville",
    color: "white",
    margin: "8px 0 16px 0",
  },
  cardActionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
  },
  button: {
    color: "#0259EB",
    '& .MuiButton-endIcon': {
      transitionDuration: '0.3s'
    },
    '&:hover .MuiButton-endIcon': {
      transform: 'translateX(8px)'
    }
  },
  ticketContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: '#ffffff1f',
  }
}));


export default function UpcomingShowCard({ image, name, showType }) {
  const classes = useStyles()
  const [isHovered, setIsHovered] = useState(false)
  const [svgProps, setSvgProps] = useState({
    stroke: "url(#paint0_linear)"
  })

  useLayoutEffect(() => {
    if (isHovered) 
      setSvgProps({
        fill: "url(#paint0_linear)"
      })
    else setSvgProps({
      stroke: "url(#paint0_linear)"
    }) 
  }, [isHovered, setSvgProps])

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Chip className={classes.chip} label={showType} />
          <Typography className={classes.hostName} variant="h6">{name}</Typography>
        </CardContent>
        <div className={classes.cardActionContainer}>
          <Button className={classes.button} variant="text" endIcon={<ArrowForward />}>More Info</Button>
          <div className={classes.ticketContainer}>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path {...svgProps} fill-rule="evenodd" clip-rule="evenodd" d="M7.54568 0.65584C7.52165 0.583249 7.48105 0.51643 7.4262 0.461073C7.33232 0.366312 7.20445 0.312998 7.07106 0.312988L3.00731 0.312685C1.84749 0.312816 0.880977 1.2298 0.878657 2.39121L0.837596 22.9458C0.835275 24.1081 1.7994 25.0261 2.95996 25.026L7.02363 25.0255C7.19411 25.0255 7.35283 24.9386 7.44472 24.795C7.64567 24.481 7.82795 24.1602 7.99726 23.8623L7.99729 23.8623L7.99779 23.8614L7.99815 23.8607C8.04148 23.7845 8.08396 23.7097 8.12568 23.637C8.33578 23.2707 8.529 22.9507 8.73911 22.6817C9.14142 22.1665 9.57901 21.8666 10.2809 21.8665C10.9795 21.8664 11.4009 22.163 11.7949 22.6776C12.0017 22.9478 12.1921 23.2682 12.4052 23.6377L12.4735 23.7563C12.6634 24.0866 12.8712 24.4479 13.1105 24.8038C13.2034 24.9419 13.359 25.0248 13.5255 25.0248L17.5892 25.0243C18.749 25.0242 19.7154 24.1072 19.7177 22.9458L19.7588 2.39119C19.7611 1.22888 18.797 0.310904 17.6364 0.311035L13.5711 0.311494C13.4326 0.311509 13.3004 0.368957 13.2058 0.470146C13.1604 0.518814 13.1256 0.575503 13.1028 0.636612C12.867 0.986732 12.6636 1.33581 12.4782 1.65394L12.4319 1.73339C12.2145 2.10586 12.0241 2.42536 11.8182 2.69419C11.615 2.95945 11.4121 3.15423 11.1832 3.28487C10.9593 3.41266 10.685 3.49374 10.3155 3.49378C9.60861 3.49386 9.16263 3.19623 8.76055 2.68764C8.55069 2.42217 8.35812 2.10433 8.15317 1.73983C8.08975 1.62703 8.02418 1.50793 7.95668 1.38534L7.95653 1.38506C7.82673 1.14931 7.68958 0.900196 7.54568 0.65584ZM11.9343 6.65503C11.6581 6.65503 11.4343 6.87889 11.4343 7.15503C11.4343 7.43117 11.6581 7.65503 11.9343 7.65503L15.1871 7.65503C15.4633 7.65503 15.6871 7.43117 15.6871 7.15503C15.6871 6.87889 15.4633 6.65503 15.1871 6.65503L11.9343 6.65503ZM5.42908 7.65576L8.68193 7.65576C8.95807 7.65576 9.18193 7.4319 9.18193 7.15576C9.18193 6.87962 8.95807 6.65576 8.68193 6.65576L5.42908 6.65576C5.15294 6.65576 4.92908 6.87962 4.92908 7.15576C4.92908 7.4319 5.15294 7.65576 5.42908 7.65576ZM11.9139 18.7062H15.1667C15.4429 18.7062 15.6667 18.4823 15.6667 18.2062C15.6667 17.93 15.4429 17.7062 15.1667 17.7062H11.9139C11.6377 17.7062 11.4139 17.93 11.4139 18.2062C11.4139 18.4823 11.6377 18.7062 11.9139 18.7062ZM5.40821 18.707L8.66106 18.707C8.9372 18.707 9.16106 18.4832 9.16106 18.207C9.16106 17.9309 8.9372 17.707 8.66106 17.707L5.40821 17.707C5.13207 17.707 4.90821 17.9309 4.90821 18.207C4.90821 18.4832 5.13207 18.707 5.40821 18.707Z" />
                <defs>
                  <linearGradient id="paint0_linear" x1="10.3207" y1="0.311035" x2="10.3207" y2="25.026" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B727F3" />
                    <stop offset="1" stop-color="#DB4CAA" />
                  </linearGradient>
                </defs>
              </svg>
            </IconButton>
          </div>
        </div>
      </Card>
      <div className={classes.shadow} />
    </div>
  )
}