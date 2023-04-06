import useDocumentTitle from '../../assets/js/useDocumentTitle'

const Projects = (props) => {
  useDocumentTitle(props.title)

  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline">Projects Page</div>
      </div>
    </div>
  )
}

export default Projects
