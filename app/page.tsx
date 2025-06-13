'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    const res = await fetch('/api/diagnose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen px-4 py-10 bg-yellow-50 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6 text-center drop-shadow-sm leading-snug">
        ぼーるくん
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow p-5 md:p-6 flex flex-col gap-4 border border-yellow-200"
      >
        <label className="text-gray-700 font-medium text-sm md:text-base">
          あなたの「好きなもの」って？
        </label>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 bg-yellow-50 text-sm md:text-base"
          rows={4}
          placeholder="スタバ、サウナ、古着、◯◯系YouTuber…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-400 text-white px-4 py-2 rounded-full shadow hover:bg-amber-500 transition font-semibold disabled:opacity-50"
        >
          {loading ? '診断中だよ〜' : 'ぼーるくんに診断してもらう'}
        </button>
      </form>

      {result && (
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row items-start gap-4 max-w-md w-full">
          <Image
            src="/ballkun.png"
            alt="ぼーるくん"
            width={64}
            height={64}
            className="rounded-full self-start"
          />
          <div className="relative bg-white rounded-2xl px-4 py-3 shadow text-gray-800 whitespace-pre-wrap border border-yellow-200 text-sm md:text-base">
            <div className="absolute top-3 left-[-8px] w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white border-b-8 border-b-transparent" />
            <p>{result}</p>
          </div>
        </div>
      )}
    </main>
  );
}
