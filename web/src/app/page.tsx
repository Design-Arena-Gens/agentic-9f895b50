import Link from "next/link";
import { sections } from "@/data/sections";

export default function Home() {
  const navItems = sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_rgba(15,23,42,0.9))]" />
        <header className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-20 sm:px-10 md:pt-24">
          <div className="flex flex-col gap-6 md:max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300">
              Kongre Sunum Dosyası
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              1-3 Aylık Ateşli Bebeklerde İnvaziv Bakteriyel Enfeksiyonlara
              Bütüncül Yaklaşım
            </h1>
            <p className="text-base leading-relaxed text-slate-200 md:text-lg">
              Klinik karar kuralları, güncel kılavuzlar ve kalite göstergeleriyle
              zenginleştirilmiş bu içerik, büyük ölçekli bilimsel kongrede
              kullanıma hazır yapılandırılmış bir sunum akışı sunar.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full border border-slate-700 px-4 py-1">
                Yenidoğan &amp; Çocuk Enfeksiyonları
              </span>
              <span className="rounded-full border border-slate-700 px-4 py-1">
                Klinik Karar Algoritmaları
              </span>
              <span className="rounded-full border border-slate-700 px-4 py-1">
                Kanıta Dayalı Yaklaşım
              </span>
            </div>
          </div>
          <nav className="relative flex flex-wrap gap-3 rounded-xl border border-slate-800 bg-white/5 p-4 backdrop-blur md:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="rounded-lg bg-white/0 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </header>
      </div>
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 sm:px-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 backdrop-blur md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-3xl">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  {section.title}
                </h2>
                {section.lead ? (
                  <p className="mt-4 text-base leading-relaxed text-slate-200">
                    {section.lead}
                  </p>
                ) : null}
                {section.abstract ? (
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    {section.abstract}
                  </p>
                ) : null}
              </div>
              {section.stats ? (
                <div className="grid w-full max-w-md grid-cols-1 gap-3 md:grid-cols-1">
                  {section.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4"
                    >
                      <p className="text-sm uppercase tracking-wide text-slate-400">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-teal-300">
                        {stat.value}
                      </p>
                      {stat.detail ? (
                        <p className="mt-2 text-sm text-slate-300">
                          {stat.detail}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {section.items ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {section.items.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      {item.badge ? (
                        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    {item.description ? (
                      <p className="text-sm leading-relaxed text-slate-200">
                        {item.description}
                      </p>
                    ) : null}
                    {item.bulletPoints ? (
                      <ul className="mt-1 space-y-2 text-sm text-slate-200">
                        {item.bulletPoints.map((point) => (
                          <li
                            key={point}
                            className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-sky-400/70"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {item.emphasis ? (
                      <p className="mt-auto text-sm font-medium text-teal-300">
                        {item.emphasis}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
            {section.takeaway ? (
              <div className="mt-8 rounded-2xl border border-teal-500/40 bg-teal-500/10 p-5 text-sm text-teal-200">
                <strong className="block text-base font-semibold text-teal-200">
                  Önemli Mesaj
                </strong>
                <p className="mt-2 leading-relaxed">{section.takeaway}</p>
              </div>
            ) : null}
          </section>
        ))}
      </main>
      <footer className="border-t border-slate-900/70 bg-slate-950/90 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 sm:px-10 md:flex-row md:items-center md:justify-between">
          <p>
            Hazırlayan: Bilimsel Kongre Sunumu için Klinik İçerik Destek Ekibi
          </p>
          <p>
            Güncelleme tarihi:{" "}
            {new Intl.DateTimeFormat("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date())}
          </p>
        </div>
      </footer>
    </div>
  );
}
