// Simple JavaScript for the Student Success Hub website

// Add smooth scrolling to same-page navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href && href.startsWith('#')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add animation to case studies on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.case-study').forEach(study => {
    study.style.opacity = '0';
    study.style.transform = 'translateY(20px)';
    study.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(study);
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

// Add a simple typing effect to the hero text
const heroText = document.querySelector('.hero p');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Modal functionality for case studies
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const caseStudyDetails = {
    maria: {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        title: 'Maria: From Struggle to Scholarship',
        text: 'Maria grew up in a challenging environment where access to quality education was limited. Despite facing financial hardships and family responsibilities, she maintained a strong academic record through sheer determination and effective study habits. Her breakthrough came when she applied for and received a full scholarship to study engineering at a prestigious university. Today, Maria is pursuing her dream career in renewable energy, giving back to her community by mentoring underprivileged students. Her story proves that with perseverance and the right support, any obstacle can be overcome.'
    },
    alex: {
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        title: 'Alex: Breaking Barriers',
        text: 'As a first-generation college student from a working-class family, Alex faced numerous barriers on his path to higher education. He worked multiple jobs while maintaining excellent grades and participating in extracurricular activities. His hard work paid off when he graduated top of his class with a degree in computer science. Now leading innovative tech projects at a Fortune 500 company, Alex is passionate about creating opportunities for underrepresented groups in STEM fields. He volunteers as a career counselor, helping other first-gen students navigate their educational journeys.'
    },
    sarah: {
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        title: 'Sarah: Empowering Dreams',
        text: 'Sarah\'s passion for science began in her high school biology class, but she faced skepticism from those around her who believed science wasn\'t a suitable career for women. Undeterred, she pursued advanced degrees in molecular biology and secured a research position at a leading laboratory. Her groundbreaking work in cancer research has led to several published papers and a patent for a novel diagnostic tool. Sarah now inspires young women through speaking engagements and mentorship programs, showing that gender should never limit one\'s aspirations in STEM fields.'
    },
    elon: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/440px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
        title: 'Elon Musk: Visionary Innovator',
        text: 'Born in South Africa, Elon Musk moved to Canada at 17 and later to the United States. He co-founded Zip2, which was acquired for $307 million, and then X.com, which became PayPal. Musk founded SpaceX in 2002 with the goal of reducing space transportation costs and enabling Mars colonization. He took over Tesla in 2004, transforming it from a struggling company into the world\'s most valuable automaker, accelerating the world\'s transition to sustainable energy. Musk also founded Neuralink to develop brain-machine interfaces and acquired Twitter (now X) to promote free speech. Despite numerous setbacks and criticisms, Musk\'s relentless innovation has pushed humanity toward a multi-planetary future.'
    },
    dangote: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aliko_Dangote_%28cropped%29.jpg/440px-Aliko_Dangote_%28cropped%29.jpg',
        title: 'Aliko Dangote: African Business Titan',
        text: 'Starting with a $3,000 loan from his uncle at age 21, Aliko Dangote began importing and selling cement in Nigeria. He recognized the potential in manufacturing and built the Dangote Group into Africa\'s largest conglomerate with interests in cement, sugar, salt, flour, pasta, and real estate. His cement plants in Nigeria, Ethiopia, Tanzania, and South Africa produce over 50% of West Africa\'s cement. Dangote has created over 30,000 direct jobs and millions of indirect jobs. He is a strong advocate for intra-African trade and has invested heavily in infrastructure development. Forbes estimates his net worth at over $10 billion, making him Africa\'s richest person.'
    },
    elumelu: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tony_Elumelu.jpg/440px-Tony_Elumelu.jpg',
        title: 'Tony Elumelu: Banking Pioneer',
        text: 'Tony Elumelu began his career at the International Merchant Bank in Nigeria and rose to become CEO of the United Bank for Africa (UBA) Group, transforming it into a pan-African banking powerhouse with operations in 20 African countries. Under his leadership, UBA became the first African bank to list on the Nigerian Stock Exchange. Elumelu coined the term "Africapitalism" - the private sector\'s commitment to Africa\'s development. He founded the Tony Elumelu Foundation, which has provided over $100 million in funding and mentorship to 15,000 African entrepreneurs. Elumelu serves on the boards of several international organizations and is a strong advocate for youth empowerment and economic transformation in Africa.'
    },
    soyinka: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Wole_Soyinka_2013.jpg/440px-Wole_Soyinka_2013.jpg',
        title: 'Wole Soyinka: Literary Giant',
        text: 'Akinwande Oluwole Babatunde Soyinka, known as Wole Soyinka, is Nigeria\'s first Nobel Laureate in Literature (1986) and the first African to receive the prize. Born in 1934 in Abeokuta, Nigeria, he studied at the University of Ibadan and the University of Leeds. Soyinka\'s works, including plays like "Death and the King\'s Horseman" and novels like "The Interpreters," explore themes of colonialism, corruption, and cultural identity. He was imprisoned for 22 months during the Nigerian Civil War for his anti-war activism. Soyinka has taught at universities worldwide and founded the Guerrilla Unit for the Liberation of Africa. His powerful voice against oppression and his commitment to freedom of expression continue to inspire writers and activists globally.'
    }
};

document.querySelectorAll('.case-study').forEach(study => {
    study.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const details = caseStudyDetails[id];
        if (details) {
            modalImage.src = details.image;
            modalTitle.textContent = details.title;
            modalText.textContent = details.text;
            modal.style.display = 'block';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});