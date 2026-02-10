'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TemplatesPage() {
  const [category, setCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = allTemplates.filter(t => {
    const matchesCategory = category === 'all' || t.category === category
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         t.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              No-Code SEO
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/templates" className="text-indigo-600 font-semibold">
                Templates
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition">
                Pricing
              </Link>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Template Marketplace</h1>
          <p className="text-xl opacity-90">
            Pre-built SEO workflows from top creators. Start automating in minutes.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-6 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="all">All Categories</option>
            <option value="keyword-research">Keyword Research</option>
            <option value="content-generation">Content Generation</option>
            <option value="link-building">Link Building</option>
            <option value="analytics">Analytics</option>
            <option value="technical-seo">Technical SEO</option>
          </select>
        </div>

        {/* Results count */}
        <p className="mt-4 text-gray-600">
          Showing {filteredTemplates.length} templates
        </p>
      </section>

      {/* Templates Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-100">
              {/* Template Icon */}
              <div className={`w-full h-48 rounded-lg mb-4 flex items-center justify-center text-white text-5xl ${template.color}`}>
                {template.icon}
              </div>

              {/* Template Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getCategoryStyle(template.category)}`}>
                    {formatCategory(template.category)}
                  </span>
                  {template.featured && (
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⬇️ {template.downloads}</span>
                  <span>⭐ {template.rating}</span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">
                  {template.price === 0 ? 'Free' : `$${template.price}`}
                </span>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Get Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">No templates found</p>
            <button
              onClick={() => {
                setCategory('all')
                setSearchQuery('')
              }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Create Your Own Templates?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our creator program and earn passive income from your SEO workflows.
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
            Become a Creator
          </button>
        </div>
      </section>
    </div>
  )
}

// Helper functions
function getCategoryStyle(category: string) {
  const styles: Record<string, string> = {
    'keyword-research': 'bg-blue-100 text-blue-800',
    'content-generation': 'bg-green-100 text-green-800',
    'link-building': 'bg-orange-100 text-orange-800',
    'analytics': 'bg-purple-100 text-purple-800',
    'technical-seo': 'bg-red-100 text-red-800'
  }
  return styles[category] || 'bg-gray-100 text-gray-800'
}

function formatCategory(category: string) {
  return category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}

// Demo Templates Data
const allTemplates = [
  {
    icon: '🔍',
    name: 'Keyword Research Starter',
    description: 'Automated keyword discovery using Google Trends and SEMrush API. Find low-competition opportunities.',
    category: 'keyword-research',
    price: 0,
    downloads: '2.5K',
    rating: 4.8,
    featured: true,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    icon: '✨',
    name: 'Content Optimizer Pro',
    description: 'AI-powered content optimization for higher rankings. Includes readability score and SEO suggestions.',
    category: 'content-generation',
    price: 49,
    downloads: '1.8K',
    rating: 4.9,
    featured: true,
    color: 'bg-gradient-to-br from-green-500 to-emerald-600'
  },
  {
    icon: '🔗',
    name: 'Backlink Hunter',
    description: 'Find and track backlink opportunities automatically. Includes outreach templates and tracking.',
    category: 'link-building',
    price: 29,
    downloads: '1.2K',
    rating: 4.6,
    featured: false,
    color: 'bg-gradient-to-br from-orange-500 to-orange-600'
  },
  {
    icon: '🛠️',
    name: 'Technical SEO Audit',
    description: 'Comprehensive technical SEO audit with actionable insights. Check for broken links, speed, mobile optimization.',
    category: 'technical-seo',
    price: 99,
    downloads: '950',
    rating: 4.7,
    featured: true,
    color: 'bg-gradient-to-br from-red-500 to-red-600'
  },
  {
    icon: '📊',
    name: 'Analytics Dashboard',
    description: 'All-in-one SEO analytics dashboard with custom reports. Track rankings, traffic, and conversions.',
    category: 'analytics',
    price: 49,
    downloads: '1.5K',
    rating: 4.8,
    featured: false,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  {
    icon: '📝',
    name: 'Blog Post Generator',
    description: 'Generate SEO-optimized blog posts with AI. Includes title, meta description, and keyword optimization.',
    category: 'content-generation',
    price: 39,
    downloads: '2.1K',
    rating: 4.5,
    featured: false,
    color: 'bg-gradient-to-br from-green-500 to-green-600'
  },
  {
    icon: '🎯',
    name: 'Competitor Analysis',
    description: 'Analyze competitor strategies and find their top-performing keywords. Stay ahead of the competition.',
    category: 'keyword-research',
    price: 59,
    downloads: '800',
    rating: 4.9,
    featured: false,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
  },
  {
    icon: '📧',
    name: 'Outreach Automation',
    description: 'Automate your link-building outreach. Includes email templates and follow-up sequences.',
    category: 'link-building',
    price: 79,
    downloads: '650',
    rating: 4.4,
    featured: false,
    color: 'bg-gradient-to-br from-orange-500 to-amber-600'
  },
  {
    icon: '🚀',
    name: 'Local SEO Booster',
    description: 'Optimize for local search. Includes GMB optimization, local citations, and review management.',
    category: 'technical-seo',
    price: 69,
    downloads: '1.1K',
    rating: 4.7,
    featured: false,
    color: 'bg-gradient-to-br from-red-500 to-pink-600'
  }
]
