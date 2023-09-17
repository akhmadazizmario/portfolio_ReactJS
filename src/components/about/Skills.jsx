import "./skills.css";

const frontendSkills = [
  {
    title: "Amazon web Services (AWS)",
    width: "85%",
  },
  {
    title: "React JS",
    width: "85%",
  },
  {
    title: "Html",
    width: "85%",
  },
  {
    title: "Css",
    width: "85%",
  },
  {
    title: "Teamwork",
    width: "85",
  },
];

const backendSkills = [
  {
    title: "Php",
    width: "85%",
  },
  {
    title: "Laravel",
    width: "85%",
  },
  {
    title: "Codeigniter3",
    width: "85%",
  },
  {
    title: "Node.Js",
    width: "85%",
  },
  {
    title: "Time management",
    width: "85",
  },
];

const designSkills = [
  {
    title: "Figma",
    width: "85%",
  },
  {
    title: "Python",
    width: "85%",
  },
  {
    title: "Microsoft Office",
    width: "85%",
  },
  {
    title: "Problem Solving",
    width: "85",
  },
  {
    title: "Creative",
    width: "85",
  },
];

function Skills() {
  return (
    <div className="skills_wrapper d-flex gap-5 ">
      <div className="frontend_skill w-50">
        {frontendSkills.map((item, index) => (
          <div className="skill_data" key={index}>
            <div className="skill_title">
              <h6> {item.title}</h6>
            </div>

            <div className="skill_bar mb-2"></div>
          </div>
        ))}
      </div>
      <div className="backend_skill w-50">
        {backendSkills.map((item, index) => (
          <div className="skill_data" key={index}>
            <div className="skill_title">
              <h6>{item.title}</h6>
            </div>

            <div className="skill_bar mb-2"></div>
          </div>
        ))}
      </div>

      <div className="backend_skill w-50">
        {designSkills.map((item, index) => (
          <div className="skill_data" key={index}>
            <div className="skill_title">
              <h6> {item.title}</h6>
            </div>

            <div className="skill_bar mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
