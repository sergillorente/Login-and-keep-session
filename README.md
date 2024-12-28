# Playwright Project with Dynamic Authentication and Shared Contexts

This project is a testing framework built with Playwright and TypeScript, featuring dynamic authentication management, reusable browser contexts, and environment-specific configurations.

## Features

- **Dynamic Storage State Management**: Automatically generates or uses environment-specific authentication files (e.g., `dev-auth.json`).
- **Reusable Contexts**: Shared browser contexts to optimize test performance.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v14 or higher is recommended).
- **Dependencies**: Install project dependencies via `npm install`.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>

   ```

2. Install dependencies:
   `npm install`

3. Set up your .env file (optional): Create a .env file in the root directory to define your environment variables:
   `ENV=dev`
