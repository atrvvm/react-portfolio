/** @format */

import ProjectCard from "../components/Card";

const styles = {
  heading: {
    lineHeight: "0%",
    fontSize: "1.8em",
    fontWeight: "500",
    color: "#354446",
    height: "fit-content",
  },
};

export default function Projects() {
  return (
    <div className="page-wrapper">
      <div className="column-layout">
        <h1 style={styles.heading}>PORTFOLIO</h1>
        <div className="card-container">
          <ProjectCard
            title="Movie Seat Booking"
            subtitle="@bradtraversy"
            link="https://github.com/bradtraversy/vanillawebprojects/tree/master/movie-seat-booking"
            bgUrl="https://i.pinimg.com/736x/0a/b9/c9/0ab9c994cfa2bb6206ec89a83a08925f.jpg"
          />
          <ProjectCard
            title="Note Taking App"
            subtitle="@dvega920"
            link="https://github.com/dvega920/Note-Taker/tree/master"
            bgUrl="https://i.pinimg.com/736x/9b/af/87/9baf874813e9629e8b86368159d1ed09.jpg"
          />
          <ProjectCard
            title="Budgeting App"
            subtitle="@actual"
            link="https://github.com/actualbudget/actual"
            bgUrl="https://i.pinimg.com/736x/e5/1b/0a/e51b0a5e2ad958b33370b9c57212c099.jpg"
          />
          <ProjectCard
            title="Pomodoro Timer"
            subtitle="@florinpop17"
            link="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Pomodoro-Clock.md"
            bgUrl="https://i.pinimg.com/736x/6b/b7/3c/6bb73cd9d826ccaeb1ec7289ae205545.jpg"
          />
          <ProjectCard
            title="Card Memory Game"
            subtitle="@florinpop17"
            link="https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md"
            bgUrl="https://i.pinimg.com/736x/6a/e9/af/6ae9affcb82cc24a7aee147c6b33cc71.jpg"
          />
          <ProjectCard
            title="Music Player"
            subtitle="@bradtraversy"
            link="https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player"
            bgUrl="https://i.pinimg.com/736x/2d/b3/ca/2db3cad2eff4106145dc69739e2a0fca.jpg"
          />
        </div>
      </div>
    </div>
  );
}
