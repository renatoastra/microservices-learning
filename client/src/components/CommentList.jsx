
export const CommentList = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(comment => {
          let content;
          if (comment.status === 'rejected') {
            content = "This comment has been rejected";
          }
          if (comment.status === 'pending') {
            content = "This comment is awaiting moderation";
          }

          if (comment.status === 'approved') {
              content = comment.content;
           }
          return (
            <li key={comment.id}>{content}</li>
          )
        })}
      </ul>
    </div>
  )
}