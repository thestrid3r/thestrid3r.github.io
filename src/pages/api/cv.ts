import type { APIRoute } from 'astro';
import { site } from '../../config/site';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Check if the file exists
    if (!fs.existsSync(site.cv.path)) {
      return new Response('CV file not found', { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(site.cv.path);
    
    // Get file stats
    const stats = fs.statSync(site.cv.path);
    
    // Set response headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Length', stats.size.toString());
    headers.set('Content-Disposition', `attachment; filename="${site.cv.displayName}"`);
    
    return new Response(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error serving CV file:', error);
    return new Response('Error serving CV file', { status: 500 });
  }
}; 