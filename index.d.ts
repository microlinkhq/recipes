import type { Mql } from '@microlink/mql'

export interface RecipeOptions {
  baseUrl?: string
  timeout?: number
  retry?: number
  headers?: Record<string, string>
}

export interface RecipeResult {
  status: 'success' | 'error'
  data?: unknown
  error?: Error
}

export interface Recipes {
  debugCss: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  emails: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  embed: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  excerpt: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  favicon: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  fullScreenshot: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  headings: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  healthcheck: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  html: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  images: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  jsonLd: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  lighthouse: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  pdf: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  screenshot: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  technologyStack: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  text: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  uris: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
  youtubeDl: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
}

export interface RecipesByProvider {
  [provider: string]: (url: string, options?: RecipeOptions) => Promise<RecipeResult>
}

declare const recipes: Recipes & RecipesByProvider

export default recipes
