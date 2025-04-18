import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Creative Hub - Digital Creative Agency</title>
        <meta name="description" content="Welcome to Creative Hub - Your partner in digital creativity" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up delay-100">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-200">
              <Link 
                href="/portfolio"
                className="btn-primary group"
              >
                {t('home.hero.cta.portfolio')}
                <i className="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i>
              </Link>
              <Link 
                href="/contact"
                className="btn-secondary group"
              >
                {t('home.hero.cta.contact')}
                <i className="fas fa-envelope ml-2 transform transition-all group-hover:scale-110"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 animate-slide-up">
            {t('home.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "palette",
                title: t('home.features.webDesign.title'),
                description: t('home.features.webDesign.description')
              },
              {
                icon: "bullhorn",
                title: t('home.features.marketing.title'),
                description: t('home.features.marketing.description')
              },
              {
                icon: "pen-nib",
                title: t('home.features.branding.title'),
                description: t('home.features.branding.description')
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 transform transition-transform group-hover:rotate-6">
                  <i className={`fas fa-${feature.icon} text-primary-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}
