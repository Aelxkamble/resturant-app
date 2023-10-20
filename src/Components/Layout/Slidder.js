import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://thumbs.dreamstime.com/b/south-indian-breakfast-29610874.jpg",
  },
  {
    imgPath:
      "https://e0.pxfuel.com/wallpapers/138/387/desktop-wallpaper-masala-dosa.jpg",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1639565.jpg&fm=jpg",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/17223836/pexels-photo-17223836/free-photo-of-puneri-misal-pav.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    imgPath:
      "https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg",
  },
  {
    imgPath:
      "https://lh3.googleusercontent.com/KqtHpnoj_1ulpCq5omBGNFalIRVzpZQa1sg_ZulESsdWBK0FnyjZxNfshYhiORXuvNl9gC_rVTgO5Vs_x4z6breqii-ZAkWU7yYP-HogLQ=w512-rw",
  },
];

function SwipeableTextMobileStepper() {





  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 2000, height: 800, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 700,
                  display: "block",
                  maxWidth: 1500,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
