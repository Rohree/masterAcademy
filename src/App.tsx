import SpotlightCard from './blocks/Components/SpotlightCard/SpotlightCard';
import Particles from "./blocks/Backgrounds/Particles/Particles";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BookNowButton from './components/BookNowButton';

function App() {  
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#00e5ff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>  

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Spotlight Cards */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 place-items-center">
          <SpotlightCard 
            className="md:w-96 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="p-6 text-lg">
              <h2 className="text-2xl font-bold mb-2">Struggling with your studies?</h2>
              <p className="mb-4">Masters Academy connects you with expert tutors in:</p>
              <ul className="list-none space-y-2">
                <li>✅ Mathematics</li>
                <li>✅ Physical Science</li>
                <li>✅ Life Sciences (Biology)</li>
                <li>✅ Accounting</li>
                <li>✅ Natural Science</li>
              </ul>
            </div>
          </SpotlightCard>

          <SpotlightCard 
            className="md:w-96 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="p-6 text-lg">
              <h2 className="text-2xl font-bold mb-2">BOOK A TUTOR NOW :</h2>
              <ul className="list-none space-y-2 mb-10">
                <li>Top-performing, vetted tutors</li>
                <li>Experts in Grades 8–12 subjects</li>
                <li>Passionate about teaching and mentorship</li>
                <li>Focused on real results and progress</li>
              </ul>
              <BookNowButton />
            </div>
          </SpotlightCard>
          <SpotlightCard 
            className="md:w-96 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="p-6 text-lg">
              <h2 className="text-2xl font-bold mb-2">HOW IT WORKS</h2>
              <ul className="list-none space-y-2 mb-10">
                <li>Click on "Book a Now" button</li>
                <li>Specify your information and needs</li>
                <li>We’ll match you with a tutor.</li>
                <li>You learn, grow, and succeed.</li>
              </ul>
              
              <BookNowButton />
             
            </div>
          </SpotlightCard>
            <SpotlightCard 
            className="md:w-96 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="p-6 text-lg">
              <h2 className="text-2xl font-bold mb-2">WHY US</h2>
              <ul className="list-none space-y-2 mb-10">
                <li>Elite, subject-matter experts</li>
                <li>Tailored one-on-one tutoring</li>
                <li>Proven results with measurable progress</li>
                <li>Premium service with a personal touch</li>
              </ul>
              
              <BookNowButton />
             
            </div>
          </SpotlightCard>
        </div>  

        <Footer />
      </div>
    </div>
  );
}

export default App;
