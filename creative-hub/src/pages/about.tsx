import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'

export default function About() {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>{t('nav.about')} - Creative Hub</title>
        <meta name="description" content={t('about.subtitle')} />
      </Head>

      <div className="py-12 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up delay-100">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up delay-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('about.story.content')}
              </p>
              <p className="text-gray-600">
                {t('about.story.vision')}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg animate-slide-up delay-300">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: t('about.mission.title'),
                description: t('about.mission.content'),
                icon: "rocket"
              },
              {
                title: t('about.vision.title'),
                description: t('about.vision.content'),
                icon: "eye"
              },
              {
                title: t('about.values.title'),
                description: t('about.values.content'),
                icon: "heart"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`fas fa-${item.icon} text-primary-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
