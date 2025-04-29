function NavigationBar() {
    return (
        <div className="navigation">
            <h1>Sai Akshay Rapelli</h1>
            <ul>
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#education" className="nav-link">Education</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#internship" className="nav-link">Internship</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#certifications" className="nav-link">Certifications</a></li>
                <li><a href="#languages" className="nav-link">Languages</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </div>
    );
}

function Hero() {
    return (
        <header id="home" className="bg-transparent text-white animate-entry">
            <div className="main-content hero-section">
                <div>
                    <h1 className="text-6xl font-bold mb-4">Sai Akshay Rapelli</h1>
                    <p className="text-lg mb-6">Electrical Engineer & Python Full Stack Developer</p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="mailto:akshaysai029@gmail.com" className="text-white social-link" title="Email">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sai-akshay-rapelli-824b46227" className="text-white social-link" title="LinkedIn">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/sai_akshay_rapelli?igsh=dHhxZTJwcGo2czU3" className="text-white social-link" title="Instagram">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://github.com/Saiakshay22" className="text-white social-link" title="GitHub">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-300 transition">Explore</button>
                    </div>
                </div>
                <div className="mt-10">
                    {/* <img src="1719381640478.jpg" alt="Sai Akshay Rapelli" className="w-1/2 mx-auto object-cover" /> */}
                </div>
            </div>
        </header>
    );
}

function Popup({ isOpen, onClose, title, details }) {
    if (!isOpen) return null;
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="popup-close" onClick={onClose}>×</span>
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-300 whitespace-pre-line">{details}</p>
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <section id="about" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">About</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                    I am a skilled Electrical Engineer and Python Full Stack Developer with a strong foundation in circuit design, power systems, and software development. I excel in building scalable web applications using technologies like Python, Django, and React, while also applying my electrical engineering expertise in projects like EV charging stations and energy meters. My analytical mindset and passion for innovation drive me to deliver impactful solutions in both domains.
                </p>
            </div>
        </section>
    );
}

function EducationSection() {
    const [popup, setPopup] = React.useState({ isOpen: false, title: '', details: '' });

    const openPopup = (title, details) => {
        setPopup({ isOpen: true, title, details });
    };

    const closePopup = () => {
        setPopup({ isOpen: false, title: '', details: '' });
    };

    return (
        <section id="education" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg education-item" onClick={() => openPopup(
                        'B.Tech in Electrical Engineering',
                        'Jayamukhi Institute of Technological Science, Warangal\nCGPA: 7.9/10\nDuration: 08/2021 - 05/2024\nAddress: Chennaraopet Mandal, Narsampet, Warangal, Telangana, India\nWebsite: https://jits.in'
                    )}>
                        <h3 className="text-2xl font-semibold text-gray-800">B.Tech in Electrical Engineering</h3>
                        <p className="text-gray-600">Jayamukhi Institute of Technological Science, Warangal | 08/2021 - 05/2024</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg education-item" onClick={() => openPopup(
                        'Diploma in Electrical Engineering',
                        'Vivekanandha College of Polytechnic, Mancherial\nCGPA: 8.9/10\nDuration: 06/2018 - 07/2021\nAddress: Mancherial, Telangana, India\nWebsite: https://vivekanandhapolytechnic.in'
                    )}>
                        <h3 className="text-2xl font-semibold text-gray-800">Diploma in Electrical Engineering</h3>
                        <p className="text-gray-600">Vivekanandha College of Polytechnic, Mancherial | 06/2018 - 07/2021</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg education-item" onClick={() => openPopup(
                        'Secondary School Certificate (SSC)',
                        'St. Mary’s High School, Bellampalli\nPercentage: 87%\nDuration: 06/2017 - 05/2018\nAddress: Bellampalli, Mancherial, Telangana, India'
                    )}>
                        <h3 className="text-2xl font-semibold text-gray-800">SSC</h3>
                        <p className="text-gray-600">St. Mary's High School, Bellampalli | 06/2017 - 05/2018</p>
                    </div>
                </div>
                <Popup
                    isOpen={popup.isOpen}
                    onClose={closePopup}
                    title={popup.title}
                    details={popup.details}
                />
            </div>
        </section>
    );
}

