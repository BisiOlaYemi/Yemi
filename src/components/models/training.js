// datasets
const predefinedResponses = {
    "who is yemi?": ".Yemi is a full stack developer with 6 years of experience in both frontend and backend development.",
    "what is your experience?": ".Yemi has experience in various technologies including React, Node.js, Nest, FastApi, MongoDB, PostgreSQL, TypeScript, and more.",
    "what frontend frameworks do you use?": ".Yemi primarily uses React.js/Next.js and has experience with other frameworks like Svelite",
    "what backend technologies do you use?": ".Yemi has extensive experience with Node.js, Nest, and has worked with other backend technologies like Django and FastApi",
    "what databases are you familiar with?": ".Yemi is familiar with both SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB, Firebase) databases.",
    "what is your favorite project?": ".One of Yemi's favorite projects involved building a real-time chat application with React, Node.js, and Socket.IO.",
    "tell me about software development": ".Software development involves designing, creating, deploying, and maintaining software using various technologies and methodologies.",
    "do you have experience with cloud services?": ".Yes, Yemi has experience working with AWS, Azure, and Google Cloud Platform for deploying and managing applications.",
    "are you open to freelance work?": ".Yes, Yemi is open to freelance opportunities. You can contact him via email for more details.",
    "share yemi email": ".You can contact Yemi via his email address at ogunrinde_olayemi@yahoo.com",
    "can you suggest question to ask?": ".Ah yes! I can provide you with few questions to ask such as: tell me about software development?, are you open to freelance work?, how can i contact yemi?, can you code?, what is your approach to problem-solving? etc ",
    "how can i contact yemi?": ".You can contact Yemi via his email address at ogunrinde_olayemi@yahoo.com hope this helps",
    "ok": ".Think we're good now, You can contact Yemi via his email address at ogunrinde_olayemi@yahoo.com for more information in case I'm not able to help",
    "so": ".Think we're good now, You can contact Yemi via his email address at ogunrinde_olayemi@yahoo.com for more information in case I'm not able to help",
    "who": ".Who is not a complete question nor clause, but a phrase. So please provide a complete question I can help with",
    "?": ".Please repeat your question with a question tag(e.g ?) then I'll be able to answer you if it is what I can respond to",
    "tell me about yemi": ".I can only respond to you based on what I am trained to answer, as far as I am aware. Yemi has experience in various technologies including React, Node.js, Nest, FastApi, MongoDB, PostgreSQL, TypeScript, and more.",
    "what does yemi do?": ".Yemi is a full stack developer with 6 years of experience in both frontend and backend development. He's loyal and calm but sometimes he doesn't take shit, working with him will be a great experience because he's very good at problem solving, teaching etc.",
    "can you code?": ".Ah hell no, I am not like others (e.g chatgpt, claude etc), I'm only trained to respond to chats as much as I can, you'll need other ai to achieve your aims",
    "what is your own name?": ".I'm Akede, a trained Artificial Intelligence by Yemi with sole responsibility to engage users who visit here while away...",
    "what is your approach to problem-solving?": ".Yemi approaches problem-solving by first understanding the problem, breaking it down into smaller components, and then systematically tackling each component using appropriate tools and techniques.",
    "do you have experience with DevOps?": ".Yes, Yemi has experience with CI/CD pipelines, Docker, Kubernetes, and other DevOps practices to streamline software development and deployment.",
    "what tools do you use for version control?": ".Yemi primarily uses Git for version control and is experienced with platforms like GitHub, GitLab, and Bitbucket.",
    "what is your experience with testing?": ".Yemi is experienced with both frontend (e.g., Jest, React Testing Library) and backend (e.g., Mocha) testing frameworks.",
    "what is your favorite programming language?": ".Yemi's favorite programming language is JavaScript/TypeScript due to its versatility and use in both frontend and backend development.",
    "do you offer mentoring or coaching?": ".Yes, Yemi offers mentoring sessions for developers looking to improve their skills in full stack development. Reach out via email for more information."
  };

  export default predefinedResponses;