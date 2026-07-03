export function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "braces":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <rect x="7" y="6" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.7" />
          <rect x="14" y="6" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "crown":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 8l3 3 5-6 5 6 3-3v9H4V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "emergency":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "child":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "tooth":
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3c-2 0-3-1-5-1S3 4 3 8c0 5 2 13 4 13s2-6 5-6 3 6 5 6 4-8 4-13c0-4-2-6-4-6s-3 1-5 1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
  }
}
