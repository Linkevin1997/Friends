import EpisodeInfo from "./EpisodeInfo"
function Home({ episodes }) {
  console.log(episodes)
  return (
    <div className="Home">
      <h2>FRIENDS TV show</h2>
      <ul>
          {episodes?.map((episode) => (
            <li key={episode._id}><EpisodeInfo episode={episode} /></li>
        ))}
      </ul>
    </div>
  )  
}

export default Home