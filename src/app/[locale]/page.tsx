'use client';

import Image from 'next/image';
import { useTranslations } from '../../hooks/useTranslations';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const currentLocale = params.locale as string;

  const locales = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Maksim Bogachuk</div>
          <div className="hidden lg:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('nav.home')}</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('nav.about')}</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('nav.skills')}</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('nav.education')}</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{t('nav.contact')}</a>
          </div>
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <span>{locales.find(l => l.code === currentLocale)?.flag}</span>
                <span className="hidden md:block">{locales.find(l => l.code === currentLocale)?.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {locales.map((locale) => (
                  <Link
                    key={locale.code}
                    href={`/${locale.code}`}
                    className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                      currentLocale === locale.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span>{locale.flag}</span>
                    <span>{locale.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <button className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 font-medium">{t('hero.greeting')}</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {t('hero.name')}<br />
                  <span className="text-blue-600">{t('hero.surname')}</span>
                </h1>
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('hero.contactButton')}
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('hero.learnMoreButton')}
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Maksim Bogachuk" 
                  width={300} 
                  height={300} 
                  className="absolute top-10 left-10 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-blue-600 font-semibold uppercase tracking-wide">{t('about.label')}</p>
                <h2 className="text-4xl font-bold text-gray-900">
                  {t('about.title')} <span className="text-blue-600">{t('about.titleHighlight')}</span>
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.description1')}</p>
                <p>{t('about.description2')}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">2+</h4>
                  <p className="text-gray-600">{t('about.experienceYears')}</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">10+</h4>
                  <p className="text-gray-600">{t('about.projectsCount')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{t('about.cardTitle')}</h3>
                      <p className="text-gray-600">{t('about.cardSubtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide">{t('skills.label')}</p>
            <h2 className="text-4xl font-bold text-gray-900">{t('skills.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('skills.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('skills.frontend')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.html')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.css')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.javascript')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('skills.otherSkills')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.msOffice')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.adventure')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.independent')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('skills.languages')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.russian')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.german')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.english')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('skills.license')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {t('skills.skills.drivingLicense')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-wide">{t('education.label')}</p>
            <h2 className="text-4xl font-bold text-gray-900">{t('education.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('education.description')}
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('education.entries.gymnasium.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('education.entries.gymnasium.subtitle')}</p>
                  <p className="text-sm text-gray-500">
                    {t('education.entries.gymnasium.description')}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-medium">
                    {t('education.entries.gymnasium.period')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('education.entries.realschule.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('education.entries.realschule.subtitle')}</p>
                  <p className="text-sm text-gray-500">
                    {t('education.entries.realschule.description')}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-medium">
                    {t('education.entries.realschule.period')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('education.entries.lyceum.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('education.entries.lyceum.subtitle')}</p>
                  <p className="text-sm text-gray-500">
                    {t('education.entries.lyceum.description')}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-medium">
                    {t('education.entries.lyceum.period')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4 mb-12">
            <p className="text-blue-400 font-semibold uppercase tracking-wide">{t('contact.label')}</p>
            <h2 className="text-4xl font-bold">{t('contact.title')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.email')}</h3>
              <a href="mailto:maximbogaciuc@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                maximbogaciuc@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.location')}</h3>
              <p className="text-gray-300">{t('contact.locationValue')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{t('contact.status')}</h3>
              <p className="text-green-400">{t('contact.statusValue')}</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:maximbogaciuc@gmail.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('contact.sendEmailButton')}
            </a>
            <a 
              href="#home" 
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t('contact.backToTopButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </main>
  );
}
