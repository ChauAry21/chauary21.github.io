import React, {useState, useEffect, useRef} from "react";
import {executeCommand} from "./Commands";
import "./Terminal.css";

function Terminal() {
    const initialHelpOutput = executeCommand('help');

    const welcomeBanner = `
    <div class="welcome-banner">
      <pre class="ascii-header">╔══════════════════════════════════════════════════════════╗
║         ARYAN CHAUHAN  ·  Software Engineer              ║
║     Backend  ·  Automation  ·  Security  ·  AI/ML        ║
╚══════════════════════════════════════════════════════════╝</pre>
      <p style="margin: 10px 0 4px;">BS Computer Science (CWU 2025) · AI Engineering @ Flatiron School</p>
      <p style="margin: 4px 0;">Type <span class="cmd">projects</span> to see my work &nbsp;|&nbsp; Type <span class="cmd">resume</span> to download my resume</p>
    </div>
  `;

    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        {type: "output", content: welcomeBanner},
        {type: "output", content: initialHelpOutput},
        {type: "output", content: ""},
    ]);

    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIdx, setHistoryIdx] = useState(-1);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    useEffect(() => {
            if (terminalRef.current) {
                terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }
        },
        [history]);

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        const output = executeCommand(input.trim().toLowerCase());

        if (output === 'CLEAR_TERMINAL') {
            setHistory([
                {type: "output", content: welcomeBanner},
                {type: "output", content: initialHelpOutput},
                {type: "output", content: ""},
            ]);
            setInput("");
            return;
        }

        const historyNew = [
            ...history,
            {type: "command", content: input},
            {type: "output", content: output}
        ];

        setHistory(historyNew);
        setCommandHistory([...commandHistory, input]);
        setHistoryIdx(-1);
        setInput("");
    };

    const keyDownHandler = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);

                setHistoryIdx(newIdx);
                setInput(commandHistory[newIdx]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIdx !== -1) {
                const newIdx = historyIdx + 1;
                if (newIdx >= commandHistory.length) {
                    setHistoryIdx(-1);
                    setInput("");
                } else {
                    setHistoryIdx(newIdx);
                    setInput(commandHistory[newIdx]);
                }
            }
        }
    };

    const inputFocusHandler = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-container" onClick={inputFocusHandler}>
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">aryan@portfolio:~ — Software Engineer · Automation · Security</div>
                <a
                    href="/Aryan_Chauhan_Resume.pdf"
                    download
                    className="resume-download-btn"
                    onClick={(e) => e.stopPropagation()}
                >
                    ⬇ Resume
                </a>
            </div>

            <div className="terminal-body" ref={terminalRef}>
                {history.map((item, index) => (
                    <div key={index} className={`terminal-line ${item.type}`}>
                        {item.type === 'command' ? (
                            <div>
                                <span className="prompt">recruiter@company:~$</span> {item.content}
                            </div>
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        )}
                    </div>
                ))}

                <form onSubmit={handleInputSubmit} className="terminal-input-line">
                    <span className="prompt">recruiter@company:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={keyDownHandler}
                        className="terminal-input"
                        autoFocus
                        spellCheck="false"
                    />
                </form>
            </div>
        </div>
    );
}

export default Terminal;
