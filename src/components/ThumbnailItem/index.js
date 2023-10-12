// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachThumb, updateThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb

  const updateImage = () => {
    updateThumbnail(id)
  }

  return (
    <li className="list-card">
      <button type="button" className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={updateImage} />
      </button>
    </li>
  )
}

export default ThumbnailItem
