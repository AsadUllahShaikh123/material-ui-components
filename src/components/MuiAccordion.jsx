import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

/**
 * Accordions are generally used in FAQ's section of the website
 */
let data = [
  {
    panel: "panel1",
    id: "panel1-header",
    title: "Accordion #1",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet.",
  },
  {
    panel: "panel2",
    id: "panel2-header",
    title: "Accordion #2",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet.",
  },
  {
    panel: "panel3",
    id: "panel3-header",
    title: "Accordion #3",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet.",
  },
];

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ width: "50%" }}>
      {data.map((values) => (
        <Accordion
          expanded={expanded === values.panel}
          onChange={handleChange(values.panel)}
        >
          <AccordionSummary expandIcon={<ExpandMore />} id={values.id}>
            <Typography variant="h5" gutterBottom>
              {values.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {values.detail}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      
    </div>
  );
};

export default MuiAccordion;
