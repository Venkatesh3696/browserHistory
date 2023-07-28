import './index.css'

const HistoryItem = props => {
  const {details, deleteTrans} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteTrans(id)
  }

  return (
    <li className="list-element">
      <div className="element-details">
        <p className="time">{timeAccessed}</p>
        <img className="logo-image" alt="domain logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="delete-image"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
