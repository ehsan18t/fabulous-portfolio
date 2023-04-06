import useDocumentTitle from '../../assets/js/useDocumentTitle'

const Blog = (props) => {
  useDocumentTitle(props.title)

  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline">Blog</div>
      </div>
    </div>
  )
}

export default Blog