function SkillsSection() {
    return (
        <section id="skills" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Electrical Engineering</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>AutoCAD</li>
                            <li>Electrical Management</li>
                            <li>Circuit Design</li>
                            <li>Power Systems</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Full Stack Development</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Python (Django, Flask)</li>
                            <li>React, JavaScript</li>
                            <li>SQL, PostgreSQL</li>
                            <li>Web Development (HTML, CSS)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InternshipSection() {
    return (
        <section id="internship" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Internship</h2>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800">Maintenance of Substation</h3>
                    <p className="text-gray-600">Hyderabad | 03/2021 - 07/2021</p>
                    <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                        <li>Assisted in field surveys and data collection to support water distribution planning.</li>
                        <li>Collaborated with team members to analyze project impact and identify areas for improvement.</li>
                        <li>Gained hands-on experience in project management, community engagement, and technical reporting.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function ProjectsSection() {
    return (
        <section id="projects" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">Multi-Port EV Converter and Charging Station</h3>
                        <p className="text-gray-600">01/2024 - 05/2024</p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                            <li>Developed a multi-port EV charging station for simultaneous charging, improving efficiency by 30%.</li>
                            <li>Designed scalable hardware and integrated circuits for robust functionality.</li>
                            <li>Built software for real-time monitoring and system control.</li>
                            <li>Led testing and troubleshooting to ensure safety and compatibility with EV models.</li>
                            <li>Deployed and monitored the station for enhanced operational reliability.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">Prepaid Energy Meter</h3>
                        <p className="text-gray-600">09/2023 - 12/2023</p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                            <li>Designed prepaid energy meter systems for efficient energy management.</li>
                            <li>Integrated smart technology for real-time usage monitoring.</li>
                            <li>Developed mobile and web interfaces for remote meter management using Python and Django.</li>
                            <li>Implemented encryption to ensure system security and data protection.</li>
                            <li>Conducted rigorous testing to meet industry standards.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">DOL Starter</h3>
                        <p className="text-gray-600">09/2020 - 02/2021</p>
                        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                            <li>Managed implementation of DOL starter systems for industrial motor control.</li>
                            <li>Conducted testing to ensure compliance with operational standards.</li>
                            <li>Collaborated with teams to design efficient electrical systems.</li>
                            <li>Reduced downtime and improved motor protection through optimized solutions.</li>
                            <li>Selected cost-effective components to lower operational expenses.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CertificationsSection() {
    return (
        <section id="certifications" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Certifications</h2>
                <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-2">
                    <li>Python for Data Science - Cognitive Class by IBM</li>
                    <li>Machine Learning with Python - Cognitive Class by IBM</li>
                    <li>Young Professional - TCS iON</li>
                </ul>
            </div>
        </section>
    );
}

function LanguagesSection() {
    return (
        <section id="languages" className="py-16 animate-entry">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">Languages</h2>
                <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto space-y-2">
                    <li>Telugu (Native)</li>
                    <li>English (Fluent)</li>
                    <li>Hindi (Proficient)</li>
                </ul>
            </div>
        </section>
    );
}

function ContactSection() {
    return (
        <section id="contact" className="py-16 animate-entry">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Contact</h2>
                <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or inquiries!</p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:akshaysai029@gmail.com" className="text-gray-800 social-link" title="Email">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sai-akshay-rapelli-824b46227" className="text-gray-800 social-link" title="LinkedIn">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/saiakshayrapelli" className="text-gray-800 social-link" title="Instagram">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://github.com/saiakshayrapelli" className="text-gray-800 social-link" title="GitHub">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

function FooterSection() {
    return (
        <footer className="bg-white text-gray-800 py-8 text-center">
            <div className="container mx-auto px-4">
                <p className="text-lg mb-4">© 2025 Sai Akshay Rapelli. All rights reserved.</p>
            </div>
        </footer>
    );
}

function PortfolioApp() {
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-entry').forEach(element => {
            observer.observe(element);
        });

        const navLinks = document.querySelectorAll('.nav-link');
        function setActiveNav() {
            const scrollPosition = window.scrollY + 100;
            let activeSection = 'home';

            document.querySelectorAll('section, header').forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activeSection = section.id;
                }
            });

            const hash = window.location.hash.substring(1);
            if (hash && document.getElementById(hash)) {
                activeSection = hash;
            }

            navLinks.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === activeSection) {
                    item.classList.add('active');
                }
            });

            if (hash && document.getElementById(hash)) {
                document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
            }
        }

        window.addEventListener('scroll', setActiveNav);
        setActiveNav();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', setActiveNav);
        };
    }, []);

    return (
        <div>
            <NavigationBar />
            <Hero />
            <AboutMe />
            <EducationSection />
            <SkillsSection />
            <InternshipSection />
            <ProjectsSection />
            <CertificationsSection />
            <LanguagesSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PortfolioApp />);

var gk_isXlsx = false;
var gk_xlsxFileLookup = {};
var gk_fileData = {};
function filledCell(cell) {
    return cell !== '' && cell != null;
}
function loadFileData(filename) {
    if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
        try {
            var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
            var firstSheetName = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[firstSheetName];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
            var filteredData = jsonData.filter(row => row.some(filledCell));
            var headerRowIndex = filteredData.findIndex((row, index) =>
                row.filter(filledCell).length >= filteredData[index + 1]?.filter(filledCell).length
            );
            if (headerRowIndex === -1 || headerRowIndex > 25) {
                headerRowIndex = 0;
            }
            var csv = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex));
            csv = XLSX.utils.sheet_to_csv(csv, { header: 1 });
            return csv;
        } catch (e) {
            console.error(e);
            return "";
        }
    }
    return gk_fileData[filename] || "";
}