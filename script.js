const projectData = {
    'research-project': {
        title: 'Feature Writing',
        company: 'The Business Standard',
        course: 'Feature Writing & Reporting',
        projectName: 'Newsroom Features',
        projectTitle: 'Independent Cinema, Digital Matchmaking, Housing and University Cultural Events',
        projectDate: 'Summer 2026',
        description: 'Produced reported features and event, culture and lifestyle stories, handling research, interviews, writing, fact-checking and publication-ready copy. Covered subjects including independent cinema, digital matchmaking, housing and university cultural events.',
        justification: 'This role required extensive on-the-ground reporting and interviewing skills. It involved pitching stories, conducting primary research, and writing long-form feature articles for a national daily newspaper. The experience solidified my ability to work under tight deadlines and produce engaging, human-centered narratives.',
        learnings: 'Developing this project helped me have a clear idea of how to write a complete research proposal in a systematic and structured manner. Each research proposal is interrelated and I was taught so that it is necessary to plan well before undertaking any research. It took me a project to learn the entire process starting with how to pick a topic and how to formulate research questions and pick the appropriate methodology. At the same time, this project helped me think more deeply about the impact of social media on students’ daily lives. I understood how online communication can sometimes replace real-life interaction and how this change can influence behavior, relationships, and communication skills. It also made me more aware of how students balance between virtual and real-world socializing. In a practical perspective, I learned about different data collection methods such as surveys and interviews and how they help in gathering useful information. I also learned my critical thinking skills, preparation, and delivery of ideas in an academic manner. Generally, this project has developed my research; it has also provided a good foundation and ground on which I will proceed with future academic works more confidently and with more clarity.'
    },
    'position-paper': {
        title: 'Research & Analysis',
        company: 'Press Institute Bangladesh',
        course: 'Communication Research',
        projectName: 'Documentary Research',
        projectTitle: 'Srabon Bidroho – July Uprising',
        projectDate: 'Summer 2025',
        description: 'Contributed historical research, content analysis and narrative development to the documentary “Srabon Bidroho – July Uprising,” with emphasis on archival verification and contextual accuracy.',
        justification: 'This project involved deep-dive historical research and fact-checking. It required analyzing archival footage, verifying historical claims, and helping structure the narrative arc of a documentary film, showcasing my ability to handle complex historical data and translate it into a compelling visual medium.',
        learnings: 'Through this project, I gained extensive experience in historical fact-checking and archival research. Working on a documentary taught me how to weave disparate historical facts into a cohesive, engaging narrative.'
    },
    'communication-campaign': {
        title: 'Visual Storytelling',
        company: 'The Daily Star — Slow Reads',
        course: 'Digital Publishing',
        projectName: 'In-Depth Stories',
        projectTitle: 'Slow Reads Department Content Creation',
        projectDate: '2026',
        description: 'Produced in-depth stories and visual storytelling content for the Slow Reads department. Contributed to research, editing, digital publishing and newsroom-based storytelling.',
        justification: 'Working with the Slow Reads team allowed me to focus on long-form, immersive storytelling. I learned how to integrate text with visual elements to create engaging digital narratives, understanding the nuances of digital publishing and audience engagement.',
        learnings: 'This experience taught me the intricacies of digital publishing workflows. I learned to balance deep, slow-paced storytelling with the fast-paced demands of a modern newsroom.'
    },
    'emergency-communication': {
        title: 'Event Coordination',
        company: 'Trashion Show of ULAB',
        course: 'Project Management',
        projectName: 'University Fashion Show',
        projectTitle: 'Trashion Show at Shilpakala Academy',
        projectDate: '2024 - 2025',
        description: 'Co-organised a university fashion show at Shilpakala Academy, coordinating logistics, teams and promotional activities.',
        justification: 'This role was heavily focused on logistics, team management, and public relations. It involved coordinating with multiple stakeholders, managing event schedules, and handling promotional campaigns, demonstrating my ability to execute large-scale events successfully.',
        learnings: 'I developed strong project management and crisis-resolution skills. Coordinating an event of this scale taught me the importance of clear communication, delegation, and adaptive planning.'
    },
    'multiple-content': {
        title: 'Educational Innovation',
        company: 'Symposium 2025',
        course: 'Educational Technology',
        projectName: 'Conference Presentation',
        projectTitle: 'Kahoot as an Educational Engagement Tool',
        projectDate: '2025',
        description: 'Presented “Kahoot as an Educational Engagement Tool,” examining game-based learning and student engagement.',
        justification: 'This presentation explored the intersection of technology and education. It required researching game-based learning methodologies and presenting findings to an academic audience, highlighting my ability to synthesize complex information and present it clearly.',
        learnings: 'Presenting at a symposium refined my public speaking and academic presentation skills. I learned how to effectively communicate technical and pedagogical concepts to a diverse audience.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding pane
            const targetId = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(`tab-${targetId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });


    // Modal / Side Panel Logic (Only run if panel exists on the page)
    const panel = document.getElementById('project-panel');
    const overlay = document.getElementById('side-panel-overlay');
    const closeBtn = document.querySelector('.close-panel');
    const projectItems = document.querySelectorAll('.project-item');

    if (panel && overlay && closeBtn) {
        const openPanel = () => {
            panel.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closePanel = () => {
            panel.classList.remove('active');
            overlay.classList.remove('active');
            
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 500);
        };

        projectItems.forEach(item => {
            item.addEventListener('click', () => {
                const projectId = item.getAttribute('data-project');
                let data = projectData[projectId];

                // Fallback for placeholder items from the new grid
                if (!data && projectId === 'placeholder') {
                    const cardTitle = item.querySelector('.grid-title').innerText.replace('\n', ' ');
                    const cardMeta = item.querySelector('.grid-meta').innerText;
                    data = {
                        course: cardMeta,
                        projectName: 'Content in Development',
                        title: cardTitle,
                        projectTitle: 'Details Coming Soon',
                        projectDate: 'TBA',
                        description: 'Detailed description for this project will be uploaded soon. Please check back later.',
                        justification: 'Information regarding the justification and process of this project is currently being curated.',
                        learnings: 'The key learnings and outcomes from this coursework will be documented here.'
                    };
                }

                if (data) {
                    document.getElementById('panel-course').textContent = data.course;
                    document.getElementById('panel-project-name').textContent = data.projectName;
                    document.getElementById('panel-project-title-main').textContent = data.title;
                    document.getElementById('panel-project-title').textContent = data.projectTitle;
                    document.getElementById('panel-project-date').textContent = data.projectDate;
                    document.getElementById('panel-description').textContent = data.description;
                    document.getElementById('panel-justification').textContent = data.justification;
                    document.getElementById('panel-learnings').textContent = data.learnings;
                    
                    const docViewer = document.getElementById('panel-document');
                    if (docViewer) {
                        docViewer.src = 'assets/project-doc.pdf'; // Keep the placeholder CV for now
                    }

                    openPanel();
                }
            });
        });

        closeBtn.addEventListener('click', closePanel);
        overlay.addEventListener('click', closePanel);
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && panel.classList.contains('active')) {
                closePanel();
            }
        });
    }
});
