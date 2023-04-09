import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // <-- might need to install...
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'coo17utp',
  dataset: 'production',
  title: 'My Portfolio Website',
  apiVersion: '2023-04-08',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;