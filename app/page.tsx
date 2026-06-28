import React from 'react'
import Image from 'next/image'
import { Search, Bell } from 'lucide-react'
import logo from './assets/dareit.png'

type Props = {}

const dares = [
  {
    title: 'Build Portfolio',
    daysLeft: 5,
    status: 'On track',
  },
]

function page({ }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-200">
                <Image src={logo} alt="Icon" width={40} height={40} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">DareIt</p>
                <h1 className="text-2xl font-semibold text-slate-900">Good Day</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Hello Thomas. You have 3 assignments and 1 class cancelled for this week.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-3xl bg-slate-100 px-4 py-3 ring-1 ring-slate-200">
                <Search size={18} className="text-slate-500" />
                <input
                  type="text"
                  placeholder="Search dares"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800">
                <Bell size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
          <aside className="space-y-6 rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
            <div className="space-y-4 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Navigation</p>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white">Home</div>
                <div className="rounded-2xl px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">Dares</div>
                <div className="rounded-2xl px-4 py-3 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">Profile</div>
              </div>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Belief Map</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Clarity, confidence, and consistency in your weekly progress.</p>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900">Week Overview & Recent Deliveries</h2>
              <p className="mt-3 text-sm text-slate-600">Track your main tasks, monitor progress, and stay on top of deadlines.</p>
              <div className="mt-6 space-y-4">
                {dares.map((dare) => (
                  <div key={dare.title} className="rounded-3xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{dare.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{dare.daysLeft} days left</p>
                      </div>
                      <span className="rounded-full bg-slate-900/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-900">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">Coach Insights</h3>
                <p className="mt-3 text-sm text-slate-600">Your coach recommends focusing on the most urgent assignment first to keep momentum.</p>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">Daily Dares</h3>
                <p className="mt-3 text-sm text-slate-600">Review your current week dates and see your daily progress at a glance.</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default page