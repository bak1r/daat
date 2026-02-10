import fs from 'fs'
import path from 'path'

export interface Lead {
  id: string
  phone: string
  name?: string
  locale: string
  messages: string[]
  timestamp: string
  ipAddress?: string
}

export function saveLead(lead: Omit<Lead, 'id' | 'timestamp'>): Lead {
  const leadsPath = path.join(process.cwd(), 'lib', 'leads.json')
  
  let data: { leads: Lead[] }
  try {
    const fileContent = fs.readFileSync(leadsPath, 'utf-8')
    data = JSON.parse(fileContent)
  } catch (error) {
    // If file doesn't exist or is invalid, create new structure
    data = { leads: [] }
  }
  
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  }
  
  data.leads.push(newLead)
  
  // Write atomically
  fs.writeFileSync(leadsPath, JSON.stringify(data, null, 2), 'utf-8')
  
  return newLead
}

export function getLeads(): Lead[] {
  const leadsPath = path.join(process.cwd(), 'lib', 'leads.json')
  
  try {
    const fileContent = fs.readFileSync(leadsPath, 'utf-8')
    const data = JSON.parse(fileContent)
    return data.leads || []
  } catch (error) {
    return []
  }
}
