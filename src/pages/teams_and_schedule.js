import React from "react";
import Tabs from "../components/tabs";

const TeamsAndSchedule = () => {
  return (
    <div className="container" style={{marginTop: "100px"}}>
      <h3>
        Teams & Schedules
        </h3>
        <h5>
        <p>
        <small class="text-muted">
          Although you selected a team bucket during registration, admin has the
          final authority to decide on which bucket you play in. This decision
          may be influenced by your quality of game or bucket dynamics or could
          be for other reasons. If you have concern or disagreement with your
          allocation, please take it up with concerned admin/authority
        </small>
        </p>
        <p>Matches are scheduled on <strong>10/15/2019</strong> for <em>sharp 9:00 AM</em> at</p>
        <p><small>Worthington Recreation Center,<br/>Worthington<br />
        Ohio 12345<br />
        Ph: 123.345.4567<br />
        email: worthington@rcc.com</small></p>
        </h5>

        <Tabs />

    </div>
  );
};

export default TeamsAndSchedule;
