import React, { useState } from 'react';

const exampleQuestions = [
  {
    question: "Gas costs can significantly impact the usability and efficiency of DAPPS. What strategies and techniques do you employ to optimise gas consumption in Solidity contracts? Please share a specific instance where you successfully reduced gas costs.",
    answer: "To optimize gas, I use techniques like minimizing storage writes, packing variables, and using efficient data structures. For example, replacing multiple storage updates with a single batch update reduced gas by 30% in a DeFi contract."
  },
  {
    question: "Could you walk through the process of designing and developing a secure smart contract for a decentralised finance application? Highlight the key considerations you make in terms of contract structure, state management, and transaction handling.",
    answer: "I follow best practices: modular contract structure, strict access control, checks-effects-interactions pattern, and thorough testing. State variables are private, and transaction logic is protected against reentrancy."
  },
  // Add more example Q&A as needed
];

export default function SolidityQA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for OpenAI API integration
    setTimeout(() => {
      setAnswer('This is a sample answer. Integrate OpenAI API for real responses.');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Solidity Q&A</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block mb-2 font-semibold">Ask a Solidity Question:</label>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows={4}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Type your Solidity question here..."
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Answering...' : 'Get Answer'}
        </button>
      </form>
      {answer && (
        <div className="bg-gray-100 p-4 rounded mb-8">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">Example Solidity Q&A</h2>
      <ul>
        {exampleQuestions.map((qa, idx) => (
          <li key={idx} className="mb-4">
            <div className="font-semibold">Q: {qa.question}</div>
            <div className="ml-2">A: {qa.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
