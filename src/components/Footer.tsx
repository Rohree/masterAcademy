import CurvedLoop from "../blocks/TextAnimations/CurvedLoop/CurvedLoop";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex items-center justify-center bg-transparent">
      <CurvedLoop 
        marqueeText="✦ Master ✦ Academy ✦ Master ✦ Academy ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={false}
        className=""
      />
    </footer>
  );
}
