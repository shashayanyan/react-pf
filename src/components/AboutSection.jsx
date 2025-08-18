import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                About <span className="text-primary"> Me </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Developer & Tech Enthusiast 
                    </h3>

                    <p className="text-muted-foreground ">
                        As a Warwick and Unistra computer science graduate, I am a versatile developer who
                        specializes in creating robust and reliable backend solutions, and responsive user interfaces. 
                    </p>

                    <p className="text-muted-foreground ">
                        I'm passionate about bringing exciting ideas to life with my tech knowledge, and I'm constantly 
                        learning new concepts and techniques to stay at the forefront of the vast field of development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch!
                        </a>

                        <a href="/files/shashayanyan_CV.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" download="Shayan_CV.pdf">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Backend Development </h4>
                                <p className="text-muted-foreground">
                                    Creating smart and reliable solutions to complex problems and designs, 
                                    with innovative algorithms.
                                </p>

                            </div>
                            
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground">
                                        Interactive and responsive web projects with seamless user experiences
                                    </p>

                                </div>
                            </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project management </h4>
                                    <p className="text-muted-foreground">
                                        Leading solo/team projects from conception to deployment, 
                                        practicing agile methodologies.
                                    </p>

                                </div>
                                
                            </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
}