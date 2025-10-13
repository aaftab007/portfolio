import React, { useState, useEffect } from "react";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion, AnimatePresence } from "framer-motion";

const TypingTest = () => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isComplete, setIsComplete] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [errors, setErrors] = useState<number[]>([]);
  const [showStats, setShowStats] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [showResults, setShowResults] = useState(false);
  const [bestWpm, setBestWpm] = useState(0);
  const [totalTests, setTotalTests] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [correctCharacters, setCorrectCharacters] = useState(0);

  const quotes = {
    easy: [
      "hello world",
      "code is poetry",
      "keep it simple",
      "debug with confidence",
      "write clean code",
      "test everything",
      "learn by doing",
      "think before coding"
    ],
    medium: [
      "the best error message is the one that never shows up",
      "any fool can write code that a computer can understand good programmers write code that humans can understand",
      "first solve the problem then write the code",
      "code is like humor when you have to explain it its bad",
      "programming isnt about what you know its about what you can figure out",
      "good code is its own best documentation"
    ],
    hard: [
      "function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }",
      "const quickSort = arr => arr.length <= 1 ? arr : [...quickSort(arr.filter(x => x < arr[0])), arr[0], ...quickSort(arr.filter(x => x > arr[0]))];",
      "class Node { constructor(value) { this.value = value; this.next = null; } }",
      "const debounce = (fn, delay) => { let id; return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay); }; };",
      "const isValidEmail = email => /^[^@]+@[^@]+\.[^@]+$/.test(email);",
      "const factorial = n => n <= 1 ? 1 : n * factorial(n-1);"
    ]
  };

  const currentQuotes = quotes[difficulty];
  const currentQuote = currentQuotes[currentQuoteIndex];

  useEffect(() => {
    // Auto-focus on input when component mounts and is expanded
    if (isExpanded) {
      const input = document.getElementById('typing-input') as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    // Real-time timer
    let interval: NodeJS.Timeout;
    if (startTime && !isComplete) {
      interval = setInterval(() => {
        setCurrentTime(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [startTime, isComplete]);

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'r':
            e.preventDefault();
            resetTest();
            break;
          case 'n':
            e.preventDefault();
            nextQuote();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    // Start timer on first keystroke
    if (value.length === 1 && !startTime) {
      setStartTime(Date.now());
      setShowStats(true);
    }

    // Check for errors in current input
    const newErrors: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== currentQuote[i]) {
        newErrors.push(i);
      }
    }
    setErrors(newErrors);

    // Calculate correct characters (final result)
    const finalCorrectChars = value.length - newErrors.length;
    setCorrectCharacters(finalCorrectChars);

    // Calculate accuracy based on total keystrokes vs correct characters (MonkeyType style)
    if (totalKeystrokes > 0) {
      const accuracyPercent = Math.round((finalCorrectChars / totalKeystrokes) * 100);
      setAccuracy(accuracyPercent);
    } else {
      setAccuracy(100); // Start with 100% when no keystrokes
    }

    // Calculate WPM when complete
    if (value.length === currentQuote.length && startTime && !isComplete) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
      const wordsTyped = currentQuote.split(' ').length;
      const calculatedWpm = Math.round(wordsTyped / timeElapsed);
      setWpm(calculatedWpm);
      setIsComplete(true);
      setShowResults(true);
      
      // Update best WPM
      if (calculatedWpm > bestWpm) {
        setBestWpm(calculatedWpm);
      }
      setTotalTests(prev => prev + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Track keystrokes but exclude modifier keys (shift, ctrl, alt, etc.)
    if (!e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
      setTotalKeystrokes(prev => prev + 1);
    }
  };

  const resetTest = () => {
    setUserInput("");
    setStartTime(null);
    setCurrentTime(0);
    setWpm(0);
    setAccuracy(100);
    setIsComplete(false);
    setErrors([]);
    setShowStats(false);
    setShowResults(false);
    setTotalKeystrokes(0);
    setCorrectCharacters(0);
    
    // Focus back on input immediately
    setTimeout(() => {
      const input = document.getElementById('typing-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.click(); // Force focus
      }
    }, 100);
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % currentQuotes.length);
    resetTest();
    // Ensure focus after quote change
    setTimeout(() => {
      const input = document.getElementById('typing-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.click(); // Force focus
      }
    }, 150);
  };

  const changeDifficulty = (newDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(newDifficulty);
    setCurrentQuoteIndex(0);
    resetTest();
  };

  const expandTest = () => {
    setIsExpanded(true);
    // Focus on input immediately after expansion
    setTimeout(() => {
      const input = document.getElementById('typing-input') as HTMLInputElement;
      if (input) {
        input.focus();
        input.click(); // Force focus
      }
    }, 200); // Slightly longer delay to ensure component is mounted
  };

  const collapseTest = () => {
    setIsExpanded(false);
    resetTest();
  };

  const renderText = () => {
    return currentQuote.split('').map((char, index) => {
      let className = "text-[#e4ded7] transition-colors duration-150";
      
      if (index < userInput.length) {
        if (errors.includes(index)) {
          className = "text-red-400 bg-red-500/20 border-b border-red-400";
        } else {
          className = "text-green-400 bg-green-500/20 border-b border-green-400";
        }
      } else if (index === userInput.length) {
        className = "text-[#e4ded7] bg-[#e4ded7]/20 border-b-2 border-[#e4ded7] animate-pulse";
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  const progress = userInput.length / currentQuote.length * 100;
  
  // Calculate live WPM
  const getLiveWpm = () => {
    if (!startTime || currentTime === 0) return 0;
    const timeElapsed = currentTime / 1000 / 60; // in minutes
    const wordsTyped = currentQuote.split(' ').length;
    const progressRatio = userInput.length / currentQuote.length;
    const estimatedWordsTyped = wordsTyped * progressRatio;
    return Math.round(estimatedWordsTyped / timeElapsed);
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56">
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            // Collapsed State - Theme Matched
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mx-auto flex w-[100%] flex-col items-center justify-center lg:max-w-[800px]"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:text-[60px] lg:text-[80px] mb-8"
                  >
                    How fast can you type?
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7]/80 md:text-[20px] lg:text-[24px] mb-12"
                  >
                    Programming quotes • Real-time WPM • Accuracy tracking
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    onClick={expandTest}
                    className="rounded-md border-2 border-[#e4ded7] py-4 px-8 text-[16px] font-bold text-[#e4ded7] hover:bg-[#e4ded7] hover:text-[#0E1016] transition-all duration-300 md:text-[18px]"
                  >
                    Start Test →
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // Expanded State - Full Typing Test
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Heading that stays visible */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center mb-8"
              >
                <div className="text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:text-[60px] lg:text-[80px]">
                  How fast can you type?
                </div>
              </motion.div>

              {/* Difficulty Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 flex justify-center"
              >
                <div className="bg-[#0E1016]/50 backdrop-blur-sm border border-[#e4ded7]/20 rounded-full p-1">
                  {(['easy', 'medium', 'hard'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => changeDifficulty(level)}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                        difficulty === level
                          ? 'bg-[#e4ded7] text-[#0E1016] shadow-lg'
                          : 'text-[#e4ded7]/60 hover:text-[#e4ded7] hover:bg-[#e4ded7]/10'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Live Timer and Stats */}
              <AnimatePresence>
                {showStats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8 flex justify-center gap-6 text-center"
                  >
                    <div className="bg-[#0E1016]/60 backdrop-blur-sm border border-[#e4ded7]/20 rounded-xl px-6 py-4 shadow-lg">
                      <div className="text-3xl font-bold text-[#e4ded7]">{formatTime(currentTime)}</div>
                      <div className="text-sm text-[#e4ded7]/70 font-medium">Time</div>
                    </div>
                    <div className="bg-[#0E1016]/60 backdrop-blur-sm border border-[#e4ded7]/20 rounded-xl px-6 py-4 shadow-lg">
                      <div className="text-3xl font-bold text-[#e4ded7]">{isComplete ? wpm : getLiveWpm()}</div>
                      <div className="text-sm text-[#e4ded7]/70 font-medium">WPM</div>
                    </div>
                    <div className="bg-[#0E1016]/60 backdrop-blur-sm border border-[#e4ded7]/20 rounded-xl px-6 py-4 shadow-lg">
                      <div className="text-3xl font-bold text-[#e4ded7]">{accuracy}%</div>
                      <div className="text-sm text-[#e4ded7]/70 font-medium">Accuracy</div>
                    </div>
                    <div className="bg-[#0E1016]/60 backdrop-blur-sm border border-[#e4ded7]/20 rounded-xl px-6 py-4 shadow-lg">
                      <div className="text-3xl font-bold text-[#e4ded7]">{totalKeystrokes}</div>
                      <div className="text-sm text-[#e4ded7]/70 font-medium">Keystrokes</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Bar */}
              <AnimatePresence>
                {showStats && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-6"
                  >
                    <div className="w-full bg-[#0E1016]/30 rounded-full h-2 border border-[#e4ded7]/20">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2 text-[#e4ded7]/60 text-sm">
                      {Math.round(progress)}% Complete
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quote Counter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-6 text-center"
              >
                <span className="bg-[#0E1016]/50 backdrop-blur-sm border border-[#e4ded7]/20 rounded-full px-4 py-2 text-[#e4ded7]/80 text-sm font-medium">
                  {currentQuoteIndex + 1} of {currentQuotes.length}
                </span>
              </motion.div>

              {/* Typing Area */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#0E1016]/40 backdrop-blur-md border border-[#e4ded7]/20 rounded-2xl p-8 mb-8 shadow-xl cursor-text relative"
                onClick={() => {
                  const input = document.getElementById('typing-input') as HTMLInputElement;
                  if (input) input.focus();
                }}
                style={{ WebkitUserSelect: 'none' }}
              >
                <div className="text-xl leading-relaxed min-h-[140px] flex items-center justify-center text-center">
                  <div className="max-w-full">
                    {renderText()}
                  </div>
                </div>
                
                {/* Transparent input for typing */}
                <input
                  id="typing-input"
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                  style={{
                    WebkitAppearance: 'none',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                  disabled={isComplete}
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  data-lpignore="true"
                  data-form-type="other"
                />
              </motion.div>

              {/* Results Modal */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="bg-[#0E1016]/95 backdrop-blur-md border border-[#e4ded7]/20 rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
                    >
                      <h3 className="text-2xl font-bold text-[#e4ded7] mb-6 text-center">Test Complete!</h3>
                      <div className="space-y-4 text-center">
                        <div className="text-4xl font-bold text-green-400">{wpm} WPM</div>
                        <div className="text-lg text-[#e4ded7]">{accuracy}% Accuracy</div>
                        <div className="text-sm text-[#e4ded7]/60">Time: {formatTime(currentTime)}</div>
                        <div className="text-sm text-[#e4ded7]/60">Keystrokes: {totalKeystrokes}</div>
                        {wpm > bestWpm && bestWpm > 0 && (
                          <div className="text-green-400 text-sm">🎉 New Personal Best!</div>
                        )}
                        <div className="text-xs text-[#e4ded7]/50">Tests completed: {totalTests}</div>
                      </div>
                      <div className="flex gap-4 mt-8">
                        <button
                          onClick={resetTest}
                          className="flex-1 bg-[#0E1016]/60 hover:bg-[#0E1016]/80 border border-[#e4ded7]/30 hover:border-[#e4ded7]/50 text-[#e4ded7] px-4 py-3 rounded-xl transition-all duration-200 font-bold"
                        >
                          Try Again
                        </button>
                        <button
                          onClick={nextQuote}
                          className="flex-1 bg-[#e4ded7]/10 hover:bg-[#e4ded7]/20 border border-[#e4ded7]/30 hover:border-[#e4ded7]/50 text-[#e4ded7] px-4 py-3 rounded-xl transition-all duration-200 font-bold"
                        >
                          Next
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center gap-6 mb-8"
              >
                <button
                  onClick={resetTest}
                  className="bg-[#0E1016]/60 hover:bg-[#0E1016]/80 border border-[#e4ded7]/30 hover:border-[#e4ded7]/50 text-[#e4ded7] px-8 py-4 rounded-xl transition-all duration-200 font-bold hover:scale-105 shadow-lg"
                >
                  Try Again
                </button>
                <button
                  onClick={nextQuote}
                  className="bg-[#e4ded7]/10 hover:bg-[#e4ded7]/20 border border-[#e4ded7]/30 hover:border-[#e4ded7]/50 text-[#e4ded7] px-8 py-4 rounded-xl transition-all duration-200 font-bold hover:scale-105 shadow-lg"
                >
                  Next
                </button>
              </motion.div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-10 text-center text-[#e4ded7]/60 text-sm space-y-2 mb-8"
              >
                <div className="flex justify-center gap-6 text-xs">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Correct</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Error</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#e4ded7] rounded-full animate-pulse"></div>
                    <span>Current</span>
                  </span>
                </div>
                <p className="text-[#e4ded7]/50">Press any key to start • Ctrl+R to reset • Ctrl+N for next quote</p>
              </motion.div>

              {/* Close Button - Now at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex justify-center"
              >
                <button
                  onClick={collapseTest}
                  className="bg-[#0E1016]/50 hover:bg-[#0E1016]/70 border border-[#e4ded7]/20 hover:border-[#e4ded7]/40 text-[#e4ded7]/60 hover:text-[#e4ded7] px-6 py-3 rounded-lg transition-all duration-200 text-sm"
                >
                  ✕ Close Test
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TypingTest;
