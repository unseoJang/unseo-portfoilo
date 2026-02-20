type IconProps = {
  className?: string;
};

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.78A1.78 1.78 0 0 0 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44A1.78 1.78 0 0 0 24 22.22V1.78A1.78 1.78 0 0 0 22.22 0z"
      />
    </svg>
  );
}
