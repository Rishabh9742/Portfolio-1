import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'freelance',
    message: '',
  })

  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const enquiryOptions = [
    { value: 'freelance', label: 'Freelance project proposal' },
    { value: 'job', label: 'Job opportunity' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'other', label: 'Other' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const selectedLabel =
    enquiryOptions.find((opt) => opt.value === formData.enquiryType)?.label ||
    'Select type'

  return (
    <section id="contact" className="bg-[#5e4db2] py-16 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#f1f5f9] text-2xl font-bold mb-8 text-center">
          Contact me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#d1d5db] text-sm mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-[#4a3d9e] border-none rounded-md px-3 py-2 text-[#f1f5f9] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c6fc4]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[#d1d5db] text-sm mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-[#4a3d9e] border-none rounded-md px-3 py-2 text-[#f1f5f9] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c6fc4]"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="enquiry"
              className="block text-[#d1d5db] text-sm mb-1"
            >
              Type of enquiry
            </label>
            <button
              type="button"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
              className="w-full bg-[#4a3d9e] border-none rounded-md px-3 py-2 text-[#f1f5f9] text-left focus:outline-none focus:ring-2 focus:ring-[#7c6fc4] flex items-center justify-between"
            >
              {selectedLabel}
              <ChevronDown className="w-4 h-4" />
            </button>
            {isSelectOpen && (
              <div className="absolute z-10 w-full mt-1 bg-[#4a3d9e] border border-[#5e4db2] rounded-md shadow-lg">
                {enquiryOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, enquiryType: option.value })
                      setIsSelectOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left text-[#f1f5f9] hover:bg-[#5e4db2] transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[#d1d5db] text-sm mb-1"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-[#4a3d9e] border-none rounded-md px-3 py-2 text-[#f1f5f9] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#7c6fc4] resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-[#f1f5f9] font-medium py-2 px-4 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
