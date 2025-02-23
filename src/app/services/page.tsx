// src/app/services/page.tsx
import Link from 'next/link'
import PricingCard from '@/components/PricingCard'

const services = [
  {
    type: 'WEB_HOSTING',
    title: '网站托管',
    price: 299,
    features: ['100 GB 存储', '无限流量', '免费 SSL', '24/7 支持']
  },
  {
    type: 'DATABASE',
    title: '数据库托管',
    price: 599,
    features: ['MySQL/PostgreSQL', '自动备份', 'SSD 存储', '监控面板']
  },
  {
    type: 'DOMAIN',
    title: '域名注册',
    price: 199,
    features: ['免费 WHOIS 隐私', 'DNS 管理', '域名锁定', '自动续费']
  }
]

export default function ServicesPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-8">选择您的服务</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
        {services.map((service) => (
          <PricingCard 
            key={service.type}
            service={service}
            ctaText="立即购买"
            ctaHref={`/checkout?type=${service.type}`}
          />
        ))}
      </div>
    </div>
  )
}