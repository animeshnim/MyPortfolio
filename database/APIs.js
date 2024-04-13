// User
export const User = {
    name: "Animesh Nim",
    title: "Full Stack Software Developer",
    
    short_tagline: "I'm passionate about crafting engaging, accessible, and user-centric digital experiences that leave a lasting Impression.",
    long_tagline: "I'm passionate about crafting engaging, accessible, and pixel-perfect digital experiences that seamlessly blend aesthetics with accessibility, elevating user experience to new heights.",

    resume_url: "https://drive.google.com/uc?id=19eQRFokA2OfSVYY02MmXzcg0BR2U0cro&export=download",
    phone: "+91-9630101644",
    email: "animeshnim24@gmail.com",

    profiles: [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/animeshnim",
        },
        {
            name: "GitHub",
            url: "https://github.com/animeshnim",
        },
        {
            name: "HackerRank",
            url: "https://hackerrank.com/profile/animeshnim",
        },
    ]
}



// About
export const About = [
    "As a Django developer with a passion for web development, I thrive on building innovative solutions that push the boundaries of what's possible. With two years of hands-on experience in Django development, I specialize in creating robust backend systems that power dynamic web applications.",
    "My expertise extends across a range of technologies, including Frontend Development such as HTML, CSS, Tailwind CSS, JavaScript (JS), React.js and Redux Toolkit, Next.js, along with Python, Django, Django REST Framework for Backend Development. This diverse skill set enables me to deliver comprehensive solutions that seamlessly integrate frontend and backend components.",
    "Driven by a relentless pursuit of excellence, I am committed to mastering full-stack development and exploring new frameworks, tools, and methodologies. I am eager to collaborate with like-minded professionals and contribute to impactful projects that make a difference.",
    "Let's connect and explore how we can leverage technology to create transformative solutions together.",
]



// Experience
export const WorkExperiences = [
    {
        position: "System Engineer",
        organization: "Tata Consultancy Services",
        organization_logo: '/media/images/ExperienceImages/TCS_Logo.png',
        location: "Indore",
        
        start_date: "March 2022",
        end_date: null,
        
        highlights: [
            "Developed and maintained scalable backend solutions using Django framework, ensuring high performance and reliability.",
            "Collaborated with frontend developers to integrate user interfaces with backend logic, resulting in seamless user experience.",
            "Created REST APIs to facilitate communication between frontend and backend systems, enabling smooth flow of the data.",
            "Improved the database schema and data models, resulting in an improved overall system performance.",  
        ],
    },
]



// Education
export const Educations = [
    {
        course: "Bachelor of Engineering",
        subject: "Civil Engineering",
        institute: "Acropolis Technical Campus",
        university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
        start_date: "August 2016",
        end_date: "October 2020"
    },

    {
        course: "XII (Senior Secondary School)",
        subject: "Mathematics",
        institute: "Shri Sai Academy, Mhow",
        university: "Central Board of Secondary Education",
        start_date: "April 2015",
        end_date: "June 2016"
    }
]



