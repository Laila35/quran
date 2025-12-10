
import { FaPrayingHands, FaBookOpen, FaMosque, FaStarAndCrescent } from 'react-icons/fa';

export default function BonusIslamicLearning() {
  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-teal-800 flex items-center gap-2 mb-4">
        <FaStarAndCrescent className="text-teal-600" />
        Bonus Islamic Learning in Every Session
      </h2>
      <p className="text-teal-700 mb-4">
        At <strong>ilmulQuran</strong>, we add value to each class by offering 5–10 minutes of essential Islamic learning at the end of your session (optional).
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-teal-800">
        <li className="flex items-start gap-2">
          <FaBookOpen className="text-teal-600 mt-1" />
          <span><strong>Kalimas</strong> & Aqeedah basics</span>
        </li>
        <li className="flex items-start gap-2">
          <FaMosque className="text-teal-600 mt-1" />
          <span><strong>Daily Duas</strong> & Salah steps</span>
        </li>
        <li className="flex items-start gap-2">
          <FaPrayingHands className="text-teal-600 mt-1" />
          <span><strong>Islamic manners</strong> & greetings</span>
        </li>
        <li className="flex items-start gap-2">
          <FaStarAndCrescent className="text-teal-600 mt-1" />
          <span><strong>Prophetic guidance</strong> (for kids & adults)</span>
        </li>
      </ul>

      <p className="mt-4 text-sm text-teal-700 italic">
        Perfect for building strong Islamic values alongside your main course. Optional for students – we respect individual preferences.
      </p>
    </div>
  );
}
