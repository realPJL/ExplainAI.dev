import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-8">
      {/* Moves the heading upwards */}
      <div className="mt-auto mb-12">
        <h1 className="text-6xl font-bold">ExplainAI.dev</h1>
        <p className="text-lg mt-2">Keep track of all those AI tools you use.</p>
      </div>

      <div className="mt-auto">
        <h5 className="text-2xl font-bold">🚧 Work in Progress 🚧</h5>
        <p className="mt-1 text-lg">I`m currently building something amazing!</p>
        <p className="mt-1 text-lg">Stay tuned. 🚀</p>
      </div>
    </main>
  );
}