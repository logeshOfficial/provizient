"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  words: readonly string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function TypewriterText({
  words,
  className,
  cursorClassName,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseMs = 2200,
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseMs);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsPaused(true);
        }
      } else if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    isPaused,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);

  return (
    <span className={cn("inline", className)} aria-live="polite">
      <span className="gradient-text">{text}</span>
      <span className={cn("text-primary animate-blink", cursorClassName)}>_</span>
    </span>
  );
}
