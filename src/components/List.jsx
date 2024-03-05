const List = (props) => {
  const { users } = props

  return (
    <div className="users">
      <p className="title">List of added users:</p>
      <ul className="list">
        {[...users]?.reverse()?.map((item, index) => {
          return (
            <li key={index}>
              <p className="user">
                <span className="name">{item.name}</span>&nbsp;
                <span className="email"><a href={`mailto:${item.email}`}>{item.email}</a></span>&nbsp;
                <span className="time">({new Date(item.created)?.toLocaleString()})</span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List