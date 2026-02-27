export const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Build modern React apps with hooks and components.",
    category: "Web Development",
    image: "https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg",
    rating: 4.7,
    students: 120345,
    price: "499",
    youtube: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    notes: "https://react.dev/learn",
    chapters: ["Intro", "JSX", "Components", "Props", "State", "Hooks"],
    quiz: [
      {
        question: "React is a?",
        options: ["Library", "Framework", "Language", "Compiler"],
        answer: "Library",
      },
      {
        question: "Which hook is used to manage state?",
        options: ["useEffect", "useContext", "useState", "useRef"],
        answer: "useState",
      },
      {
        question: "What syntax extension does React use?",
        options: ["TSX", "JSX", "HTML", "XML"],
        answer: "JSX",
      },
      {
        question: "React components must return?",
        options: ["Multiple elements", "A single React element", "Null only", "String only"],
        answer: "A single React element",
      },
      {
        question: "Props are?",
        options: ["Mutable", "Immutable", "Functions", "Classes"],
        answer: "Immutable",
      }
    ],
  },
  {
    id: 2,
    title: "Advanced React",
    description: "Deep dive into context, performance, and advanced patterns.",
    category: " Advance Web development",
    image: "https://tse2.mm.bing.net/th/id/OIP.9M-P0rTkAzbPNwNWocWIDwHaEK?pid=Api&P=0&h=180",
    rating: "4.1",
    price: "1299",
    youtube: "https://www.youtube.com/watch?v=0mVbNp1ol_w",
    notes: "https://react.dev/reference",
    chapters: ["Context", "Memo", "useCallback", "Performance", "Patterns"],
    quiz: [
      {
        question: "Which hook optimizes re-renders?",
        options: ["useMemo", "useState", "useEffect", "useRef"],
        answer: "useMemo",
      },
      {
        question: "What does React.memo do?",
        options: ["Caches the component", "Manages state", "Creates contexts", "Handles routing"],
        answer: "Caches the component",
      },
      {
        question: "useCallback returns a?",
        options: ["Memoized callback", "Value", "Component", "State"],
        answer: "Memoized callback",
      },
      {
        question: "Context API is primarily used for?",
        options: ["Global state", "Routing", "CSS", "Build tools"],
        answer: "Global state",
      },
      {
        question: "Code-splitting in React is done using?",
        options: ["React.lazy", "React.memo", "useState", "useEffect"],
        answer: "React.lazy",
      }
    ],
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    description: "Master JavaScript from basics to advanced concepts.",
    category: "Web development",
    image: "https://tse2.mm.bing.net/th/id/OIP.4wlUd_oSGusI1lrgnQlDhAHaHa?pid=Api&P=0&h=180",
    rating: 4.6,
    price: 549,
    youtube: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    notes: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    chapters: ["Variables", "Functions", "Arrays", "Objects", "DOM", "ES6"],
    quiz: [
      {
        question: "Which keyword declares a variable?",
        options: ["var", "int", "float", "char"],
        answer: "var",
      },
      {
        question: "Which method adds an element to the end of an array?",
        options: ["push", "pop", "shift", "unshift"],
        answer: "push",
      },
      {
        question: "What is 'typeof null' in JavaScript?",
        options: ["null", "object", "undefined", "string"],
        answer: "object",
      },
      {
        question: "Promises are used for?",
        options: ["Asynchronous operations", "Styling", "Routing", "DOM manipulation"],
        answer: "Asynchronous operations",
      },
      {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "===",
      }
    ],
  },
  {
    id: 4,
    title: "HTML & CSS Complete Guide",
    description: "Build modern responsive websites using HTML and CSS.",
    category: "Web",
    image: "https://tse3.mm.bing.net/th/id/OIP.m3VgIAQLJzQf5M1EafTi3gHaFj?pid=Api&P=0&h=180",
    rating: 4.5,
    price: 400,
    youtube: "https://www.youtube.com/watch?v=mU6anWqZJcc",
    notes: "https://developer.mozilla.org/en-US/docs/Web",
    chapters: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design"],
    quiz: [
      {
        question: "CSS stands for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheet", "None"],
        answer: "Cascading Style Sheets",
      },
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None"],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
      },
      {
        question: "Which tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: "<h1>",
      },
      {
        question: "Flexbox is mainly used for?",
        options: ["1D layouts", "2D layouts", "3D graphics", "Database"],
        answer: "1D layouts",
      }
    ],
  },
  {
    id: 5,
    title: "Python for Beginners",
    description: "Learn Python programming from zero to hero.",
    category: "Programming",
    image: "https://tse2.mm.bing.net/th/id/OIP.w_C5b8sg6KbxD2f0SIOSnQHaE-?pid=Api&P=0&h=180",
    price: 599,
    rating: 3.9,
    youtube: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    notes: "https://docs.python.org/3/tutorial/",
    chapters: ["Syntax", "Variables", "Loops", "Functions", "Lists", "Dict"],
    quiz: [
      {
        question: "Python is?",
        options: ["Interpreted", "Compiled", "Both", "None"],
        answer: "Interpreted",
      },
      {
        question: "Which keyword defines a function in Python?",
        options: ["def", "function", "fun", "define"],
        answer: "def",
      },
      {
        question: "What data structure does Python use for key-value pairs?",
        options: ["List", "Dictionary", "Tuple", "Set"],
        answer: "Dictionary",
      },
      {
        question: "How do you insert comments in Python?",
        options: ["//", "/*", "#", "--"],
        answer: "#",
      },
      {
        question: "Which statement stops a loop?",
        options: ["stop", "exit", "return", "break"],
        answer: "break",
      }
    ],
  },
  {
    id: 6,
    title: "C Programming Fundamentals",
    description: "Learn C language and core programming concepts.",
    category: "Programming",
    image: "https://tse3.mm.bing.net/th/id/OIP.MGFSai4TIryV5rDai4gWXwHaEm?pid=Api&P=0&h=180",
    price: 399,
    rating: 4.2,
    youtube: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
    notes: "https://www.learn-c.org/",
    chapters: ["Intro", "Variables", "Loops", "Functions", "Pointers"],
    quiz: [
      {
        question: "C is a?",
        options: ["Low-level", "High-level", "Middle-level", "None"],
        answer: "Middle-level",
      },
      {
        question: "Who developed C?",
        options: ["Dennis Ritchie", "Ken Thompson", "Bjarne Stroustrup", "James Gosling"],
        answer: "Dennis Ritchie",
      },
      {
        question: "Pointers store?",
        options: ["Values", "Memory addresses", "Strings", "Functions"],
        answer: "Memory addresses",
      },
      {
        question: "Which function is used to print to the console?",
        options: ["print", "console.log", "printf", "echo"],
        answer: "printf",
      },
      {
        question: "What is the size of an int in 32-bit systems?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
        answer: "4 bytes",
      }
    ],
  },
  {
    id: 7,
    title: "Java Programming & OOP",
    description: "Master Java and object-oriented programming concepts.",
    category: "Programming",
    image: "https://tse1.mm.bing.net/th/id/OIP.pENaEIHkm0i9K2c06hhdUAHaFW?pid=Api&P=0&h=180",
    price: 399,
    rating: 3.5,
    youtube: "https://www.youtube.com/watch?v=eIrMbAQSU34",
    notes: "https://docs.oracle.com/javase/tutorial/",
    chapters: ["Classes", "Objects", "Inheritance", "Polymorphism", "Interfaces"],
    quiz: [
      {
        question: "Java is?",
        options: ["Platform Independent", "Platform Dependent", "OS", "Hardware"],
        answer: "Platform Independent",
      },
      {
        question: "Which concept refers to hiding internal details?",
        options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
        answer: "Abstraction",
      },
      {
        question: "What is the entry point of a Java program?",
        options: ["start()", "init()", "main()", "run()"],
        answer: "main()",
      },
      {
        question: "Java compiles into?",
        options: ["Machine code", "Bytecode", "Assembly", "Source code"],
        answer: "Bytecode",
      },
      {
        question: "Which keyword creates an object?",
        options: ["create", "new", "make", "build"],
        answer: "new",
      }
    ],
  },
  {
    id: 8,
    title: "Data Structures & Algorithms",
    description: "Learn DSA for interviews and competitive programming.",
    category: "CS",
    image: "https://tse3.mm.bing.net/th/id/OIP.NTx8hjbmA2j50LnCQhSWKwHaEK?pid=Api&P=0&h=180",
    rating: 4.3,
    price: 359,
    youtube: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
    notes: "https://www.geeksforgeeks.org/data-structures/",
    chapters: ["Arrays", "Stacks", "Queues", "Trees", "Graphs", "Sorting"],
    quiz: [
      {
        question: "Stack follows?",
        options: ["FIFO", "LIFO", "Random", "None"],
        answer: "LIFO",
      },
      {
        question: "Queue follows?",
        options: ["FIFO", "LIFO", "FILO", "Random"],
        answer: "FIFO",
      },
      {
        question: "Which structure connects nodes with edges?",
        options: ["Array", "Stack", "Graph", "Queue"],
        answer: "Graph",
      },
      {
        question: "Retrieving elements at a specific index in an array is?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
      },
      {
        question: "Which tree traversal visits the root node first?",
        options: ["Inorder", "Preorder", "Postorder", "Level-order"],
        answer: "Preorder",
      }
    ],
  },
  {
    id: 9,
    title: "Algorithms Masterclass",
    description: "Learn searching, sorting, greedy and dynamic programming.",
    category: "CS",
    youtube: "https://www.youtube.com/watch?v=8hly31xKli0",
    image: "https://tse3.mm.bing.net/th/id/OIP.DM7uO5gLr7oSFw19WGSMyQHaEH?pid=Api&P=0&h=180",
    price: 599,
    rating: 4.8,
    notes: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    chapters: ["Binary Search", "Merge Sort", "Greedy", "DP", "Recursion"],
    quiz: [
      {
        question: "Binary search works on?",
        options: ["Sorted array", "Unsorted array", "Any array", "None"],
        answer: "Sorted array",
      },
      {
        question: "What is the time complexity of Quick Sort on average?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
        answer: "O(n log n)",
      },
      {
        question: "Dynamic programming relies on?",
        options: ["Recursion and Memoization", "Only iteration", "Random choices", "None"],
        answer: "Recursion and Memoization",
      },
      {
        question: "Greedy algorithms make choices that are locally?",
        options: ["Worst", "Optimal", "Random", "Average"],
        answer: "Optimal",
      },
      {
        question: "Merge sort uses which paradigm?",
        options: ["Dynamic programming", "Greedy method", "Divide and conquer", "Backtracking"],
        answer: "Divide and conquer",
      }
    ],
  },
  {
    id: 10,
    title: "SQL & Database Management",
    description: "Learn SQL queries and relational database concepts.",
    category: "Database",
    image: "https://tse2.mm.bing.net/th/id/OIP.-gKH8Zws9WXw63UZzrh2TgHaE8?pid=Api&P=0&h=180",
    rating: 4.2,
    price: 649,
    youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    notes: "https://www.w3schools.com/sql/",
    chapters: ["SELECT", "INSERT", "UPDATE", "DELETE", "JOIN", "Indexes"],
    quiz: [
      {
        question: "SQL stands for?",
        options: ["Structured Query Language", "Simple Query Language", "Strong Query Language", "None"],
        answer: "Structured Query Language",
      },
      {
        question: "Which command removes data but leaves the structure?",
        options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
        answer: "TRUNCATE",
      },
      {
        question: "Which JOIN returns all records from both tables?",
        options: ["INNER", "LEFT", "RIGHT", "FULL OUTER"],
        answer: "FULL OUTER",
      },
      {
        question: "Primary key in a table?",
        options: ["Allows nulls", "Is unique", "Can be duplicate", "Can be many per table"],
        answer: "Is unique",
      },
      {
        question: "What accelerates query retrieval speed?",
        options: ["Views", "Triggers", "Indexes", "Foreign Keys"],
        answer: "Indexes",
      }
    ],
  },
  {
    id: 11,
    title: "MongoDB for Developers",
    description: "Learn NoSQL database using MongoDB.",
    category: "Database",
    image: "https://tse2.mm.bing.net/th/id/OIP.QJnvahq_EBdUGjYQUYrhvAHaDt?pid=Api&P=0&h=180",
    rating: 4.7,
    price: 749,
    youtube: "https://www.youtube.com/watch?v=ofme2o29ngU",
    notes: "https://www.mongodb.com/docs/",
    chapters: ["Collections", "Documents", "CRUD", "Indexes", "Aggregation"],
    quiz: [
      {
        question: "MongoDB is?",
        options: ["NoSQL", "SQL", "Graph DB", "File System"],
        answer: "NoSQL",
      },
      {
        question: "What format does MongoDB primarily store data in?",
        options: ["XML", "BSON", "CSV", "YAML"],
        answer: "BSON",
      },
      {
        question: "Tables in SQL are analogous to what in MongoDB?",
        options: ["Documents", "Databases", "Collections", "Nodes"],
        answer: "Collections",
      },
      {
        question: "Which method retrieves documents?",
        options: ["db.collection.search()", "db.collection.find()", "db.collection.get()", "db.collection.fetch()"],
        answer: "db.collection.find()",
      },
      {
        question: "Which framework processes data records and returns computed results?",
        options: ["Aggregation Pipeline", "Join Query", "MapReduce", "Triggers"],
        answer: "Aggregation Pipeline",
      }
    ],
  },
  {
    id: 12,
    title: "Node.js & Express",
    description: "Build backend APIs using Node.js and Express.",
    category: "Backend",
    image: "https://tse4.mm.bing.net/th/id/OIP.5a4SNrUEFPGHNV-QIsAEwAHaEo?pid=Api&P=0&h=180",
    price: 459,
    rating: 3.2,
    youtube: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
    notes: "https://nodejs.org/en/docs",
    chapters: ["Node Basics", "Express", "Routing", "Middleware", "APIs"],
    quiz: [
      {
        question: "Node.js is?",
        options: ["Runtime", "Framework", "Library", "Language"],
        answer: "Runtime",
      },
      {
        question: "Express.js is often used as a?",
        options: ["Database", "Frontend Framework", "Backend Web Framework", "OS"],
        answer: "Backend Web Framework",
      },
      {
        question: "Which object represents the HTTP request?",
        options: ["res", "req", "err", "next"],
        answer: "req",
      },
      {
        question: "NPM stands for?",
        options: ["Node Package Manager", "New Package Manager", "Network Protocol Manager", "None"],
        answer: "Node Package Manager",
      },
      {
        question: "Which method intercepts requests before reaching the route?",
        options: ["Middleware", "Controller", "Service", "Router"],
        answer: "Middleware",
      }
    ],
  },
  {
    id: 13,
    title: "Full Stack Web Development",
    description: "Build complete web apps using MERN stack.",
    category: "Web development",
    image: "https://tse1.mm.bing.net/th/id/OIP.1cHQYuXKFweyBK70FuXIKQHaEK?pid=Api&P=0&h=180",
    price: 1899,
    rating: 4.8,
    youtube: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
    notes: "https://www.mongodb.com/mern-stack",
    chapters: ["React", "Node", "Express", "MongoDB", "Deployment"],
    quiz: [
      {
        question: "MERN stands for?",
        options: ["Mongo, Express, React, Node", "MySQL, Express, React, Node", "None", "Only React"],
        answer: "Mongo, Express, React, Node",
      },
      {
        question: "Which MERN component handles database storage?",
        options: ["React", "Express", "Node", "MongoDB"],
        answer: "MongoDB",
      },
      {
        question: "Which tool connects physical servers to the frontend in MERN?",
        options: ["REST API", "XML", "SOAP", "FTP"],
        answer: "REST API",
      },
      {
        question: "Cross-Origin Resource Sharing is known as?",
        options: ["CORS", "XML", "XSS", "CSRF"],
        answer: "CORS",
      },
      {
        question: "An alternative to MERN using Angular is?",
        options: ["MEAN stack", "MEVN stack", "LAMP stack", "JAM stack"],
        answer: "MEAN stack",
      }
    ],
  },
  {
    id: 14,
    title: "Git & GitHub",
    description: "Learn version control and collaboration with GitHub.",
    category: "Tools",
    image: "https://tse1.mm.bing.net/th/id/OIP.e37oQMhP4vy1bEPcLOENHgHaEK?pid=Api&P=0&h=180",
    price: 329,
    rating: 3.9,
    youtube: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    notes: "https://git-scm.com/doc",
    chapters: ["Git Init", "Commit", "Branch", "Merge", "GitHub"],
    quiz: [
      {
        question: "Git is used for?",
        options: ["Version Control", "Design", "Testing", "Deployment"],
        answer: "Version Control",
      },
      {
        question: "Which command initializes a git repository?",
        options: ["git start", "git new", "git init", "git create"],
        answer: "git init",
      },
      {
        question: "How do you check the state of the repository?",
        options: ["git state", "git status", "git log", "git check"],
        answer: "git status",
      },
      {
        question: "What pushes local commits to GitHub?",
        options: ["git pull", "git push", "git commit", "git sync"],
        answer: "git push",
      },
      {
        question: "A branch in git is used to?",
        options: ["Isolate development work", "Store large files", "Connect databases", "Change OS"],
        answer: "Isolate development work",
      }
    ],
  },
  {
    id: 15,
    title: "Operating Systems",
    description: "Learn core OS concepts like processes and memory.",
    category: "CS",
    image: "https://tse1.mm.bing.net/th/id/OIP.XkdsbRUtOWy0pq6GVVL__wHaEQ?pid=Api&P=0&h=180",
    price: 429,
    rating: 4.3,
    youtube: "https://www.youtube.com/watch?v=26QPDBe-NB8",
    notes: "https://www.geeksforgeeks.org/operating-systems/",
    chapters: ["Processes", "Threads", "Memory", "Scheduling", "Deadlocks"],
    quiz: [
      {
        question: "OS manages?",
        options: ["Hardware", "Software", "Both", "None"],
        answer: "Both",
      },
      {
        question: "A program in execution is called a?",
        options: ["Thread", "Process", "Task", "Instruction"],
        answer: "Process",
      },
      {
        question: "Deadlock occurs when?",
        options: ["Processes wait indefinitely", "CPU is free", "RAM is full", "None"],
        answer: "Processes wait indefinitely",
      },
      {
        question: "Paging is a memory management scheme that?",
        options: ["Eliminates external fragmentation", "Requires physical RAM", "Never swaps", "Only uses HDD"],
        answer: "Eliminates external fragmentation",
      },
      {
        question: "Which of these is a process scheduling algorithm?",
        options: ["Round Robin", "TCP", "Binary Search", "MapReduce"],
        answer: "Round Robin",
      }
    ],
  },
  {
    id: 16,
    title: "Computer Networks",
    description: "Understand networking concepts and protocols.",
    category: "CS",
    image: "https://tse3.mm.bing.net/th/id/OIP.HnChPieOrOZwQR7gEoFMAQHaE8?pid=Api&P=0&h=180",
    price: 249,
    rating: 4.5,
    youtube: "https://www.youtube.com/watch?v=qiQR5rTSshw",
    notes: "https://www.geeksforgeeks.org/computer-network-tutorials/",
    chapters: ["OSI", "TCP/IP", "HTTP", "DNS", "Routing"],
    quiz: [
      {
        question: "HTTP is?",
        options: ["Protocol", "Language", "OS", "Database"],
        answer: "Protocol",
      },
      {
        question: "How many layers are in the OSI model?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        question: "Which protocol ensures reliable delivery?",
        options: ["UDP", "IP", "ICMP", "TCP"],
        answer: "TCP",
      },
      {
        question: "DNS stands for?",
        options: ["Data Network System", "Domain Name System", "Digital Node Service", "Distributed Name Server"],
        answer: "Domain Name System",
      },
      {
        question: "Router operates at which OSI layer?",
        options: ["Network", "Data Link", "Physical", "Transport"],
        answer: "Network",
      }
    ],
  },
  {
    id: 17,
    title: "Cyber Security Basics",
    description: "Learn fundamentals of cyber security and ethical hacking.",
    category: "Security",
    image: "https://tse1.mm.bing.net/th/id/OIP.9ukuR9-7v_kFbaPXrw-hsAHaEH?pid=Api&P=0&h=180",
    price: 429,
    rating: 3.3,
    youtube: "https://www.youtube.com/watch?v=inWWhr5tnEA",
    notes: "https://owasp.org/",
    chapters: ["Security Basics", "Attacks", "Encryption", "Firewalls"],
    quiz: [
      {
        question: "Firewall is used for?",
        options: ["Security", "Speed", "Storage", "Design"],
        answer: "Security",
      },
      {
        question: "Phishing is a type of?",
        options: ["Hardware failure", "Social engineering attack", "Virus", "Firewall"],
        answer: "Social engineering attack",
      },
      {
        question: "Malware stands for?",
        options: ["Malicious Hardware", "Malicious Software", "Multiple Wires", "None"],
        answer: "Malicious Software",
      },
      {
        question: "Which protocol is used for secure communication over a computer network?",
        options: ["HTTP", "HTTPS", "FTP", "Telnet"],
        answer: "HTTPS",
      },
      {
        question: "A DDoS attack aims to?",
        options: ["Steal passwords", "Corrupt databases", "Overwhelm a server", "Bypass firewalls"],
        answer: "Overwhelm a server",
      }
    ],
  },
  {
    id: 18,
    title: "Machine Learning Basics",
    description: "Introduction to machine learning and models.",
    category: "AI",
    image: "https://tse4.mm.bing.net/th/id/OIP.lAG9VX8OLdOVPKZJD0x9_gHaD5?pid=Api&P=0&h=180",
    rating: 4.6,
    price: 499,
    youtube: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
    notes: "https://scikit-learn.org/stable/tutorial/",
    chapters: ["Supervised", "Unsupervised", "Regression", "Classification"],
    quiz: [
      {
        question: "ML is part of?",
        options: ["AI", "Web", "OS", "DB"],
        answer: "AI",
      },
      {
        question: "Which type of ML uses labeled data?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "None"],
        answer: "Supervised Learning",
      },
      {
        question: "Regression targets which type of output?",
        options: ["Discrete", "Continuous numeric", "Images", "Text"],
        answer: "Continuous numeric",
      },
      {
        question: "Overfitting means?",
        options: ["Model performs well everywhere", "Model memorizes training data", "Model cannot learn", "Model is too small"],
        answer: "Model memorizes training data",
      },
      {
        question: "K-Means is used for?",
        options: ["Classification", "Regression", "Clustering", "Reinforcement"],
        answer: "Clustering",
      }
    ],
  },
  {
    id: 19,
    title: "Deep Learning with Python",
    description: "Learn neural networks and deep learning.",
    category: "AI",
    youtube: "https://www.youtube.com/watch?v=aircAruvnKk",
    image: "https://tse3.mm.bing.net/th/id/OIP.zMVbmRXKbYg9ez2y_uXHTQHaEQ?pid=Api&P=0&h=180",
    price: 799,
    rating: 4.8,
    notes: "https://www.tensorflow.org/tutorials",
    chapters: ["Neurons", "CNN", "RNN", "Training", "Evaluation"],
    quiz: [
      {
        question: "Deep learning uses?",
        options: ["Neural Networks", "Trees", "Graphs", "Stacks"],
        answer: "Neural Networks",
      },
      {
        question: "CNN stands for?",
        options: ["Convolutional Neural Network", "Central Neural Network", "Complex Neural Node", "None"],
        answer: "Convolutional Neural Network",
      },
      {
        question: "RNNs are heavily used in?",
        options: ["Image classification", "Sequential data analysis", "Tabular data", "Games"],
        answer: "Sequential data analysis",
      },
      {
        question: "Backpropagation relies heavily on?",
        options: ["Calculus/Derivatives", "Database joins", "Tree balancing", "Random numbers"],
        answer: "Calculus/Derivatives",
      },
      {
        question: "Which activation function outputs values between 0 and 1?",
        options: ["ReLU", "Sigmoid", "Softmax", "Tanh"],
        answer: "Sigmoid",
      }
    ],
  },
  {
    id: 20,
    title: "Data Science with Python",
    description: "Learn data analysis, visualization and pandas.",
    category: "Data",
    youtube: "https://www.youtube.com/watch?v=ua-CiDNNj30",
    image: "https://tse4.mm.bing.net/th/id/OIP.LxP1qwPjHE1CDFmLBh3bxQHaDu?pid=Api&P=0&h=180",
    price: 789,
    rating: 4.1,
    notes: "https://pandas.pydata.org/docs/",
    chapters: ["NumPy", "Pandas", "Matplotlib", "EDA"],
    quiz: [
      {
        question: "Pandas is used for?",
        options: ["Data Analysis", "Web Dev", "OS", "Games"],
        answer: "Data Analysis",
      },
      {
        question: "What is NumPy primarily used for?",
        options: ["Numerical operations", "Web servers", "Databases", "Routing"],
        answer: "Numerical operations",
      },
      {
        question: "Matplotlib outputs?",
        options: ["JSON data", "Audio files", "Plots and graphs", "SQL Queries"],
        answer: "Plots and graphs",
      },
      {
        question: "DataFrame in Pandas is?",
        options: ["1-dimensional array", "2-dimensional labeled data structure", "Database instance", "Operating System"],
        answer: "2-dimensional labeled data structure",
      },
      {
        question: "A popular Jupyter tool for Data Science is?",
        options: ["Jupyter Notebook", "Jupyter Compiler", "Jupyter DB", "Jupyter Framework"],
        answer: "Jupyter Notebook",
      }
    ],
  },
  {
    id: 21,
    title: "Power BI Basics",
    description: "Create dashboards and reports using Power BI.",
    category: "Data",
    youtube: "https://www.youtube.com/watch?v=AGrl-H87pRU",
    notes: "https://learn.microsoft.com/power-bi/",
    image: "https://up.yimg.com/ib/th/id/OIP.PpM1zmnloYFOB4G6I6FaWAHaE_?pid=Api&rs=1&c=1&qlt=95&w=180&h=121",
    price: 299,
    rating: 3.9,
    chapters: ["Import Data", "Charts", "DAX", "Dashboards"],
    quiz: [
      {
        question: "Power BI is used for?",
        options: ["Data Visualization", "Coding", "OS", "Security"],
        answer: "Data Visualization"
      },
      {
        question: "DAX stands for?",
        options: ["Data Analysis Expressions", "Data Access XML", "Data Analytics Extractor", "None"],
        answer: "Data Analysis Expressions"
      },
      {
        question: "Power Query in Power BI is used to?",
        options: ["Format hard drives", "Clean and transform data", "Build UI layouts", "Secure passwords"],
        answer: "Clean and transform data"
      },
      {
        question: "What is a dashboard in Power BI?",
        options: ["A single canvas with tiles", "Multiple pages of detailed data", "A relational database view", "A configuration settings page"],
        answer: "A single canvas with tiles"
      },
      {
        question: "Which of the following is NOT a Power BI component?",
        options: ["Power BI Desktop", "Power BI Service", "Power BI Browser", "Power BI Mobile Apps"],
        answer: "Power BI Browser"
      }
    ]
  },
  {
    id: 22,
    title: "Excel for Data Analysis",
    description: "Master Excel formulas, charts, and pivot tables.",
    category: "Data",
    youtube: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
    image: "https://up.yimg.com/ib/th/id/OIP.77sebJvmljKumU8JUe66YQHaEK?pid=Api&rs=1&c=1&qlt=95&w=206&h=115",
    rating: 4.8,
    price: 789,
    notes: "https://support.microsoft.com/excel",
    chapters: ["Formulas", "Charts", "Pivot Tables", "Functions"],
    quiz: [
      {
        question: "Excel is mainly used for?",
        options: ["Spreadsheets", "Websites", "OS", "Games"],
        answer: "Spreadsheets"
      },
      {
        question: "Pivot tables are used to?",
        options: ["Summarize, analyze, explore data", "Create HTML pages", "Write macros only", "Build databases"],
        answer: "Summarize, analyze, explore data"
      },
      {
        question: "VLOOKUP is used for?",
        options: ["Vertical lookup of values", "Vertical layout of cells", "Validating variables", "Viewing external URLs"],
        answer: "Vertical lookup of values"
      },
      {
        question: "Which symbol starts a formula in Excel?",
        options: ["+", "=", "-", "*"],
        answer: "="
      },
      {
        question: "Conditional Formatting in Excel?",
        options: ["Changes cell appearance based on criteria", "Formats text for printing", "Translates language text", "Creates pivot tables"],
        answer: "Changes cell appearance based on criteria"
      }
    ]
  },
  {
    id: 23,
    title: "Docker for Beginners",
    description: "Learn containerization using Docker.",
    category: "DevOps",
    youtube: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
    image: "https://tse2.mm.bing.net/th/id/OIP.FBx_mu7uNYpdC617HDT4ZwHaD6?pid=Api&P=0&h=180",
    rating: 2.9,
    price: 899,
    notes: "https://docs.docker.com/",
    chapters: ["Images", "Containers", "Volumes", "Dockerfile"],
    quiz: [
      {
        question: "Docker is used for?",
        options: ["Containerization", "Design", "Testing", "Gaming"],
        answer: "Containerization"
      },
      {
        question: "A Docker container is?",
        options: ["A hardware box", "A standardized unit of software", "A database system", "A cloud provider"],
        answer: "A standardized unit of software"
      },
      {
        question: "Which file automates the creation of a Docker image?",
        options: ["docker-compose.yml", "Dockerfile", "image.json", "build.txt"],
        answer: "Dockerfile"
      },
      {
        question: "Docker images are?",
        options: ["Read-write", "Read-only templates", "Zip archives", "Virtual Machines"],
        answer: "Read-only templates"
      },
      {
        question: "What command runs a container?",
        options: ["docker start", "docker run", "docker play", "docker execute"],
        answer: "docker run"
      }
    ]
  },
  {
    id: 24,
    title: "Kubernetes Basics",
    description: "Learn container orchestration with Kubernetes.",
    category: "DevOps",
    youtube: "https://www.youtube.com/watch?v=X48VuDVv0do",
    image: "https://tse2.mm.bing.net/th/id/OIP.2ikxdLZUmJJ2dpEsiidEfwHaEK?pid=Api&P=0&h=180",
    price: 559,
    rating: 4.1,
    notes: "https://kubernetes.io/docs/",
    chapters: ["Pods", "Services", "Deployments", "Scaling"],
    quiz: [
      {
        question: "Kubernetes manages?",
        options: ["Containers", "Files", "Designs", "Networks"],
        answer: "Containers"
      },
      {
        question: "What is the smallest deployable unit in Kubernetes?",
        options: ["Container", "Pod", "Node", "Cluster"],
        answer: "Pod"
      },
      {
        question: "Which tool is commonly used to interact with the Kubernetes API via CLI?",
        options: ["docker", "kubectl", "kube-start", "kube-admin"],
        answer: "kubectl"
      },
      {
        question: "A ReplicaSet ensures?",
        options: ["Database backup", "A specified number of pod replicas are running", "Traffic is routed correctly", "Logs are saved"],
        answer: "A specified number of pod replicas are running"
      },
      {
        question: "Which Kubernetes component schedules pods optimally to nodes?",
        options: ["Kubelet", "Kube-proxy", "Kube-scheduler", "Etcd"],
        answer: "Kube-scheduler"
      }
    ]
  },
  {
    id: 25,
    title: "Cloud Computing Basics",
    description: "Learn AWS, Azure, and cloud fundamentals.",
    category: "Cloud",
    youtube: "https://www.youtube.com/watch?v=2LaAJq1lB1Q",
    image: "https://tse4.mm.bing.net/th/id/OIP.qCk_vfS7DVLI18XjSoKSAAHaD4?pid=Api&P=0&h=180",
    price: 349,
    rating: 3.8,
    notes: "https://aws.amazon.com/what-is-cloud-computing/",
    chapters: ["IaaS", "PaaS", "SaaS", "Deployment"],
    quiz: [
      {
        question: "Cloud provides?",
        options: ["On-demand resources", "Only storage", "Only compute", "None"],
        answer: "On-demand resources"
      },
      {
        question: "AWS stands for?",
        options: ["Amazon Web Services", "Advanced Web Solutions", "Automated Web Services", "None"],
        answer: "Amazon Web Services"
      },
      {
        question: "SaaS refers to?",
        options: ["Storage as a Service", "Software as a Service", "System as a Service", "Security as a Service"],
        answer: "Software as a Service"
      },
      {
        question: "Which cloud model provides the highest level of control to the customer?",
        options: ["PaaS", "SaaS", "IaaS", "DaaS"],
        answer: "IaaS"
      },
      {
        question: "Elasticity in cloud computing means?",
        options: ["Encrypting data dynamically", "Scaling resources up and down as needed", "Locking into a single cloud provider", "Using flexible network routing"],
        answer: "Scaling resources up and down as needed"
      }
    ]
  },
  {
    id: 26,
    title: "Android App Development",
    description: "Build Android apps using Java and Kotlin.",
    image: "https://tse3.mm.bing.net/th/id/OIP.EAcGiGfTzWcb4yDhc2BcrwHaHa?pid=Api&P=0&h=180",
    price: 199,
    rating: 1.5,
    category: "Mobile",
    youtube: "https://www.youtube.com/watch?v=fis26HvvDII",
    notes: "https://developer.android.com/docs",
    chapters: ["Activities", "Layouts", "Intents", "APIs"],
    quiz: [
      {
        question: "Android apps are built using?",
        options: ["Java/Kotlin", "Python", "C only", "PHP"],
        answer: "Java/Kotlin"
      },
      {
        question: "What is an Activity in Android?",
        options: ["A background process", "A single screen with a UI", "A database connection", "A broadcast receiver"],
        answer: "A single screen with a UI"
      },
      {
        question: "Which file defines Android app permissions and components?",
        options: ["AndroidManifest.xml", "build.gradle", "strings.xml", "main.java"],
        answer: "AndroidManifest.xml"
      },
      {
        question: "Intents are used to?",
        options: ["Request permissions", "Manage database queries", "Start another component like an Activity", "Design UI layouts"],
        answer: "Start another component like an Activity"
      },
      {
        question: "What is the official IDE for Android development?",
        options: ["Eclipse", "IntelliJ IDEA", "Android Studio", "VS Code"],
        answer: "Android Studio"
      }
    ]
  },
  {
    id: 27,
    title: "iOS App Development",
    description: "Build iOS apps using Swift.",
    category: "Mobile",
    youtube: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
    image: "https://tse4.mm.bing.net/th/id/OIP.Sqj-JiqzxknmM9L21A3iZAHaEM?pid=Api&P=0&h=180",
    price: 349,
    rating: 4.3,
    notes: "https://developer.apple.com/documentation",
    chapters: ["Swift", "UI", "Navigation", "APIs"],
    quiz: [
      {
        question: "iOS apps use?",
        options: ["Swift", "Java", "Python", "C"],
        answer: "Swift"
      },
      {
        question: "What is Apple's IDE for iOS development?",
        options: ["Visual Studio", "Xcode", "Eclipse", "AppCode"],
        answer: "Xcode"
      },
      {
        question: "Which UI framework is declarative in iOS?",
        options: ["UIKit", "Storyboards", "SwiftUI", "CoreData"],
        answer: "SwiftUI"
      },
      {
        question: "Cocoa Touch is a UI framework for?",
        options: ["macOS", "tvOS", "watchOS", "iOS"],
        answer: "iOS"
      },
      {
        question: "Which of the following manages app dependencies in iOS historically?",
        options: ["NPM", "CocoaPods", "Pip", "Maven"],
        answer: "CocoaPods"
      }
    ]
  },
  {
    id: 28,
    title: "Software Testing",
    description: "Learn manual and automation testing basics.",
    category: "Testing",
    youtube: "https://www.youtube.com/watch?v=7UuPq6c7F6g",
    notes: "https://www.guru99.com/software-testing.html",
    image: "https://tse2.mm.bing.net/th/id/OIP.nUgW_JMrCeL_jXg1Xgme8AHaFL?pid=Api&P=0&h=180",
    price: 999,
    rating: 4.7,
    chapters: ["Manual", "Automation", "Test Cases", "Bug Reports"],
    quiz: [
      {
        question: "Testing ensures?",
        options: ["Quality", "Speed", "Design", "Security only"],
        answer: "Quality"
      },
      {
        question: "Unit testing tests what level of the application?",
        options: ["Individual components or functions", "The entire UI", "Database performance", "Server load times"],
        answer: "Individual components or functions"
      },
      {
        question: "Selenium is commonly used for?",
        options: ["Web Automation Testing", "Backend Unit Testing", "Manual Penetration Testing", "Mobile App Development"],
        answer: "Web Automation Testing"
      },
      {
        question: "White Box testing implies?",
        options: ["Testers don't know the internal structure", "Testers know the internal structure", "Testing only the UI", "Testing with random inputs"],
        answer: "Testers know the internal structure"
      },
      {
        question: "Regression testing ensures?",
        options: ["New code hasn't broken existing functionality", "UI designs match specs", "Code executes faster", "Databases are synchronized"],
        answer: "New code hasn't broken existing functionality"
      }
    ]
  },
  {
    id: 29,
    title: "UI/UX Design Fundamentals",
    description: "Learn UI/UX principles and design tools.",
    category: "Design",
    youtube: "https://www.youtube.com/watch?v=Ovj4hFxko7c",
    image: "https://tse2.mm.bing.net/th/id/OIP.jm5JMtepVXhuMEUsHG1_ngHaE8?pid=Api&P=0&h=180",
    price: 4.5,
    rating: 799,
    notes: "https://www.interaction-design.org/",
    chapters: ["UI", "UX", "Wireframes", "Prototypes"],
    quiz: [
      {
        question: "UX means?",
        options: ["User Experience", "User Extension", "User Example", "None"],
        answer: "User Experience"
      },
      {
        question: "UI means?",
        options: ["User Interaction", "User Interface", "User Integration", "Universal Interface"],
        answer: "User Interface"
      },
      {
        question: "Which of the following is a popular UI design tool?",
        options: ["Postman", "Figma", "Docker", "Jenkins"],
        answer: "Figma"
      },
      {
        question: "Wireframes are best described as?",
        options: ["High fidelity interactive designs", "Database schematic diagrams", "Low fidelity architectural blueprints", "Color palette collections"],
        answer: "Low fidelity architectural blueprints"
      },
      {
        question: "User Personas are?",
        options: ["Customer account records", "Fictional characters representing user types", "Log-in credentials", "Team member roles"],
        answer: "Fictional characters representing user types"
      }
    ]
  },
  {
    id: 30,
    title: "System Design Basics",
    description: "Learn how to design scalable systems.",
    category: "CS",
    youtube: "https://www.youtube.com/watch?v=UzLMhqg3_Wc",
    image: "https://tse4.mm.bing.net/th/id/OIP.M54Kkvv7d-N9k9A2s1A--gHaEK?pid=Api&P=0&h=180",
    price: 589,
    rating: 2.9,
    notes: "https://github.com/donnemartin/system-design-primer",
    chapters: ["Scalability", "Load Balancing", "Caching", "Databases"],
    quiz: [
      {
        question: "System design focuses on?",
        options: ["Scalability", "Only UI", "Only Code", "Only Testing"],
        answer: "Scalability"
      },
      {
        question: "What does horizontal scaling mean?",
        options: ["Upgrading existing server hardware", "Adding more servers", "Optimizing the database queries", "Writing more efficient code"],
        answer: "Adding more servers"
      },
      {
        question: "A Load Balancer is used to?",
        options: ["Increase database performance", "Distribute incoming network traffic across multiple servers", "Encrypt network traffic", "Cache static assets"],
        answer: "Distribute incoming network traffic across multiple servers"
      },
      {
        question: "A CDN stands for?",
        options: ["Content Delivery Network", "Central Data Node", "Cloud Database Node", "Consolidated Data Network"],
        answer: "Content Delivery Network"
      },
      {
        question: "Caching primarily improves?",
        options: ["Data consistency", "Latency and read performance", "Security", "Hardware lifespan"],
        answer: "Latency and read performance"
      }
    ]
  }
];
