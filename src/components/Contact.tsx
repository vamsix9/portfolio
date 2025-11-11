import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    // Replace with your actual submission logic
    console.log({ email, message, captchaValue });
    alert("Message submitted!");
    setEmail("");
    setMessage("");
    setCaptchaValue(null);
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Contact Me
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          bgcolor: "#000000 ",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: 900,
            bgcolor: "black",
            boxShadow: 3,
            borderRadius: 3,
            overflow: "hidden",
            border: '1px solid white'
          }}
        >
          {/* Left section - Contact Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 4, display: "flex", flexDirection: "column", gap: 2 }}
          >

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                margin="normal"
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                margin="normal"
              />

              <Box sx={{ my: 2 }}>
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: "#1976d2",
                  "&:hover": { bgcolor: "#115293" },
                }}
              >
                Send Message
              </Button>
            </form>
          </Grid>

          {/* Right section - Name at top, "made with" at bottom */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#1976d2",
              color: "white",
              textAlign: "center",
              minHeight: 300,
            }}
          >
            <Typography variant="h4" fontWeight="700">
              Vamsi Bramhanapalli
            </Typography>

            <Typography variant="subtitle2" sx={{ opacity: 0.95 }}>
              Made with ❤️ using React & MUI
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
