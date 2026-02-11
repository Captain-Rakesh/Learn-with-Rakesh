
import React from 'react';

interface Props {
  classId: number;
  chapterName: string;
  onBack: () => void;
}

const LessonView: React.FC<Props> = ({ classId, chapterName, onBack }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-400 hover:text-white transition-colors mb-8 group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to Classes
      </button>

      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
        <header className="mb-12">
          <div className="inline-block px-4 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
            Class {classId} • Computer Science
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">{chapterName}</h1>
        </header>

        {/* Lesson Explanation Section */}
        <section className="prose prose-invert max-w-none space-y-8 mb-16">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">📝</span> Lesson Explanation
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Imagine you want to make a cup of tea. You follow steps: boil water, add tea leaves, add sugar, and pour milk. 
                In Computer Science, this step-by-step plan to solve any problem is called an <strong>Algorithm</strong>.
              </p>
              <p>
                A <strong>Flowchart</strong> is simply a drawing or a "map" of your algorithm. We use different shapes like boxes and arrows to show exactly how the information moves from the start to the finish. 
                It helps us see the logic clearly before we start coding!
              </p>
            </div>
          </div>
        </section>

        {/* Exercise Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
            📘 Exercise – Let Us Exercise
          </h2>

          {/* Question 1: Multiple Choice */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-indigo-300">1. Select the correct option.</h3>
            <div className="grid gap-6">
              {[
                {
                  q: "(a) What is the purpose of an algorithm?",
                  options: ["i. to provide a logical and structured way of solving a problem", "ii. to make the problem more complicated", "iii. to find a temporary solution for a problem", "iv. to jumble the tasks of a problem"],
                  ans: "i. to provide a logical and structured way of solving a problem",
                  exp: "An algorithm acts like a recipe; it organizes steps in the right order so we don't get confused while solving a problem."
                },
                {
                  q: "(b) What is the significance of symbols in a flowchart?",
                  options: ["i. they make the flowchart more visually appealing", "ii. they help in organizing the steps in an algorithm", "iii. they help in creating a more complex algorithm", "iv. all of these"],
                  ans: "ii. they help in organizing the steps in an algorithm",
                  exp: "Each symbol (like an oval or a rectangle) has a special meaning that tells us if we are starting, doing a task, or making a choice."
                },
                {
                  q: "(c) What happens if a condition in a selection is true?",
                  options: ["i. One set of statements is executed", "ii. Two sets of statements is executed", "iii. No statements are executed", "iv. All statements are executed"],
                  ans: "i. One set of statements is executed",
                  exp: "Selection is like a fork in the road. If the condition is 'True', the computer follows that specific path only."
                },
                {
                  q: "(d) Why is a loop used in an algorithm or flowchart?",
                  options: ["i. to write out the same instruction many times", "ii. to avoid repetition of instructions", "iii. to execute instructions randomly", "iv. to execute all instructions in a program"],
                  ans: "i. to write out the same instruction many times",
                  exp: "A loop tells the computer to repeat an action over and over until a task is finished, so we don't have to keep writing the same command."
                },
                {
                  q: "(e) Which flowchart symbol connects the various shapes to show the flow of the process in a flowchart?",
                  options: ["i. Connector", "ii. Decision box", "iii. Flowline", "iv. Start"],
                  ans: "iii. Flowline",
                  exp: "Flowlines are the arrows that point the way, showing the computer exactly which step to take next."
                }
              ].map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <p className="mb-4 text-slate-100 font-medium">{item.q}</p>
                  <div className="space-y-2 mb-6 ml-4">
                    {item.options.map((opt, i) => (
                      <p key={i} className={`text-sm ${item.ans === opt ? 'text-indigo-400 font-medium' : 'text-slate-400'}`}>{opt}</p>
                    ))}
                  </div>
                  <div className="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20">
                    <p className="text-indigo-300 font-bold mb-1">Answer: {item.ans}</p>
                    <p className="text-xs text-slate-400"><strong>Explanation:</strong> {item.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Question 2: Flowchart Symbols */}
          <div className="space-y-6 pt-10">
            <h3 className="text-xl font-bold text-indigo-300">2. Draw the correct symbol that should be used to represent the following in a flowchart.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { task: "a. Print the sum of five numbers.", ans: "Process Symbol (Rectangle)", icon: "▭" },
                { task: "b. Accept the values of two numbers from the user.", ans: "Input/Output Symbol (Parallelogram)", icon: "▱" },
                { task: "c. Compare two numbers.", ans: "Decision Symbol (Diamond)", icon: "♢" },
                { task: "d. Calculate the product of three numbers.", ans: "Process Symbol (Rectangle)", icon: "▭" },
                { task: "e. Display the result of a multiplication.", ans: "Input/Output Symbol (Parallelogram)", icon: "▱" }
              ].map((item, index) => (
                <div key={index} className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-500/20 rounded-xl text-2xl text-indigo-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{item.task}</p>
                    <p className="text-xs font-bold text-indigo-400">{item.ans}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Question 3: Long Answers */}
          <div className="space-y-8 pt-10">
            <h3 className="text-xl font-bold text-indigo-300">3. Answer the following.</h3>
            
            {/* 3a: Difference Table */}
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="mb-4 text-slate-100 font-medium">a. Differentiate between an algorithm and a flowchart.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-indigo-300">
                      <th className="py-3 px-4">Algorithm</th>
                      <th className="py-3 px-4">Flowchart</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">It is a step-by-step written procedure to solve a problem.</td>
                      <td className="py-3 px-4">It is a diagrammatic representation of an algorithm.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">It is written using simple English statements.</td>
                      <td className="py-3 px-4">It uses different symbols to represent steps.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">It is easier to write.</td>
                      <td className="py-3 px-4">It is easier to understand visually.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3b: Rules */}
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="mb-4 text-slate-100 font-medium">b. What rules should you follow while writing an algorithm?</p>
              <ul className="space-y-2 text-sm text-slate-300 list-disc ml-5">
                <li>Write the steps in a proper sequence.</li>
                <li>Use simple and clear language.</li>
                <li>Avoid unnecessary steps.</li>
                <li>Each step should be precise and meaningful.</li>
                <li>The algorithm should start with "Start" and end with "Stop".</li>
              </ul>
            </div>

            {/* 3c: Loops */}
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="mb-4 text-slate-100 font-medium">c. Explain how loops are represented in a flowchart with an example.</p>
              <div className="space-y-3 text-sm text-slate-300">
                <p>• A loop in a flowchart is shown using a <strong>decision symbol (diamond shape)</strong>.</p>
                <p>• If the condition is true, the flowline goes back to repeat the steps.</p>
                <p>• If the condition is false, the process moves forward.</p>
                <div className="bg-indigo-500/10 p-4 rounded-xl mt-4 border border-indigo-500/20">
                  <p className="font-bold text-indigo-300 mb-2">Example: Printing numbers from 1 to 5</p>
                  <p className="text-xs">The flowchart will check whether the number is less than or equal to 5. If yes, it prints the number and increases it by 1. If no, it stops.</p>
                </div>
              </div>
            </div>

            {/* 3d: Algorithm Square/Cube */}
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="mb-4 text-slate-100 font-medium">d. Write an algorithm to calculate and display the square and cube of a positive number entered by the user.</p>
              <div className="bg-slate-900/50 p-4 rounded-xl font-mono text-sm text-cyan-300">
                1. Start<br/>
                2. Input number N<br/>
                3. Square = N × N<br/>
                4. Cube = N × N × N<br/>
                5. Display Square and Cube<br/>
                6. Stop
              </div>
            </div>

            {/* 3e: Incomplete Flowchart */}
            <div className="glass p-6 rounded-2xl border border-white/5">
              <p className="mb-4 text-slate-100 font-medium">e. Given below is an incomplete flowchart... Fill in the shapes indicated by (A), (B), (C) and (D).</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "(A)", text: "Display \"Single Digit Number\"" },
                  { label: "(B)", text: "Is N < 100?" },
                  { label: "(C)", text: "Display \"Double Digit Number\"" },
                  { label: "(D)", text: "Stop" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="font-bold text-indigo-400">{item.label}</span>
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonView;
