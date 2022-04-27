function EpisodeInfo({episode}) {
  return (
    <div className="episode-info">
      <h3>{episode.episodeTitle}</h3>
      <p>{episode.summary}</p>
      <p>{episode.yearOfProd}</p>
    </div>
  )
}
export default EpisodeInfo