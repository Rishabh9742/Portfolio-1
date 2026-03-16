"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiryType: "freelance",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-[#5e4db2] py-16 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#f1f5f9] text-2xl font-bold mb-8 text-center">Contact me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#d1d5db] text-sm mb-1">
              Name
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#4a3d9e] border-none text-[#f1f5f9] placeholder:text-[#9ca3af] focus-visible:ring-[#7c6fc4]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#d1d5db] text-sm mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#4a3d9e] border-none text-[#f1f5f9] placeholder:text-[#9ca3af] focus-visible:ring-[#7c6fc4]"
            />
          </div>
          <div>
            <label htmlFor="enquiry" className="block text-[#d1d5db] text-sm mb-1">
              Type of enquiry
            </label>
            <Select
              value={formData.enquiryType}
              onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
            >
              <SelectTrigger className="bg-[#4a3d9e] border-none text-[#f1f5f9] focus:ring-[#7c6fc4]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-[#4a3d9e] border-[#5e4db2] text-[#f1f5f9]">
                <SelectItem value="freelance">Freelance project proposal</SelectItem>
                <SelectItem value="job">Job opportunity</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="message" className="block text-[#d1d5db] text-sm mb-1">
              Your message
            </label>
            <Textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#4a3d9e] border-none text-[#f1f5f9] placeholder:text-[#9ca3af] focus-visible:ring-[#7c6fc4] resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#6366f1] hover:bg-[#5558e3] text-[#f1f5f9] font-medium"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
