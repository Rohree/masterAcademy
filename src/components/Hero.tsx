import CurvedLoop from "../blocks/TextAnimations/CurvedLoop/CurvedLoop";
export default function Hero() {

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] py-4 px-4 text-center mt-36 md:mt-8">
      <CurvedLoop 
        marqueeText="Master Academy ✦" 
        speed={3}
        curveAmount={100}
        direction="right"
        interactive={false}
        className=""
        />
      <p className="mt-10">
       EXCELLENCE IN EVERY SESSION
      </p>
       <p className="mt-10 md:w-180">
       We serve learners from Grade 8 to 12, offering personalized 1-on-1 tutoring and interactive group sessions to help you boost marks, build confidence, and master your subjects.
      </p>
    </section>
  )
}
