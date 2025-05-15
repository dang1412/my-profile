interface LabelsProps {
  labels: string[];
}

export default function Labels({ labels }: LabelsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {/* <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
        React
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
        TypeScript
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
        JavaScript
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
        HTML
      </span>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
        CSS
      </span> */}
      {labels && labels.map((tech, i) => (
        <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {tech}
        </span>
      ))}
    </div>
  );
}