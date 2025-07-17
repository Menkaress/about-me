import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 border-b">
        <h1 className="text-2xl font-bold">Maksim Bogachuk</h1>
        <nav className="space-x-8">
          <a href="#about" className="hover:underline"></a>
          <a href="#skills" className="hover:underline"></a>
          <a href="#education" className="hover:underline"></a>
          <a href="#contact" className="hover:underline"></a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-8 text-center" id="hero">
        <h2 className="text-5xl font-bold mb-4">👋 Hallo, ich bin Maksim</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Angehender Frontend-Entwickler mit einer Leidenschaft für die Erstellung ansprechender und übersichtlicher Benutzeroberflächen.
        </p>
        <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition">Kontaktiere mich</a>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-8 bg-gray-50" id="about">
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-2">Über mich</h3>
          <p className="text-lg max-w-xl">
            Ich bin ein motivierter Web-Entwickler mit Erfahrung in HTML, CSS und JavaScript. In meiner Freizeit spiele ich Volleyball, schwimme und erstelle Websites. Geboren in Moldawien, lebe ich jetzt in Deutschland.
          </p>
        </div>
        <div className="flex-shrink-0 order-1 md:order-2 mb-8 md:mb-0">
          <Image src="/profile.jpg" alt="Profilfoto" width={180} height={180} className="rounded-full object-cover" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8" id="skills">
        <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Weitere</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>MS Office</li>
              <li>Abenteuerlust</li>
              <li>Selbstständig</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sprachen</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Russisch</li>
              <li>Deutsch</li>
              <li>Englisch</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Führung</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Führerschein B</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-8 bg-gray-50" id="education">
        <h3 className="text-3xl font-bold mb-8 text-center">Ausbildung</h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">09.2022 – 07.2024</span>
            <span>Lichtenberg-Oberstufengymnasium, B, Bruchköbel</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">09.2017 – 07.2022</span>
            <span>Qualifizierender Realschulabschluss</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">08.2012 – 07.2017</span>
            <span>Lyceum „Titu Maiorescu", Chisinău, Moldawien</span>
          </div>
        </div>
      </section>

      {/* Contact Section (placeholder) */}
      <section className="py-16 px-8 text-center" id="contact">
        <h3 className="text-3xl font-bold mb-4">Kontakt</h3>
        <p className="text-lg">Schreib mir eine E-Mail an <a href="mailto:maxim@example.com" className="text-blue-600 underline">maxim@example.com</a></p>
      </section>
    </main>
  );
}