// Project
export const Projects = [
    {
        title: "E-Commerce Store Website",
        description: "This is a dynamic e-commerce platform crafted with Django, designed to seamlessly integrate advanced features for an enhanced user experience. It optimizes operations, ensuring efficiency and reliability in inventory management, order processing, and customer data handling.",
        
        preview_image: "/media/images/ProjectImages/Ecommerce_Project_Image.jpg",
        live_url: "https://betterbuy.vercel.app",
        code_url: "https://github.com/animeshnim/BetterBuy",
        
        highlights: [
            "Designed & implemented a custom user model to tailor user authentication and profile management as per business needs.",
            "Engineered a robust authentication system with forgot password and email verification functionality using one-time tokens.",
            "Integrated wishlist and bulk order functionalities, empowering users to save favourite items and place orders in bulk.",
            "Integrated India Post API for Pincode Validation, ensuring accurate delivery address for seamless order processing.",
            "Developed an admin panel with a user-friendly web interface, enabling effortless management of users, products, orders, etc.",
            "Successfully integrated Razorpay for payment processing, facilitating secure and efficient online transactions for customers.",
            "Deployed the application on Vercel at betterbuy.vercel.app.",
        ],
        
        tech_stack: [
            {
                category: "Frontend",
                tech: "HTML, CSS, Tailwind CSS, Javascript"
            },
        
            {
                category: "Backend",
                tech: "Python, Django",
            },

            {
                category: "Database",
                tech: "PostgreSQL",
            },

            {
                category: "Miscellaneous",
                tech: "Git, Github, Cloudinary, Whitenoise, Vercel",
            },
        ]
    },

    {
        title: "Personal Portfolio Website",
        description: "This is my digital portfolio, where I showcase my skills in modern web development. Explore a variety of projects that reflect my expertise and creativity in this dynamic field. I invite you to delve into the world of web development and discover the exceptional work I have produced.",
        
        preview_image: "/media/images/ProjectImages/Portfolio_Project_Image.jpg",
        live_url: "https://animeshnim.vercel.app",
        code_url: "https://github.com/animeshnim/MyPortfolio",
        
        highlights: [
            "Created responsive design using flexible layout techniques and media queries, ensuring accessibility and usability on desktops, tablets, and mobile devices.",
            "Designed the architecture with modularity and scalability in mind, facilitating easy integration with backend API’s for future Scalability.",
            "Employed best practices in web development, including semantic HTML markup, accessibility considerations, and cross-browser compatibility, to ensure a high-quality end product.",
            "Deployed the application on Vercel at animeshnim.vercel.app."
        ],
        
        tech_stack: [
            {
                category: "Languages",
                tech: "Javascript, JSX, CSS"
            },
        
            {
                category: "Libraries / Frameworks",
                tech: "React.js, Next.js",
            },

            {
                category: "Miscellaneous",
                tech: "Git, Github, Vercel",
            },
        ]
    },
]



// Certification
export const Certifications = [
    {
        certificate: "JavaScript (Intermediate) Certificate",
        institute: "HackerRank",
        issued_date: "December 30, 2023",
        will_expire: false,
        valid_upto: null,
        url: "https://www.hackerrank.com/certificates/f3398442c30e",
        certificate_id: "F3398442C30E",
    },

    {
        certificate: "Python Certification",
        institute: "HackerRank",
        issued_date: "August 5, 2023",
        will_expire: false,
        valid_upto: null,
        url: "https://www.hackerrank.com/certificates/bc305a0473cb",
        certificate_id: "BC305A0473CB",
    },

    {
        certificate: "Responsive Web Design",
        institute: "FreeCodeCamp",
        issued_date: "April 16, 2023",
        will_expire: false,
        valid_upto: null,
        url: "https://www.freecodecamp.org/certification/animeshnim24/responsive-web-design",
        certificate_id: null,
    },
]



// Skills
export const Skills = [
    {
		category: "Frontend Development",
		skills: [
            {skill: "HTML", icon: "/media/images/SkillLogos/HTML_5.svg"},
            {skill: "CSS", icon: "/media/images/SkillLogos/CSS_3.svg"}, 
            {skill: "Tailwind CSS", icon: "/media/images/SkillLogos/Tailwind_CSS.svg"}, 
            {skill: "JavaScript", icon: "/media/images/SkillLogos/JavaScript.svg"}, 
            {skill: "React.js", icon: "/media/images/SkillLogos/React.svg"}, 
            {skill: "Next.js", icon: "/media/images/SkillLogos/Next_JS.svg"}, 
            {skill: "Redux Toolkit", icon: "/media/images/SkillLogos/Redux.svg"},
		],
	},

    {
		category: "Backend Development",
		skills: [
            {skill: "Python", icon: "/media/images/SkillLogos/Python.svg"},
            {skill: "Django", icon: "/media/images/SkillLogos/Django.svg"}, 
            {skill: "Django REST Framework", icon: "/media/images/SkillLogos/Django_REST_Framework.webp"}, 
		],
	},

    {
		category: "Miscellaneous Tools",
		skills: [
            {skill: "Git", icon: "/media/images/SkillLogos/Git.svg"},
            {skill: "GitHub", icon: "/media/images/SkillLogos/GitHub.svg"}, 
            {skill: "Vercel", icon: "/media/images/SkillLogos/Vercel.svg"}, 
		],
	},
]



// Awards
export const Awards = [
    {
        award: "Star of the Month",
        organization: "Tata Consultancy Services",
        issued_date: "December 2023",
        url: "https://drive.google.com/uc?id=19v81YjptBEO5VAIbmP_Ia_dktIUPP5Fr&export=download",
    }
]