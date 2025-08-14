import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "AI for Autonomous Navigation of Create3 Robot",
        description: "A smart navigation system planned for costum exploring and obstacle avoidance designed for the Create3 Robot model, using ROS2, Python, Bash, C++",
        image: "data:image/jpeg;base64,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",
        tags: ["ROS2", "AI", "Robotics", "Python", "C++"],
        gitUrl: "#",
    },
    {
        id: 2,
        title: "Distributed SMS Routing System",
        description: "A fully-distributed architecture for an SMS Router system prototype using Java, Rabbitmq, JSON. A connected antenna map generator is also provided in python.",
        image: "/projects/Figure_1.png",
        tags: ["DS", "Distributed", "Cloud", "Networks", "Routing", "Java", "Rabbitmq"],
        gitUrl: "https://github.com/shashayanyan/IDS-SMS-routing",
    },
    {
        id: 3,
        title: "Kernel Trick for Principal Component Analysis",
        description: "This projects proves and implements the Kernel Trick as a work around for Principal Component Analysis to enable complex classification tasks.",
        image: "/projects/Kernel PCA.webp",
        tags: ["Machine Learning", "Linear Algebra", "PCA", "Python", "Numpy", "Pandas", "Jupyter"],
        gitUrl: "https://github.com/shashayanyan/kernelPCA_CS342",
    },
    {
        id: 4,
        title: "MinCaml Compiler",
        description: "A Compiler for the MinCaml language (simpler version of OCaml) with ARM Assembly as the target, and ASML as the middle representation. Coded fully in Java",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC0CAMAAACJ8pgSAAAAvVBMVEX///8zZswAAAAsYsz6/P5zldsuZc2ovejl7PlIdtFPe9Pr8ftJeNKGpOCBn9+ku+gpYc28ze/X19f29vbJycnCwsJjY2NAcdBwcHAjIyNISEiQkJA2a8/r6+u3t7fu7u7N2vLX4fU/Pz9WVlbg4OC6urqtra2kpKTV1dVPT08RERGLi4syMjKDod9+fn43NzeYmJh0ltx1dXUbGxtojdmVr+S4yu1qampeXl4oKChbhNaZsuXH1fERWMxfh9fV+iF6AAAMV0lEQVR4nO2dCXeqvBaGMaGxah0q4IwjCs51qrb29v//rJud4FSrFRnk4+Rd6xxfgVDyNNkZCFSShISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIT+ZT37KfnRubtXrXTCT6Vbj87gfWomMfFTONl8dBbvUesFx/wVfvl6dCadS077jSUWy30+PzqbjtUsEt+5kGLz0dl0Kjmd8x0LLTDp/1qjFEQ1ohEmI7gEw8XwGXQIuQwHpQt76qOybluUd5vz6zrh4m2/5U4uBlINSdIbktKQdElXFPoPvkqShiZDg9mGQrkYDf+wnHAhxaSXupNLY4AmUmWAur2KhHQ06HWQOSn067QgVehu2NNFFWSsS201IC7xlHejolQrSe7iIil1VEfSW7veAS6GjhQJFdYTSTKRZWhIMiubIa1HaF2oBsTl1cszp5L4Li55tGjL7QGqW2gwUpAuVWh5ma9peZEKCOVpeanz8jIpaF5e76mOueBQcJF0Gl5Y8GhQw7wiGTze6jrfoyu6vNvmj8641NtDb858N5dQ6IxLZeRRFqLFRRv0PTpztLhI/ZFHZ44YlzUyvTmzl1zmPrY8v+u8PTKM/GUpt5/ZSy6lEHCRGoWL2ji4vshx8UiR46KXzzXo5Qe2uzX8RI6LR4ocF+WteqI3SePGWb87elzqp+pKeW6czXdEjovU0M/l/MyR46JXztXuOT5z5Lh4pMhx0adMI8PdmaPFxeg2pAaXyzNHi0u+ghyMga4pWlykIXJZf3aKGJe3MM4zPJ6LPBH1CHQ2j9lx3lP5XdHi4p3+HS7K1a8/N0ePi7H4rUmy2h/lNXRq1rDcoLEuj9oWNV2IR7CpgeDi1fZoUWJoosdFRb8MEw3aTskbuFnQ6dD/phtZMqFJ7wGXzga4dOEmak9S+lNIEEUuv5QXDWCZDALlokBrbgCJUy511ICmHhJEj4sOOTzTZmBWWd+mD3feTFQ1F5QG59LvQCq4td7/6A0Ra9Kix4Xn/EyWabL6pbJlJ7ppWuwTIGiwqcf3mvwzilwML/q83nGRtc6bj0uAfv+Zv7bTKprw5nY+ORzaK03Y1fV60C3OU3wTyK1eXbOZX2UCUUk27aO8LC8jhN7cpL9DF/ovjTlad3VZakz7dn9EHlXULgJMUMsaEEPqEIotVLWqyLLji7LYqHXEVop4yMVCyE3ye3SxX6dok3Z52umgBc9SF1qa3q49OnApQCyq7NojdoDpeXs08mgse7uu93cVdTGyuG3QqqVPAUL/hEsPaYoGRUXn/w0V4wPaKU+5WB6NZW/XH+OAt8MvSp9/TFktn9BqosBaSHUKl6v1yx1oLpQpxBWj9DHlaYJY52F1Np6Nc0/1yHGjrnW1eyfBNIRK0D4g5NGytx9ywEVReZWybyblVVa4FVh4zZYA8kUgimqvxP6LS32KmO7rmvCUwMWfxaq3c3lD6z6CqlKBIKOifoldEou0lX1/d4hKFcT4Xeei9JGt+0LqgqZUw8BFhRX51cP4qAqDRPXn+EiDodXw7/ZI/kDuuFhlqEAh4GIBhAmSORcZejLqORcVysr8by4bhmQ6Wd/LhSsEXCiAyscAYgcbPRmLcp+ND3/UIxP1F2UWTK9xsYDKggWiqt2Tzavq6SMiqsrimKFZxwlPDzriYqmqRzcymJy0R/YCa4V3JnT7MvTdJv3kqKtc5sDFPg6SyhNepxijPDWlHnxdS3JndyR8qgwnG2aUqVMOXKpHMZyOGpBkLtyN8R7TTg/opR+NvBr7YAMzWgb9HPCvhQr/lBgXeyMrl+0TLp3jYAVp5ncHLltHXAh5T3mo5ytcIAtHczyjPRdaRBiXH7J4kp30H1xMQKhIE76r4iqgn3OJxRLJFw9Vu/yczSmXLnztSfIQPg3ORWWZpX03nX9jSTo69OdYV+6Ey4IXKahcQ5vLROu5mrM5fV4Ne6mjB9au16MSsnutHcYHuBTsg3SJlQKbCxxT57XtmAskKA+pRmwXcHE9LfGY5xuBBLIXTCjwWBGPmG8MEGRzLvHaJfOQyrnAfDuLRaNzLntxLq4fwXkMF9awfLAGzTQZJfYLLrCocJELKy/a71wqmi3OxfX4+0HPw/IGpF+dDygIqBpQYFhEyV/hslak/IDvPYkvHBUs4TeM/zYXpbwv+CaPm3Yr3JGucNkdlP/BBQ4pWFaBl7tHcTl9BPg+LpJSOeKS30NaKNe5MEGdO+Gyb5pZsXkQF5JIJpyS+W2eoWcPHSHi6ny8hOaQH6BEuzGsPZJhFMqOgYDEwjW/O/XBMg/BhrVkw6P0o4dwIZnn5+eMB1xowaj36rvhTkPr9TQ7N4rCxhX2h8w/aGbLkMI+6HAMP7Oi0vSN413BciHLFE2VWjoD48E8JlQy17m9XU658BzK43tSuVLIuRCeQ4cV6R/gUoRB91fiEVyCvLnmOO7i4iq7KjpN5J6LSeVFhm/UHe00HRE67cC45hL8fTWHEfQ+5VxyUTceZfdmBfPerVjc3VWqXr0E4HYF8p62F5fvr7Pa3mTWgYIYOOKxy/BiTb3JrBM1E76/B9L1a/3yZS9y6lBfCexjVSIkV3T9ekxj4EVGnaqZLuZyVyZq/8z65aS5XDExbrq+QiPw9VJMciuduaynv7DEZuNLaWfblhfvJdYfw4VKviip9UeLRYqty8m9ubrHcbmi+F/lpdb0+xIaIeSS+vwrwLhuhv+UEkIu2T9HQwG8Xjd0XOTXG/rD/r8+KmRc5K9Z7Za+DRn7/M73cHH5eord1uUjuDhOr3x8iXeouLwWczd3hGnf7n8+vqzaq4d0PdEq50h+/pkA5Oe7dp0qFc86kZ8hxv0ChWjKq5cjRE2Cy+8a+Pya8/+qPqy/j/kX1Q6YSzMbD0qp+69S2SzaPr7j/FwwhRmQ8JMLMCUUaOD9KmKyW1FKbnSxy9vIbkqTjcAPx/FNueX944QGCvIGEvTzX9Lp9LiIaSYT1KW5G1OXAEdHPelljPDxD3MxXMyAw9TVqHs6OBhh4m+adFbD8DePqHuihFjS9Is7MPMAn59+p5e/Yp3U9yKpcQezCukWjHO+XmyXek8SOl62XSzTBPf6ScgMnEwd5u7rm5AnyLr8tSSYQZBXmBTf4cStVY3kvu8GE+DwiGIhn3adz+Ck7cY4aV98Gr/YPfsVLu4c2bntfjIqS2r2fZD43r3HavwZjFQSz/hoMvVJYk7AyDo8cdyA1WanO5T9UKnnR8yB0kJq6aYsy89bWkrGzGWLrESAS5DY7AtcPEHLBrhUnNaGJ+5oGVoyR8sQXr4yR8vQ3uHv1xR1aVpeti26rZWGanb7HxRT2UpNiLZa54TD8PBkwciHR2HjgIVGzuJsNksS22V2LjOjOaOudnBPmczezb5tN7NdbJnJfMdsN1vCthxZzjJLaO5wkv6MImbLW3Or2y5PRiX9DRlIMxW9K6mmIRlmHlZpaqhuGIpJiXS1Sp29E8FTLJCJIhXcT6MkbIeZw44da3Jyexc7d3wnIbXbVjbosHYZaeV1p62WLaQiHc27aENrFtx5HKz7mzoaIq0zmcw9xUKvMLlqtVrNNK0kufHOvcC21ioBrVMTXPLYFZnbghvvXQZc9hPcl+1qcTjLlpbHWBZctnaU9EYwo1FvgxpIqyN12hu8TbpIlxd1WNw7N7vI6g2qfWmgoXnVyxdawBQ/yTIrjzGxI2M6h+1SvsI4zd2WOr43i3ez21myi6Vx2lvj7j2Glynb7Ra7bIn9M6Rsbp+UNvU3gdE3qJ2XPgpI0z6kzqZA44rahgisjZBVRwtVmbbbmtpv//YKnzuVhe4WmbF8PH9iwnuiz9+Y8B7G8xJj2z1hwtuQ1Iy2XqwtSmXI3mGc5I7SfYHGWqKRNpZlEOQViW3ZotbUFtsJZhhu22YdXW03qGWYW7uP+hlvNrfwsB35zNoOJ6nLcrfduRfq4p/MrcCRg6O9tgR179+s/5bmjtSWr9TRXiB1782v8XeNHJJCPznrZCI4H8yrX+TtbjIbx2o1fs8MkxOHTx3NXi122eEzR+DM7E4Ccznm9gmgxGxD9+dK5NXRHP/hTqLHjvy67ejnhg3MCZbHieBVqMCEBAsFkwsVmNR3EKt1bxH+dDEd47nCw4W8hIrL57V1dIGqFqZ6JK+eQqLvZJjKy5VldEFLClN5ERISEhISEhISEhISEhISEhISEhISEhISEhISEhIS8lr/B/D/ZWI/nXpfAAAAAElFTkSuQmCC",
        tags: ["Compilers", "Languages", "Java", "Object-Oriented", "OOP", "Bash", "Assembly"],
        gitUrl: "https://github.com/shashayanyan/minc_compiler",
    },    
    {
        id: 5,
        title: "Lattice Boltzmann implementation in parallel, using Message Passing Interface and C++",
        description: "A parallel version of the Lattice Boltzmann fluid simulations, done as part of the Parallel Computing module at Grenoble INP",
        image: "/projects/LBM.png",
        tags: ["Parallel Programming", "MPI", "Simulations", "C++"],
        gitUrl: "https://github.com/Kianfeizabadi/PROJ_PAP",
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
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div> 

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 ">
                                        <a href={project.gitUrl} className="text-foreground/80 center hover:text-primary transition-colors duration-300"
                                            target="_blank">
                                        <ExternalLink size={20} />  
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                target="_blank"
                href="https://github.com/shashayanyan">
                    Check My GitHub! <Github size={16}/>
                </a>
            </div>

        </div>
    </section>
}