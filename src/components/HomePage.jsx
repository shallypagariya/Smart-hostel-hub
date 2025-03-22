import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HomePage = () => {
  const [eventAnchorEl, setEventAnchorEl] = useState(null);
  const [noticeAnchorEl, setNoticeAnchorEl] = useState(null);
  const handleEventMenuClick = (event) => setEventAnchorEl(event.currentTarget);
  const handleNoticeMenuClick = (event) => setNoticeAnchorEl(event.currentTarget);
  const handleClose = () => {
    setEventAnchorEl(null);
    setNoticeAnchorEl(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            SAROJINI NAIDU GIRLS HOSTEL - SMART HOSTEL HUB
          </Typography>
          <div>
            <Button component={Link} to="/attendance" sx={{ color: "white" }}>
              Student Attendance
            </Button>
            <Button component={Link} to="/marketplace" sx={{ color: "white" }}>
              Marketplace
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "white" }}>
              Contact
            </Button>
            <Button component={Link} to="/about" sx={{ color: "white" }}>
              About Us
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* College Image */}
      <div className="w-full">
        <img src="/sgsits_img.png" alt="College" className="w-full h-64 object-cover" />
      </div>

      <Container sx={{ mt: 4 }}>
        {/* Events Section */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Events</Typography>
        {["Hostel Annual Function - 20th March", "Cultural Night - 25th March"].map((event, index) => (
          <Card key={index} sx={{ mb: 2, p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1"><strong>Event {index + 1}:</strong> {event}</Typography>
            <IconButton onClick={handleEventMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={eventAnchorEl} open={Boolean(eventAnchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Edit Event</MenuItem>
              <MenuItem onClick={handleClose}>Delete Event</MenuItem>
            </Menu>
          </Card>
        ))}

        {/* Notices Section */}
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>Notices</Typography>
        {["Hostel Fee Submission Deadline: 15th March", "Water Supply Maintenance on 18th March"].map((notice, index) => (
          <Card key={index} sx={{ mb: 2, p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1"><strong>Notice {index + 1}:</strong> {notice}</Typography>
            <IconButton onClick={handleNoticeMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={noticeAnchorEl} open={Boolean(noticeAnchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Edit Notice</MenuItem>
              <MenuItem onClick={handleClose}>Remove Notice</MenuItem>
            </Menu>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
