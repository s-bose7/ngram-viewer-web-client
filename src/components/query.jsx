import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

const QueryParameters = ({ onApply }) => {

    const [yearStart, setYearStart] = useState(1900);
    const [yearEnd, setYearEnd] = useState(2020);
    const [corpus, setCorpus] = useState('');
    const [caseInsensitive, setCaseInsensitive] = useState(false);

  return (
    <>
      <div>
        <input
          type="number"
          value={yearStart}
          onChange={(e) => setYearStart(Number(e.target.value))}
          placeholder="Start Year"
          style={{
            marginRight: "10px",
            maxWidth: "100px",
            height: "30px",
            borderRadius: "25px",
            fontSize: "15px",
            border: "1px solid grey",
            textAlign: "center",
          }}
        />
        <input
          type="number"
          value={yearEnd}
          onChange={(e) => setYearEnd(Number(e.target.value))}
          placeholder="End Year"
          style={{
            maxWidth: "100px",
            height: "30px",
            borderRadius: "25px",
            fontSize: "15px",
            border: "1px solid grey",
            textAlign: "center",
          }}
        />
      </div>

      <FormControl sx={{ maxWidth: 150, height: 30 }}>
        <Select
          value={corpus}
          onChange={(e) => setCorpus(e.target.value)}
          sx={{ height: 30, width: 100, borderRadius: "25px" }}
          displayEmpty
        >  
          <MenuItem disabled value="">
            <em>Corpus</em>
          </MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        onClick={() => setCaseInsensitive(!caseInsensitive)}
        className={`case-insensitive-button ${caseInsensitive ? "active" : ""}`}
      >
        Case-Insensitive
      </Button>
    </>
  );
};

export default QueryParameters;
