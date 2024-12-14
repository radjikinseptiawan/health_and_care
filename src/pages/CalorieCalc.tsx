import { ArrowBackIosNew } from "@mui/icons-material";
import { Fab } from "@mui/material";
import SetGender from "../component/CalculatorCalorie";
export default function CalorieCalc() : JSX.Element {

  return (
    <>
    <SetGender></SetGender>
    <Fab sx={{position:"fixed",bottom:10, ml:2,mb:2}} href="/" size="large" color={"primary"}>
          <ArrowBackIosNew/>
    </Fab>
    </>
  )
}
