import { styled, AppBar, Paper, Stepper } from "@material-ui/core";
export const Navbar = styled(AppBar)(() => ({
  background: "#cb4249",
  borderRadius: "10px",
  padding: "6px",
}));

export const MainContainer = styled(Paper)(() => ({
  borderRadius: "10px",
  padding: "6px",
  marginTop: "10px",
}));

export const StepperDiv = styled(Stepper)(() => ({
  marginLeft: "20px",
  marginRight: "20px",
}));
