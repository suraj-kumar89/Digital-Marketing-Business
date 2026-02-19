'use server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY!)

interface LeadData {
  full_name: string;
  email: string;
  website: string;
  marketing_spend: string;
  services: string;
  goals: string;
}

interface UtmData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
}

export async function submitLead(formData: LeadData, utmData: UtmData) {
  try {
    // 1. Check for Unique Email
    const { data: existingLead } = await supabase
      .from('digital_marketing_leads')
      .select('email')
      .eq('email', formData.email)
      .maybeSingle();

    if (existingLead) {
      return { success: false, error: 'This email has already been submitted.' };
    }

    // 2. Insert into Supabase
    const { error: dbError } = await supabase
      .from('digital_marketing_leads')
      .insert([{
          ...formData,
          utm_source: utmData.utm_source || 'Direct',
          utm_medium: utmData.utm_medium || 'N/A',
          utm_campaign: utmData.utm_campaign || 'N/A'
      }])

    if (dbError) throw new Error('Database Error');

    // 3. Send Notification (Styled exactly like your image)
    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>',
      to: ['hello@shitanshudigital.com'], 
      subject: `🚀 New Strategy Call Request: ${formData.full_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h1 style="color: #FF9900; font-size: 24px; margin-bottom: 24px;"> New Strategy Call Request</h1>
          
          <p><strong>Name:</strong> ${formData.full_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #007bff;">${formData.email}</a></p>
          <p><strong>Website:</strong> <a href="${formData.website}" style="color: #007bff;">${formData.website}</a></p>
          <p><strong>Monthly Spend:</strong> ${formData.marketing_spend}</p>
          <p><strong>Services:</strong> ${formData.services}</p>
          <p><strong>Message/Goals:</strong> ${formData.goals}</p>
          
          <div style="margin-top: 30px; padding: 24px; background-color: #f8f9fa; border-radius: 8px;">
            <h3 style="margin-top: 0; font-size: 18px; color: #1a1a1a;">Marketing Tracking (UTMs)</h3>
            <p style="margin: 8px 0;"><strong>Source:</strong> ${utmData.utm_source || 'Direct'}</p>
            <p style="margin: 8px 0;"><strong>Medium:</strong> ${utmData.utm_medium || 'N/A'}</p>
            <p style="margin: 8px 0;"><strong>Campaign:</strong> ${utmData.utm_campaign || 'N/A'}</p>
          </div>
        </div>
      `
    })

    return { success: true }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}