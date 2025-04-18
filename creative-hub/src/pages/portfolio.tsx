import React from 'react'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
}

const getProjects = (t: any): Project[] => [
  {
    id: 1,
    title: t('portfolio.projects.webApp.title'),
    description: t('portfolio.projects.webApp.description'),
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: t('portfolio.categories.webDev')
  },
  {
    id: 2,
    title: t('portfolio.projects.mobileApp.title'),
    description: t('portfolio.projects.mobileApp.description'),
    imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: t('portfolio.categories.uiDesign')
  },
  {
    id: 3,
    title: t('portfolio.projects.ecommerce.title'),
    description: t('portfolio.projects.ecommerce.description'),
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: t('portfolio.categories.webDev')
  },
  {
    id: 4,
    title: t('portfolio.projects.brandIdentity.title'),
    description: t('portfolio.projects.brandIdentity.description'),
    imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: t('portfolio.categories.branding')
  }
]

export default function Portfolio() {
  const { t } = useTranslation('common')
  const projects = getProjects(t)
  return (
    <>
      <Head>
        <title>{t('nav.portfolio')} - Creative Hub</title>
        <meta name="description" content={t('portfolio.subtitle')} />
      </Head>

      <div className="py-12 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-12 animate-slide-up delay-100">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                          animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center text-primary hover:text-primary-600 transition-colors duration-200">
                    {t('portfolio.viewDetails')}
                    <i className="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
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
