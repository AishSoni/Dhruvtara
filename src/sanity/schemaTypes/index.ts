import { type SchemaTypeDefinition } from 'sanity'
import gallery from './gallery';
import testimonial from './testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, testimonial],
}
