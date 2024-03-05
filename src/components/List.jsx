const List = (props) => {
  const { users } = props

  return (
    <div className="users">
      <p className="">List of added users:</p>
      <ul className="">
        {users?.map((item, index) => {
          return (
            <li key={index} className="user">
              <p className="info">{item.name} <span className="email">({item.email})</span></p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List