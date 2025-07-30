const projects = [
    {
        id: 1,
        title: "AI for Autonomous Navigation of Create3 Robot",
        description: "A smart navigation system planned for costum exploring and obstacle avoidance designed for the Create3 Robot model, using ROS2, Python, Bash, C++",
        image: "/projects/project0.jpg",
        tags: ["ROS2", "AI", "Robotics", "Python", "C++"],
        gitUrl: "#",
    },
    {
        id: 2,
        title: "AI for Autonomous Navigation of Create3 Robot",
        description: "A smart navigation system planned for costum exploring and obstacle avoidance designed for the Create3 Robot model, using ROS2, Python, Bash, C++",
        image: "/projects/project0.jpg",
        tags: ["ROS2", "AI", "Robotics", "Python", "C++"],
        gitUrl: "#",
    },
    {
        id: 3,
        title: "AI for Autonomous Navigation of Create3 Robot",
        description: "A smart navigation system planned for costum exploring and obstacle avoidance designed for the Create3 Robot model, using ROS2, Python, Bash, C++",
        image: "/projects/project0.jpg",
        tags: ["ROS2", "AI", "Robotics", "Python", "C++"],
        gitUrl: "#",
    },
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects that I worked on, individually 
                or as a part of a group, some were done as coursework and some were done casually
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"> 
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} />
                        </div> 
                    
                    </div>
                ))}
            </div>

        </div>
    </section>
}