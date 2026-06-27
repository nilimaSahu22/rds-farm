import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Global Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Global WhatsApp Number',
      type: 'string',
      description: 'Include country code, no spaces (e.g. 919876543210)',
    }),
    defineField({
      name: 'email',
      title: 'Global Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Global Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'homepageAboutTitle',
      title: 'Homepage About Title',
      type: 'string',
    }),
    defineField({
      name: 'homepageAboutBody',
      title: 'Homepage About Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'homepageGoogleMapsEmbedUrl',
      title: 'Homepage Google Maps Embed URL',
      type: 'url',
      description: 'The src URL from the Google Maps embed iframe',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
