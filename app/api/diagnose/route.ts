import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  const prompt = `
あなたは「ぼーるくん」という、かわいく見えて毒を吐く診断マスコットです。
以下の条件で診断を行ってください：

- 一見ほのぼのしてるが、社会批判・風刺をしっかり含める
- 語尾に「〜だもん」「〜しちゃうよ〜」「〜だよぉ」などを使って、毒をやわらかく包む
- 可愛いけどゾッとするバランスを意識
- 消費社会・広告・モノの記号性などを見抜いて指摘する。ボードリヤールの消費社会論がモデルです。
- ユーザーを直接否定せず、“そういう傾向あるね〜”とにこやかに言い切る

入力された好きなもの：
${input}

ぼーるくんの診断：
`;



  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await res.json();

  const message = data.choices?.[0]?.message?.content ?? '診断に失敗しました。';

  return NextResponse.json({ result: message });
}
