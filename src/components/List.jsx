const List = (props) => {
  const { users } = props

  return (
    <div className="users">
      <p className="">List of added users:</p>
      {users?.map((item, index) => {
        return (
          <div key={index} className="user">
            <p className="info">{item.name} <span className="email">({item.email})</span></p>
          </div>
        )
      })}
    </div>
  )
}

export default List