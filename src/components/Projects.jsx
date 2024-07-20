import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-neutral-300 text-4xl">Projects</h2>
        <div>
           {PROJECTS.map((Projects, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
             <div className="w-full lg:w-1/4">
                <img src={Projects.image}
                width={150}
                height={150}
                alt={Projects.title}
                className="mb-6 rounded"
                />
             </div> 
             <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="w-full text-neutral-300 max-w-xl lg:w-3/4">{Projects.title}</h6> 
                <p className="mb-4 text-neutral-400">{Projects.description}</p>
                {Projects.technologies.map((tech, index) => (
                   <span
                   key={index}
                   className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                   >
                     {tech}
                   </span>
                ))}
            </div>
            </div>
           ))}
        </div>    
    </div>
  );
};

export default Projects;