// Import all models to ensure they are registered with Mongoose
import './User';
import './Product';
import './Brochure';
import './BrochureRequest';
import './FAQ';
import './QuoteRequest';
import './SupportTicket';
import './Notification';

// Re-export models for convenience
export { User } from './User';
export { Product } from './Product';
export { Brochure } from './Brochure';
export { BrochureRequest } from './BrochureRequest';
export { FAQ } from './FAQ';
export { QuoteRequest } from './QuoteRequest';
export { SupportTicket } from './SupportTicket';
export { Notification } from './Notification';
