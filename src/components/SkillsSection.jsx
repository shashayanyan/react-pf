import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", level: 95, category: "frontend"},


    { name: "Node.js", level: 80, category: "backend" },


    { name: "Git/GitHub", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className="px-5 py-2 rounded-full transition-colors duration-300 capitalize"> 
                            {category} 
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out" style={{width: skill.level + "%"}} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground"> {skill.level}% </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}