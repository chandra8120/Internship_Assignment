import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import './FirstPage.css'
const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleSubmit = () => {
    if (name.length && phoneNumber.length && email.length) {
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, phoneNumber, email })
      );
      // Navigate to the second page
      navigate("/second");
    } else {
      setShowErrorMsg(true)
    }
  };

  return (
    <Stack
      style={{
        alignItems: "center",
        backgroundImage:
          'url("https://media.istockphoto.com/id/1160194662/vector/abstract-form-background.jpg?s=170667a&w=0&k=20&c=ZG-CXS8etRaQwQzaWhLB5X39GzjlhvZA5Pqk_6hmw6M=")',
        height: "100vh",
      }}
    >
      <div
       className="container_FP"
      >
        <h2 style={{ fontStyle: "Sans-serif", color: "#1C4E80" }}>
          First Page
        </h2>
        <TextField
          label="Name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(event.target.value)
          }
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <Button
          sx={{ background: "#241570" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Go To Second Page
        </Button>
        {showErrorMsg && <div className="errorMsg">Please Enter all Fields !!</div>}
      </div>
    </Stack>
  );
};

export default FirstPage;
