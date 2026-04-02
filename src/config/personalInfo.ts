// Personal Information Configuration
export const personalInfo = {
  name: "Pavel Tarlev",
  title: "Senior Software Developer",
  subtitle: "Cloud Enthusiast",
  
  contact: {
    phone: "+359 885141412",
    phoneRaw: "+359885141412",
    email: "paveltarlev85@gmail.com",
    linkedin: {
      url: "https://www.linkedin.com/in/pavel-tarlev-448a4814a/",
      display: "linkedin.com/in/pavel-tarlev-448a4814a",
      username: "pavel-tarlev-448a4814a"
    },
    github: "https://github.com/paveltarlev"
  },
  
  about: "My journey began with civil engineering studies at PGSAG in Stara Zagora and continued at UASG Sofia. During this time, I developed freelance projects including a reservoir calculation program for Denev OOD. I then transitioned into a Technical Manager role on large-scale projects, which laid the foundation for my technical leadership skills. This diverse background in engineering, project management, and software development has shaped my problem-solving approach and ability to deliver complex, scalable solutions.",
  
  summary: "Proven Senior Software Developer with over 3 years of hands-on experience. Adept at designing and implementing innovative solutions, with a focus on scalability, efficiency, and cloud-native architectures.",
  
  languages: [
    { name: "English", proficiency: 5 },
    { name: "Russian", proficiency: 4 },
    { name: "Bulgarian", proficiency: 5 },
   
  ],
  
  hobbies: [
    { icon: "🎵", label: "Music", component: "FaMusic" },
    { icon: "🏍️", label: "Motorcycle", component: "FaMotorcycle" },
    { icon: "✈️", label: "Travel", component: "FaPlane" },
    { icon: "🥾", label: "Hiking", component: "FaHiking" }
  ],
  
  social: {
    linkedin: "https://linkedin.com/in/pavel-tarlev-448a4814a/",
    github: "https://github.com/paveltarlev"
  },
  
  copyright: {
    year: "2024",
    name: "Pavel Tarlev",
    rights: "All rights reserved"
  }
};

// Export individual items for convenience
export const {
  name,
  title,
  subtitle,
  contact,
  about,
  summary,
  languages,
  hobbies,
  social,
  copyright
} = personalInfo;