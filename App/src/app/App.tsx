import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import imgPlaceholder from '../imports/Group1/0707e6b2022462187b7b2dab43ed95bab6b24a66.png';
import imgDemo from '../imports/demo.png';
import imgFinal from '../imports/final.png';
import imgPlanning from '../imports/planning.png';
import imgTitleBg from '../imports/titlebg.png';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="sticky top-0 bg-[#1a1a1a] border-b border-[#8b0000] z-50 shadow-lg shadow-[#8b0000]/20">
        <div className="flex justify-between items-center px-8 py-8">
          <h2 className="font-bold text-xl text-[#dc143c]">Rubber Duckies</h2>
          <nav className="flex gap-2">
            {['gameplay', 'mechanics', 'development', 'team'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-4 py-2 rounded-lg transition-all text-[#e0e0e0] hover:bg-[#8b0000] hover:text-white hover:shadow-lg hover:shadow-[#8b0000]/50"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-40 px-16 flex items-center justify-center border-b border-[#8b0000]/30 overflow-hidden">
        <img
          src={imgTitleBg}
          alt="Title background"
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative font-bold text-[72px] text-[#dc143c] tracking-[-2.16px] leading-[1.2] drop-shadow-[0_0_30px_rgba(220,20,60,0.5)] z-10">
          The Executioner
        </h1>
      </section>

      {/* Gameplay Trailer */}
      <section id="gameplay" className="bg-[#0a0a0a] py-16 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden relative border-2 border-[#8b0000]/50 shadow-2xl shadow-[#8b0000]/30">
            <img
              src={imgPlaceholder}
              alt="Gameplay trailer placeholder"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#8b0000]/80 flex items-center justify-center mb-4 mx-auto shadow-lg shadow-[#8b0000]/50 hover:bg-[#dc143c] transition-all cursor-pointer">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-[#e0e0e0] text-xl font-semibold">Watch Gameplay Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-[#1a1a1a] py-16 px-16 border-y border-[#8b0000]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-[#d0d0d0] mb-6">
            Decide between blindly following orders from the King as his Executioner, or disobeying his commands and free the criminals from 
            their fate. Your decision will affect the ending of the story and there are multiple endings to discover. 

          </p>
        </div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="bg-[#0a0a0a] py-16 px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#dc143c] mb-8 text-center drop-shadow-[0_0_15px_rgba(220,20,60,0.4)]">Game Mechanics</h2>
          <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
            <Accordion.Item value="combat" className="bg-[#1a1a1a] rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-4 text-left group hover:bg-[#2a2a2a] transition-colors">
                  <span className="font-semibold text-[#e0e0e0]">Map Exploration</span>
                  <ChevronDown className="w-5 h-5 text-[#8b0000] transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 text-[#c0c0c0]">
                There are various buildings across the map are important to the story and gameplay. Find out their purpose and interact with them to progress through the game.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="choices" className="bg-[#1a1a1a] rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-4 text-left group hover:bg-[#2a2a2a] transition-colors">
                  <span className="font-semibold text-[#e0e0e0]">Moral Choice System</span>
                  <ChevronDown className="w-5 h-5 text-[#8b0000] transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 text-[#c0c0c0]">
                Your decisions matter. Follow the King and his tyranny or disobey him and set the innocent free.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="progression" className="bg-[#1a1a1a] rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between w-full px-4 py-4 text-left group hover:bg-[#2a2a2a] transition-colors">
                  <span className="font-semibold text-[#e0e0e0]">Interactive NPCs</span>
                  <ChevronDown className="w-5 h-5 text-[#8b0000] transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 text-[#c0c0c0]">
                Some NPCs have dialogues with AI voices. Criminals can follow you to get executed or you can spare them instead.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      {/* Development Timeline */}
      <section id="development" className="bg-[#1a1a1a] py-16 border-y border-[#8b0000]/20">
        <div className="max-w-6xl mx-auto px-16">
          <h2 className="text-4xl font-bold text-[#dc143c] mb-8 text-center drop-shadow-[0_0_15px_rgba(220,20,60,0.4)]">Project Milestones</h2>

          {/* Planning Phase */}
          <div className="mb-12 bg-[#0a0a0a] p-16 rounded-lg border border-[#8b0000]/50 shadow-xl shadow-[#8b0000]/20">
            <h3 className="text-2xl font-bold text-[#dc143c] mb-4">Planning Phase</h3>
            <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden relative mb-4 border border-[#8b0000]/30">
              <img
                src={imgPlanning}
                alt="Planning phase"
                className="w-full h-full object-fill"
              />
            </div>
            <p className="text-[#c0c0c0]">
              Our third game idea before it got scrapped for scope creep. We fell back to our second idea which was simpler and more manageable.
            </p>
          </div>

          {/* Demo Phase */}
          <div className="mb-12 bg-[#0a0a0a] p-16 rounded-lg border border-[#8b0000]/50 shadow-xl shadow-[#8b0000]/20">
            <h3 className="text-2xl font-bold text-[#dc143c] mb-4">Demo Release</h3>
            <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden relative mb-4 border border-[#8b0000]/30">
              <img
                src={imgDemo}
                alt="Demo phase"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#c0c0c0]">
              Castle village map with basic NPCs and a working main character. Day/Night cycle was implemented but not fully utilized in the demo.
            </p>
          </div>

          {/* Final Release */}
          <div className="bg-[#0a0a0a] p-16 rounded-lg border border-[#8b0000]/50 shadow-xl shadow-[#8b0000]/20">
            <h3 className="text-2xl font-bold text-[#dc143c] mb-4">Final Release</h3>
            <div className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden relative mb-4 border border-[#8b0000]/30">
              <img
                src={imgFinal}
                alt="Final release"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#c0c0c0]">
              Most interactions and plans made it to the final release, but there are still some features missing that we wanted to implement but ran out of time.
            </p>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="bg-[#0a0a0a] py-16 px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#dc143c] mb-8 text-center drop-shadow-[0_0_15px_rgba(220,20,60,0.4)]">Future Development</h2>
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10 hover:border-[#dc143c]/70 transition-all">
              <h3 className="text-xl font-semibold text-[#dc143c] mb-3">Map Interactions and Details</h3>
              <p className="text-[#c0c0c0]">
                New structures and interactions to make the environment more immersive and engaging. Next map expansion would be the castle interior with an updated dungeon to store the criminals. 
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10 hover:border-[#dc143c]/70 transition-all">
              <h3 className="text-xl font-semibold text-[#dc143c] mb-3">Custom NPC designs</h3>
              <p className="text-[#c0c0c0]">
                Unique character designs for non-player characters to enhance the storytelling and immersion. Improve animations and scripts for existing NPCs and Criminals. New characters will be added in future updates as well.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10 hover:border-[#dc143c]/70 transition-all">
              <h3 className="text-xl font-semibold text-[#dc143c] mb-3">Animated Execution Scenes</h3>
              <p className="text-[#c0c0c0]">
                Increase the variety of execution scenes with unique animations and visual effects. Each criminal will have their own unique execution method to increase the weight of the player's choice.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#8b0000]/50 shadow-lg shadow-[#8b0000]/10 hover:border-[#dc143c]/70 transition-all">
              <h3 className="text-xl font-semibold text-[#dc143c] mb-3">Criminals and Story</h3>
              <p className="text-[#c0c0c0]">
                The fate of each criminal will impact the story and the world around you. Your choices will shape the narrative and determine the outcome of the game. Different endings depending which criminals you execute or spare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-[#1a1a1a] py-16 px-16 border-t border-[#8b0000]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#dc143c] mb-8 text-center drop-shadow-[0_0_15px_rgba(220,20,60,0.4)]">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center bg-[#0a0a0a] p-6 rounded-lg border border-[#8b0000]/30 shadow-lg shadow-[#8b0000]/10">
              <h3 className="font-semibold text-xl text-[#dc143c] mb-2">Chase Tom</h3>
            </div>
            <div className="text-center bg-[#0a0a0a] p-6 rounded-lg border border-[#8b0000]/30 shadow-lg shadow-[#8b0000]/10">
              <h3 className="font-semibold text-xl text-[#dc143c] mb-2">Koalani Okada</h3>
            </div>
            <div className="text-center bg-[#0a0a0a] p-6 rounded-lg border border-[#8b0000]/30 shadow-lg shadow-[#8b0000]/10">
              <h3 className="font-semibold text-xl text-[#dc143c] mb-2">Dylan Gomez</h3>
            </div>
            <div className="text-center bg-[#0a0a0a] p-6 rounded-lg border border-[#8b0000]/30 shadow-lg shadow-[#8b0000]/10">
              <h3 className="font-semibold text-xl text-[#dc143c] mb-2">Dat Truong</h3>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
