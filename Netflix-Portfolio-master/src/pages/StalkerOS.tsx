import React, { useState, useEffect, useRef } from 'react';
import { FaFolder, FaTerminal, FaWifi, FaBolt } from 'react-icons/fa';
import './StalkerOS.css';

// 🤖 Observation Messages from Mainframe
const SYSTEM_MESSAGES = [
  "ANALYZING VISITOR...",
  "Behavior recognized.",
  "Observation active.",
  "Tracking behavioral patterns...",
  "User emotionally engaged.",
  "ACCESSING PRIVATE FILES...",
  "This profile remembers visitors.",
  "Interesting.",
  "WHY ARE YOU STILL HERE?",
  "Attention spike detected."
];

const FAKE_FOLDERS = [
  "brain_rot.zip",
  "unsent_ideas",
  "internet_obsessions",
  "rabbit_hole.exe",
  "deleted_thoughts",
  "do_not_open",
  "emotion_engine",
  "late_night_logs",
  "verified_badges",
  "C:/Users/main/trash"
];

const StalkerOS: React.FC = () => {
  const [aiObserving, setAiObserving] = useState(true); // Initial Scan Overlay
  const [terminalLogs, setTerminalLogs] = useState<string[]>(["Core initialization: OK"]);
  const lastActiveRef = useRef<number>(Date.now());
  const logContainerRef = useRef<HTMLDivElement>(null);

  // 1. Initial AI Identification Scan (The Cinematic Hook)
  useEffect(() => {
    // Show AI scanning for 3.5 seconds
    const scanTimer = setTimeout(() => {
      setAiObserving(false);
      // Initiate first observation
      addSystemLog("Visitor ID: UNKNOWN. Beginning deep lore observation...");
    }, 3500);

    return () => clearTimeout(scanTimer);
  }, []);

  // 2. Continuous Behavior Observation (Self-Aware Logic)
  useEffect(() => {
    if (aiObserving) return;

    const desktopElement = document.querySelector('.desktop-environment');
    if (!desktopElement) return;

    const logBehavior = (message: string) => {
      addSystemLog(`OS NOTICE: ${message}`);
    };

    // --- Observer 1: Interaction Spikes (Fast Scroll) ---
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollSpike = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (Math.abs(desktopElement.scrollTop - lastActiveRef.current) > 400) {
           logBehavior("Interaction spike detected. Accelerated information seeking.");
        }
        lastActiveRef.current = desktopElement.scrollTop;
      }, 100);
    };

    // --- Observer 2: Hover Observations ---
    const handleFolderHover = (e: Event) => {
      const folderName = (e.currentTarget as HTMLElement).dataset.name;
      addSystemLog(`Observation: Visitor focused on specific memory module: ${folderName}`);
    };

    // --- Observer 3: Idle Observations ---
    const idleCheck = setInterval(() => {
      const idleTime = (Date.now() - lastActiveRef.current) / 1000;
      if (idleTime > 12 && idleTime < 13) {
         logBehavior(`Observation: Subject has paused interaction on this section for 12 seconds.`);
      } else if (idleTime > 25 && idleTime < 26) {
        logBehavior("Attention spike drop. Core matrix stabilized.");
      }
    }, 1000);


    // Activate the behavioral observation grid
    desktopElement.addEventListener('scroll', handleScrollSpike);
    const folders = document.querySelectorAll('.fake-folder');
    folders.forEach(folder => folder.addEventListener('mouseenter', handleFolderHover));

    // Monitor for user activity
    const updateActivity = () => { lastActiveRef.current = Date.now(); };
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);

    return () => {
      // Shutdown observation matrix
      desktopElement.removeEventListener('scroll', handleScrollSpike);
      folders.forEach(folder => folder.removeEventListener('mouseenter', handleFolderHover));
      clearInterval(idleCheck);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
    };
  }, [aiObserving]);

  // 3. Auto-scroll terminal logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const addSystemLog = (message: string) => {
    setTerminalLogs(prev => [...prev, message]);
  };

  // Add random mainframe thought periodically
  useEffect(() => {
     if (aiObserving) return;
     const randomMessageInterval = setInterval(() => {
        const message = SYSTEM_MESSAGES[Math.floor(Math.random() * SYSTEM_MESSAGES.length)];
        addSystemLog(`MAINFRAME:> ${message}`);
     }, 10000 + Math.random() * 5000); // Randomly every 10-15 seconds

     return () => clearInterval(randomMessageInterval);
  }, [aiObserving]);


  return (
    <div className="stalker-os-root">
      {/* 🎬 CINEMATIC AI SCAN INITIALIZATION */}
      {aiObserving && (
        <div className="ai-scan-overlay">
          <div className="scan-matrix-bg" />
          <div className="scanner-beam" />
          <p className="scan-text">IDENTIFYING VISITOR...</p>
        </div>
      )}

      {/* 💻 THE MAIN STALKER OS INTERFACE */}
      <div className="desktop-environment">
        
        {/* Hacker Dashboard Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #8b0000' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textShadow: '0 0 10px #e50914'}}>
                <FaBolt/> <h2 style={{ fontSize: '1.1rem', color: '#e50914' }}>Observation Matrix [LISIKA_V_03]</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8b0000', fontSize: '0.9rem'}}>
                <span>STALKER MODE</span> <FaWifi/>
            </div>
        </div>

        {/* 📚 THE "DEEP LORE" FOLDER GRID */}
        <div className="folder-grid">
          {FAKE_FOLDERS.map((folder, index) => (
            <div key={index} className="fake-folder" data-name={folder} style={{ animationDelay: `${index * 0.05}s`, animationName: 'glitchFade', animationDuration: '0.5s', animationTimingFunction: 'ease' }}>
              <FaFolder className="folder-icon" />
              <p className="folder-name">{folder}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🕵️ FLOATING OBSERVATION TERMINAL */}
      <div className="terminal-observation-window">
        <div className="terminal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaTerminal style={{ fontSize: '0.7rem' }} /> Mainframe_Logs.out
          </div>
          <div className="controls">
            <span></span>
            <span></span>
            <span style={{ backgroundColor: '#e50914' }}></span> {/* Red close button */}
          </div>
        </div>
        <div className="terminal-content" ref={logContainerRef}>
          {terminalLogs.map((log, index) => (
            <div key={index} className="terminal-line">
              <span className="terminal-prompt">&gt;</span>
              <span className="terminal-text">{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StalkerOS;