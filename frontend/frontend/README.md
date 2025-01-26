# Financial Literacy AI Assistant

An interactive AI-powered platform designed to make financial education accessible to everyone. Built with Next.js 15, TypeScript, and OpenAI's GPT model.

![Financial Literacy AI Assistant](screenshot.png)

## Features

- 💡 Real-time financial advice and education
- 📚 Interactive Q&A about personal finance
- 💰 Budgeting and investment guidance
- 🎯 Clear, practical financial explanations
- 🔒 Secure API implementation
- 📱 Responsive design for all devices

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/financial-literacy-ai.git
cd financial-literacy-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```plaintext
OPENAI_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to start using the application.

## Usage

1. Navigate to the main chat interface
2. Enter your financial question in the text area
3. Receive detailed, practical financial advice
4. Explore different financial topics

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI GPT-3.5-turbo
- **Development**: ESLint, Prettier

## Important Note

⚠️ This application requires an OpenAI API key to function. Make sure to:
- Add your API key to the `.env` file
- Never commit your API key to version control
- Monitor your API usage to manage costs

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---
