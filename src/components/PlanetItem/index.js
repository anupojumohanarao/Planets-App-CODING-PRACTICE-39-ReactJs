// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails

  return (
    <div className="main-section">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1 className="main-heading">{name}</h1>
      <p className="main-description">{description}</p>
    </div>
  )
}

export default PlanetItem
