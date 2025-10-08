### Master Prompt & Application Blueprint

This document outlines the complete specifications for building the **RNZ CropWise** application. It is designed to be used as a master prompt for an AI development assistant.

---

### **1. High-Level Application Overview**

*   **App Name**: RNZ CropWise
*   **Core Concept**: A comprehensive mobile and web application for the agricultural company RNZ. The app serves as a digital product catalog, an AI-powered advisory tool for crop care, a support center, and an administrative hub for managing the app's content.
*   **Primary Goal**: To provide farmers and agricultural professionals with easy access to RNZ's product information and expert, data-driven advice to improve crop yields and health.
*   **Target Audience**: Farmers, agronomists, agricultural distributors, and farm managers.

### **2. Core Features & Functionality**

#### **2.1 User-Facing Application**

1.  **Product Catalog & Filtering:**
    *   **Functionality**: Display a complete, searchable, and filterable catalog of all RNZ products.
    *   **UI**: A clean grid or list view of `ProductCard` components. Each card shows the product image, name, a short description, and a "favorite" icon.
    *   **Filtering**: Users must be able to filter the product list based on multiple criteria simultaneously:
        *   Search Term (text input for name/description)
        *   Crop Type (e.g., Corn, Wheat, Tomatoes)
        *   Soil Type (e.g., Loam, Sandy, Clay)
        *   Region (e.g., Worldwide, specific countries)
        *   Product Category (e.g., Water Soluble NPK, Granular NPK)
    *   **Product Detail Page**: Clicking a product opens a dedicated page showing:
        *   Large product image.
        *   Full name, detailed description, and long description.
        *   Tags/Badges for categories, suitable crops, soil types, etc.
        *   A "Request a Quote" form.
        *   A list of related downloadable PDF brochures.

2.  **AI Crop Advisor:**
    *   **Functionality**: Provide users with personalized product recommendations based on their specific farming conditions.
    *   **UI**: A simple form with dropdown selectors for:
        *   Crop Type
        *   Soil Type
        *   Region
        *   Moisture Level
        *   Current Growth Stage (e.g., Seedling, Vegetative, Flowering)
    *   **Backend Logic**:
        *   The backend receives the form data.
        *   It filters a master list of products to find those that are suitable for the provided conditions.
        *   It sends the user's inputs and the list of suitable products to a Large Language Model (LLM).
        *   The LLM is prompted to act as an expert agronomist, recommend 2-3 of the most relevant products from the provided list, and write a concise explanation for its recommendations.
    *   **AI Prompt Example**:
        ```
        You are an expert agricultural advisor for RNZ products. Based on the following farm conditions:
        - Crop: {{crop}}
        - Soil: {{soil}}
        - Region: {{region}}
        - Growth Stage: {{growthStage}}

        And considering this pre-filtered list of suitable RNZ products:
        {{#each suitableProducts}}
        - Name: {{name}}, Description: {{description}}
        {{/each}}

        Your task is to:
        1. Select the 2-3 MOST relevant products from the list provided.
        2. Write a concise explanation (under 120 words) for your recommendation, explaining WHY these specific products are ideal for the given conditions.
        3. Return the names of the recommended products in a structured list and the explanation.
        ```

3.  **Authentication & User Profiles:**
    *   **Functionality**: Secure user sign-up and login (email/password and Google OAuth). Users should have a profile page to update their information.
    *   **UI**: Standard login and sign-up forms. A profile page with fields for Display Name, Country, and Phone Number.
    *   **Database Schema (User)**:
        *   `uid` (String, Primary Key)
        *   `email` (String, Unique)
        *   `displayName` (String)
        *   `photoURL` (String, optional)
        *   `country` (String, optional)
        *   `phoneNumber` (String, optional)
        *   `fcmToken` (String, for push notifications)
        *   `favoriteProductIds` (Array of Strings)

