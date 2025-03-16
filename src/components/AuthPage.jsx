import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  TextField, Button, Card, CardContent, MenuItem, Select, Typography, Snackbar, Alert, FormControl, InputLabel 
} from "@mui/material";

const dummyUsers = {
  student: { username: "abc", password: "123" },
  warden: { username: "abc", password: "123" },
  admin: { username: "abc", password: "123" },
};

const AuthPage = ({ setIsAuthenticated }) => {
  const [userType, setUserType] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSeverity, setPopupSeverity] = useState("success");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!username || !password || !userType) {
      setPopupMessage("Please fill in all fields.");
      setPopupSeverity("error");
    } else if (!isSignup) {
      // Login Logic
      if (username === dummyUsers[userType].username && password === dummyUsers[userType].password) {
        setPopupMessage(`Login Successful as ${userType}`);
        setPopupSeverity("success");

        setIsAuthenticated(true);  // ✅ Set authentication state
        setTimeout(() => navigate("/home"), 1000);  // Redirect to home after a delay
      } else {
        setPopupMessage("Invalid Credentials!");
        setPopupSeverity("error");
      }
    } else {
      // Signup Logic (No real database here)
      setPopupMessage("Registered Successfully!");
      setPopupSeverity("success");
    }
    setShowPopup(true);
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {isSignup ? "Sign Up" : "Login"}
          </Typography>

          {/* User Role Selection */}
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Select Role</InputLabel>
            <Select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              label="Select Role"
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="warden">Warden</MenuItem>
            </Select>
          </FormControl>

          {/* Username & Password Fields */}
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          {/* Login/Register Button */}
          <Button variant="contained" color="primary" fullWidth onClick={handleAuth}>
            {isSignup ? "Register" : "Login"}
          </Button>

          {/* Toggle between Login & Signup */}
          <Typography
            variant="body2"
            sx={{ marginTop: 2, cursor: "pointer", color: "blue" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Typography>
        </CardContent>
      </Card>

      {/* Snackbar Popup for Messages */}
      <Snackbar open={showPopup} autoHideDuration={2000} onClose={() => setShowPopup(false)}>
        <Alert severity={popupSeverity} sx={{ width: "100%" }}>
          {popupMessage}
        </Alert>
      </Snackbar>

      {/* CSS Styles */}
      <style jsx>{`
        .auth-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f4f4f4;
        }
        .auth-card {
          width: 400px;
          padding: 20px;
          text-align: center;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
