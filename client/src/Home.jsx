import EpisodeInfo from "./EpisodeInfo"
function Home({ episodes }) {
  console.log(episodes)
  return (
    <div className="Home">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg"></img>
      <ul>
          {episodes?.map((episode) => (
            <li key={episode._id}><EpisodeInfo episode={episode} /></li>
        ))}
      </ul>
    </div>
  )  
}

export default Home