4.  **Favorites List:**
    *   **Functionality**: Allow authenticated users to save products to a personal "favorites" list. This list should persist across sessions.
    *   **UI**: A heart icon on each `ProductCard` and on the product detail page. The icon should be filled when a product is a favorite. A dedicated "Favorites" page displays all saved products.
    *   **Data Logic**: The user's `favoriteProductIds` array in the database should be updated when a favorite is added or removed.

5.  **Support Center & FAQs:**
    *   **Functionality**: A two-part support system: a comprehensive FAQ section and a support ticket submission form.
    *   **UI**:
        *   An accordion-style FAQ page, grouped by categories.
        *   A "New Ticket" form with fields for Subject and Message.
        *   An AI-powered suggestion feature: As the user types in the "Subject" field, an API call is made to an LLM to find relevant FAQs to potentially deflect the ticket.
    *   **Database Schema (SupportTicket)**:
        *   `ticketId` (String, Primary Key)
        *   `userId` (String, Foreign Key to User)
        *   `subject` (String)
        *   `status` (String: 'Open', 'Answered', 'Closed')
        *   `createdAt` (Timestamp)
        *   `updatedAt` (Timestamp)
        *   `messages` (Array of Message objects: `{author: 'user'/'admin', content: '...', timestamp: ...}`)

#### **2.2 Admin Console**

1.  **Product Management (CRUD):**
    *   **Functionality**: A secure admin area to Create, Read, Update, and Delete products in the catalog.
    *   **UI**: A table view of all products with "Edit" and "Delete" buttons. An "Add Product" button leads to a comprehensive form.
    *   **Product Form**: Must include fields for all product attributes (name, descriptions, image URL, and checkboxes for all taxonomies like crops, soil types, etc.).
    *   **AI Description Generator**: The form should have a button that opens a dialog. The admin can input keywords (e.g., "high nitrogen, vegetative growth"), and an AI generates the short and long descriptions for the product.

2.  **Brochure Management (CRUD):**
    *   **Functionality**: Admins can upload PDF brochures and associate them with one or more products.
    *   **UI**: A table of existing brochures. A form to add a new brochure, including a title, a file upload input, and a multi-select checklist of all products to assign it to.

3.  **Quote Request Management:**
    *   **Functionality**: Admins can view all user-submitted quote requests.
    *   **UI**: A table displaying all requests with user info, product details, quantity, and date. The admin must be able to update the status of each request ('Pending', 'Contacted', 'Closed').
    *   **Database Schema (QuoteRequest)**:
        *   `quoteId` (String, Primary Key)
        *   `userId` (String)
        *   `userName` (String)
        *   `productName` (String)
        *   `quantity` (Number)
        *   `status` (String)
        *   `createdAt` (Timestamp)

4.  **Support Ticket Management:**
    *   **Functionality**: Admins can view and reply to user support tickets.
    *   **UI**: A list of all support tickets. Clicking a ticket opens a chat-like view where the admin can see the user's messages and post replies. The admin can also change the ticket's status.

### **3. Technology Stack & Architecture**

*   **Frontend**: Next.js with React (App Router), TypeScript.
*   **UI Components**: ShadCN UI library, styled with Tailwind CSS.
*   **Icons**: `lucide-react`.
*   **State Management**: React Context API for global state (Auth, Theme, Favorites). React Hook Form for forms.
*   **Backend**: Node.js with Express (or similar framework).
*   **Database**: MongoDB.
*   **AI Integration**: An API wrapper around an LLM provider (e.g., Google AI, OpenAI) for the Advisor and content generation features.

### **4. Styling & Design**

*   **Primary Color**: Saturated Blue (`#29ABE2`) - for buttons, links, active states, and key highlights.
*   **Background Color**: Light Blue (`#E5F5FA`) - for the main app background.
*   **Accent Color**: Vibrant Green (`#90EE90`) - for secondary call-to-actions or special highlights.
*   **Font**: 'Inter' (sans-serif) for all text.
*   **Layout**: Clean, organized, and spacious. Use cards to group information. The app must be fully responsive and mobile-first.
