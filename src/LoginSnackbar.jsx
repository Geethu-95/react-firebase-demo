import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { showSuccessSnackbar, clearSnackbar } from "./actions/snackbarActions";
// import LoginSnackbar from "./LoginSnackbar";

export default function LoginSnackbar() {


    const dispatch = useDispatch();


  const { successSnackbarMessage } = useSelector(
    (state) => state.successSnackbarMessage
  );

  const {successSnackbarOpen} = useSelector(
    (state) => state.successSnackbarOpen
  );

//   const { successSnackbarMessage, successSnackbarOpen } = useSelector(
//     state => state.uiReducer
//   );

  function handleClose() {
    dispatch(clearSnackbar());
  }

return(

<Snackbar
anchorOrigin={{
  vertical: "bottom",
  horizontal: "left"
}}
open={successSnackbarOpen}
autoHideDuration={4000}
onClose={handleClose}
aria-describedby="client-snackbar"
message={
  <span id="client-snackbar">
    <CheckCircleIcon>check_circle</CheckCircleIcon>
    {successSnackbarMessage}
  </span>
}
action={[
  <IconButton
    key="close"
    aria-label="close"
    color="inherit"
    onClick={handleClose}
  >
    <CloseIcon>close</CloseIcon>
  </IconButton>
]}
/>
);

}