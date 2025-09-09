// Page Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update active navigation link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            const pageToNavMap = {
                'home': 0,
                'about': 1,
                'features': 2,
                'categories': 3,
                'leaderboard': 4,
                'contact': 5
            };
            
            if (pageToNavMap[pageId] !== undefined) {
                navLinks[pageToNavMap[pageId]].classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Leaderboard Tabs
        function showLeaderboardTab(tab) {
            // Update active tab
            const tabs = document.querySelectorAll('.leaderboard-tab');
            tabs.forEach(t => {
                t.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // In a real application, this would load different data
            // For demo purposes, we'll just show a message
            const leaderboardList = document.getElementById('leaderboard-list');
            leaderboardList.innerHTML = `<li style="text-align: center; padding: 20px;">Loading ${tab} leaderboard...</li>`;
            
            // Simulate loading delay
            setTimeout(() => {
                leaderboardList.innerHTML = `
                    <li class="leaderboard-item">
                        <div class="leaderboard-rank">1</div>
                        <div class="leaderboard-avatar">JD</div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">John Doe</div>
                            <div class="leaderboard-score">9,850 points</div>
                        </div>
                    </li>
                    <li class="leaderboard-item">
                        <div class="leaderboard-rank">2</div>
                        <div class="leaderboard-avatar">AS</div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">Alice Smith</div>
                            <div class="leaderboard-score">9,720 points</div>
                        </div>
                    </li>
                    <li class="leaderboard-item">
                        <div class="leaderboard-rank">3</div>
                        <div class="leaderboard-avatar">BJ</div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">Bob Johnson</div>
                            <div class="leaderboard-score">9,650 points</div>
                        </div>
                    </li>
                    <li class="leaderboard-item">
                        <div class="leaderboard-rank">4</div>
                        <div class="leaderboard-avatar">EW</div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">Emma Wilson</div>
                            <div class="leaderboard-score">9,580 points</div>
                        </div>
                    </li>
                    <li class="leaderboard-item">
                        <div class="leaderboard-rank">5</div>
                        <div class="leaderboard-avatar">MB</div>
                        <div class="leaderboard-info">
                            <div class="leaderboard-name">Michael Brown</div>
                            <div class="leaderboard-score">9,520 points</div>
                        </div>
                    </li>
                `;
            }, 500);
        }
        
        // FAQ Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Toggle active class
                    item.classList.toggle('active');
                });
            });
            
            // Contact Form
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // In a real application, this would send the data to a server
                    // For demo purposes, we'll just show a success message
                    contactForm.innerHTML = `
                        <div style="text-align: center; padding: 20px;">
                            <i class="fas fa-check-circle" style="font-size: 60px; color: #9c27b0; margin-bottom: 20px;"></i>
                            <h3 style="margin-bottom: 15px;">Message Sent Successfully!</h3>
                            <p>Thank you, ${name}! We've received your message and will get back to you at ${email} as soon as possible.</p>
                        </div>
                    `;
                });
            }
            
            // Animate feature cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Initially hide cards for animation
            document.querySelectorAll('.feature-card, .category-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });

            // Button click effects
            document.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    // Create ripple effect
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple');
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        });
        
        // Random Quiz Function
        function showRandomQuiz() {
            alert('Starting a random quiz! In a real application, this would take you to a randomly selected quiz.');
        }