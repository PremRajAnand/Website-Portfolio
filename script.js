document.addEventListener('DOMContentLoaded', () => {

    // AOS Fallback using vanilla Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'bg-white/90');
            navbar.classList.remove('bg-white/80', 'shadow-sm');
        } else {
            navbar.classList.add('bg-white/80', 'shadow-sm');
            navbar.classList.remove('shadow-md', 'bg-white/90');
        }
    });

    // Generate Testimonials (30 Bihar-centric Feedbacks)
    const generateTestimonials = () => {
        const trackContainer = document.getElementById('testimonial-track');
        if(!trackContainer) return;

        const testimonialsData = [
            { name: "Rahul Singh", location: "MLA PA, Patna", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", review: "Bhaiya ka chunav pura digital FeedManthan ne sambhala, bahut badiya result raha!" },
            { name: "Amit Yadav", location: "MP Supporter, Gaya", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", review: "Drone shoot aur reels ekdum lallantop tha. Public connect ground level pe badh gaya." },
            { name: "Priya Sharma", location: "Digital Head, Muzaffarpur", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", review: "Prem and his team are highly professional. WhatsApp broadcasting se kaafi madad mili." },
            { name: "Vikas Paswan", location: "MLC PA, Bhagalpur", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", review: "Opponent ka social media ekdum fail kar diya hum logo ne inki strategy se." },
            { name: "Suresh Kumar", location: "Candidate, Arrah", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", review: "Best election management agency! Ekdam time-to-time poster aur video update karte the." },
            { name: "Anjali Mishra", location: "Media Cell, Purnia", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", review: "Akhilesh ji ka video editing is superb. Our candidate's speeches looked cinematic." },
            { name: "Manish Tiwari", location: "Zila Parishad, Darbhanga", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop", review: "Highly recommend their War Mode package. A to Z pura digital footprint badiya bana diye." },
            { name: "Rajeev Ranjan", location: "MP PA, Chhapra", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", review: "Graphic designing ek number hai! Pura zila mein hamara poster viral ho gaya." },
            { name: "Kavita Devi", location: "Mukhiya, Katihar", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", review: "We won our Panchayat election mainly because of the digital wave created by FeedManthan." },
            { name: "Nitin Choudhary", location: "MLA Cell, Munger", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", review: "Facebook aur Insta ads ke wajah se sahyi target audience tak hamari baat pahuchi." },
            { name: "Sanjay Gupta", location: "Youth Leader, Saharsa", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", review: "Rojaana WhatsApp group pe messages time par push karte the. Team management solid hai." },
            { name: "Pooja Singh", location: "Maha Mantri, Hajipur", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", review: "Inki Influencer promotion strategy ne hamari bahot help ki election mein." },
            { name: "Ravi Kishan", location: "Supporter, Bettiah", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", review: "Rally ka drone coverage dekh kar public impressed ho gayi thi. Bahut shandaar." },
            { name: "Abhishek Mandal", location: "IT Cell, Sasaram", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", review: "Inka meme aur troll pages wala campaign bahot mast kaam kiya dushmano ke khilaaf." },
            { name: "Neha Verma", location: "Zila Prabhari, Samastipur", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", review: "Mera political profile ekdum professionally maintain kiya. Thanks FeedManthan!" },
            { name: "Mukesh Sahani", location: "Panchayat Samiti, Motihari", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop", review: "Budget-friendly aur 24x7 support. Election time pe best companion for digital war." },
            { name: "Deepak Kumar", location: "MP Staff, Nawada", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", review: "Team is so active! Rat ko 2 baje bhi urgengt poster bana ke update kiya." },
            { name: "Sunita Roy", location: "Ward Councilor, Buxar", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", review: "I was hesitant about digital marketing, but FeedManthan ne pura scenario positive kar diya." },
            { name: "Arvind Thakur", location: "Vidhayak Pratinidhi, Sitamarhi", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", review: "Data mapping and booth level targeting strategy was absolutely mind-blowing." },
            { name: "Gaurav Pandey", location: "Election Incharge, Kishanganj", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", review: "Jeet ke baad ka digital perception set karnemein bhi FeedManthan ka bada haath tha." },
            { name: "Ashok Yadav", location: "MLA PA, Madhubani", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", review: "Feedmanthan ki daily reel strategy ekdum hit gayi gaon dehat mein." },
            { name: "Jitendra Singh", location: "Party Worker, Jahanabad", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop", review: "Unmatched social media presence. Hamare candidate brand lagne lage they." },
            { name: "Pooja Dubey", location: "Candidate PR, Bhabua", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", review: "Color scheme aur typography har design me premium lagti hai inki!" },
            { name: "Rohit Rai", location: "MLC PA, Begusarai", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", review: "Ek dum jabardast service, FB page handling toh inke jaisa koi nahi karta." },
            { name: "Kundan Thakur", location: "Zila Parishad Adhyaksh", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", review: "Pura team ne din raat ek kar diya humare election campaigning me." },
            { name: "Swati Ojha", location: "Supporter, Rohtas", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", review: "Very satisfied with their daily content calendar! Nothing left to chance." },
            { name: "Vivek Choudhary", location: "MP Media Head", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", review: "Ground events ko digital footprint mein efficiently map kar diya." },
            { name: "Nitesh Paswan", location: "Mukhiya, Vaishali", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", review: "Election jitne mein WhatsApp group broadcasting ka bahut bada role raha." },
            { name: "Gopal Sharma", location: "Political Advisor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", review: "Highly recommended for tight fights! Inki troll army sabko pachhad degi." },
            { name: "Sonu Raj", location: "Vidhayak PA, Khagaria", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", review: "Drone aur cinematography best quality ka dete hain, fully professional!" }
        ];

        let htmlContent = '';
        
        testimonialsData.forEach((item) => {
            const stars = '⭐'.repeat(5);
            htmlContent += `
                <div class="testimonial-card bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex-shrink-0 mx-3">
                    <div class="flex items-center gap-4 mb-4">
                        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover shadow border-2 border-white">
                        <div>
                            <h4 class="font-bold text-slate-800 text-sm">${item.name}</h4>
                            <p class="text-xs text-secondary font-bold">${item.location}</p>
                        </div>
                    </div>
                    <p class="text-xs text-yellow-500 mb-2">${stars}</p>
                    <p class="text-sm text-slate-600 italic leading-relaxed">"${item.review}"</p>
                </div>
            `;
        });

        // Duplicate content to create a seamless infinite scroll loop
        trackContainer.innerHTML = htmlContent + htmlContent;
    };

    generateTestimonials();
});
