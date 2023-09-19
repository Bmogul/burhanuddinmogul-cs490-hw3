const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = (props) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg">
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-700">{props.comment.name}</h2>
        <time className="text-xs text-gray-500" dateTime={props.comment.createdAt}>{formattedDate(props.comment.createdAt)}</time>
      </header>
      <p className="text-sm mt-2">{props.comment.body}</p>

    </div>
  )
}

export default Comment
