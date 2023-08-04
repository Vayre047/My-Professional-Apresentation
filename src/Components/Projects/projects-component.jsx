import './projects-component.scss';

function Projects({data}) {
    const { Link, Title, Body } = data;
  return (
    <div className='card col-6 text-center py-3 projectDetails'>
        <p className='h3 title'>{Title}</p>
        <p>{Body}</p>

        <a className='p-2' href={Link} target="_blank">
            <img className='socialFooter' src='../../images/github-icon.png' alt={Title} />
        </a>
    </div>
    )
}

export default Projects;
