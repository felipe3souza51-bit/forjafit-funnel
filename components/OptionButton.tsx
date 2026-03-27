import { QuizOption } from '@/data/quiz';

export function OptionButton({ option, onClick }: { option: QuizOption; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="card w-full p-4 text-left transition hover:-translate-y-0.5 hover:border-primary"
      type="button"
    >
      <div className="text-base font-semibold text-text">{option.label}</div>
      {option.hint ? <div className="mt-1 text-sm text-muted">{option.hint}</div> : null}
    </button>
  );
}
