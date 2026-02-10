import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            No-Code SEO
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/templates" className="text-gray-600 hover:text-indigo-600 transition">
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
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            SEO Automation for Everyone
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              No Code Required
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Build powerful SEO workflows with drag-and-drop automation.
            <br />
            Access viral templates from top creators. Start ranking higher today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <Link href="/templates" className="px-8 py-4 bg-white text-indigo-600 text-lg rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition shadow-lg hover:shadow-xl">
              Browse Templates
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            ✨ Free during beta • 🚀 Launch special: $49/mo (normally $99/mo)
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Everything You Need to Dominate SEO
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Marketplace */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Viral Template Marketplace
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-white text-3xl font-bold">
                {template.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">
                  {template.price === 0 ? 'Free' : `$${template.price}`}
                </span>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Get Template
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/templates" className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl inline-block">
            View All Templates
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl ${plan.featured ? 'bg-indigo-600 text-white shadow-2xl scale-105' : 'bg-white shadow-lg'}`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
                <span className="text-lg font-normal">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className={plan.featured ? 'text-white' : 'text-indigo-600'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition ${plan.featured ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your SEO?
          </h2>
          <p className="text-xl mb-8">
            Join 10,000+ marketers who trust No-Code SEO for their automation needs.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 text-lg rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl font-bold">
            Start Free Trial Now
          </button>
          <p className="mt-4 text-sm opacity-90">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600">
            © 2026 No-Code SEO Platform. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-600 hover:text-indigo-600 transition">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-indigo-600 transition">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: '🔍',
    title: 'Keyword Research',
    description: 'Automated keyword discovery with AI-powered analysis. Find low-competition, high-traffic opportunities.'
  },
  {
    icon: '✍️',
    title: 'Content Generation',
    description: 'Create SEO-optimized content at scale. AI writes, you edit. Publish directly to your CMS.'
  },
  {
    icon: '🔗',
    title: 'Link Building',
    description: 'Find backlink opportunities, automate outreach, track your link portfolio. All in one place.'
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Real-time SEO metrics, competitor tracking, and actionable insights. Know what works.'
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    description: 'Drag-and-drop automation builder. No coding required. Save hours every week.'
  },
  {
    icon: '🏪',
    title: 'Template Marketplace',
    description: 'Access pre-built workflows from top SEO experts. Or create your own and earn passive income.'
  }
]

const templates = [
  {
    icon: '🔍',
    name: 'Keyword Research Starter',
    description: 'Automated keyword research using Google Trends',
    price: 0
  },
  {
    icon: '✨',
    name: 'Content Optimizer Pro',
    description: 'AI-powered content optimization for rankings',
    price: 49
  },
  {
    icon: '🔗',
    name: 'Backlink Hunter',
    description: 'Find and track backlink opportunities',
    price: 29
  }
]

const pricing = [
  {
    name: 'Starter',
    price: 0,
    features: [
      '5 workflows/month',
      'Basic templates',
      'Community support',
      '1 user'
    ],
    cta: 'Start Free',
    featured: false
  },
  {
    name: 'Pro',
    price: 49,
    features: [
      'Unlimited workflows',
      'Premium templates',
      'Priority support',
      '5 users',
      'Custom branding',
      'API access'
    ],
    cta: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Agency',
    price: 149,
    features: [
      'Everything in Pro',
      'White-label option',
      'Dedicated account manager',
      'Unlimited users',
      'Custom integrations'
    ],
    cta: 'Contact Sales',
    featured: false
  }
]
