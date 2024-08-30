export default function ToolTip({ tip, className }: { tip: string; className?: string }) {
  return (
    <div
      className={`tooltip ${className}`}
      data-tip={tip}
    >
      <div className="h-4 w-4 rounded-full bg-secondary text-xs font-bold text-white cursor-pointer">?</div>
    </div>
  );
}
