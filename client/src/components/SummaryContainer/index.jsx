import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types' ;
import AccordionDetails from "@material-ui/core/AccordionDetails";
const SummaryContainer = ({summary})=>{
    return (
        <Accordion>
            <AccordionSummary>
                <Typography>Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {summary}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
SummaryContainer.propTypes = {
    summary:PropTypes.string.isRequired
}
export default SummaryContainer ;
