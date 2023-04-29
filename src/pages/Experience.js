import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/* For schools attended */}

        <h3 className="education">
          <SchoolIcon />
          Education
        </h3>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Divine Love Pax Secondary School, Orokam, Benue State
          </h3>
          <p>Senior School Certificate Examination (SSCE)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Agricutlture, Makurdi
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor,s Degree
          </h4>
          <p>Statistics/Computer Science</p>
        </VerticalTimelineElement>

        {/* For Work Experince */}

        <h3 className="workExp">
          <WorkIcon />
          Work Experience
        </h3>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2021 - December 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Support Internship -- Omnidata Global Service Ltd, Abuja.
          </h3>
          <p>
            Assist the Senior Network and IT Engineers with developing,
            monitoring, troubleshooting and implementing network.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales Executive -- Stallion Motors, Abuja.
          </h3>
          <p>
            Find prospects and leads, Learn details about our latest products,
            and Meet with potential clients and act as their consultant to
            enable a successful sales.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
