import React, { ReactElement } from "react";
import { LaunchType } from "./App";

type LaunchProps = {
  key: string;
  launch: LaunchType;
}

const Launch = ({key, launch}: LaunchProps): ReactElement => {
  const {launch_date_utc, launch_success, rocket, links, details} = launch;
    return (
        <article className="Article">
            <h2>nom de la fusée : {rocket.rocket_name} </h2>
            <h4>date de lancement UTC : {launch_date_utc}</h4>
            <h4>statut du lancement: {launch_success ? "réussi" : "échec"} </h4>
            <a
              href={links.video_link}
              target="_blank"
              rel="noopener noreferrer"
            >lien youtube</a>
            <p>détails : {details}</p>
        </article>
    );
};

export default Launch;
