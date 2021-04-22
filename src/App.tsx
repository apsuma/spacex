import React from "react";
import {useQuery, gql} from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";
import Launch from "./launch";

const launchesQuery = gql`
    query GetLaunches {
      launches(limit: 5) {
        id
        launch_date_utc
        launch_success
        rocket {
          rocket_name
        }
        links {
          video_link
        }
        details
      }
    }
`
export type LaunchType = {
  id: string;
  launch_date_utc: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
  }
  links: {
    video_link: string;
  }
  details: string;
};

function App() {
  const {loading, error, data} = useQuery(launchesQuery);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data.launches);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> My first Apollo app  </p>
        { data.launches.map((launch: LaunchType) => (
          <Launch key={launch.id} launch={launch}/>        
        ))}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
