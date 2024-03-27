import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "../../routes/hooks";
import { bgGradient } from "../../theme/css";
import Iconify from "../../components/iconify";
import Cookies from "js-cookie";

import { login } from "../../api";

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const token = await login(email, password);
      Cookies.set("token", token, { expires: 1, secure: true });
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = (
    <>
      <Stack spacing={3} mb={5}>
        <TextField
          name="email "
          label="Email"
          type={"email"}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
        loading={loading}
      >
        Login
      </LoadingButton>

      {errorMessage && (
        <Typography
          sx={{
            color: "#ee2424",
          }}
          variant="subtitle2"
          mt={1}
        >
          {`ERROR : ${errorMessage}`}
        </Typography>
      )}
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Box mb={2}>
            <Typography variant="h4">LOGIN </Typography>
          </Box>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
