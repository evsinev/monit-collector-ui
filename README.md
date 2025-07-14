# Monit Collector UI

A modern web application for monitoring and tracking host systems, built with React and TypeScript.

## Overview
Monit Collector UI is a monitoring dashboard that allows you to view and track information about hosts in your infrastructure. It displays critical system information such as:
- Host details
- Last seen timestamps
- Memory usage (RAM)
- Swap usage
- CPU count
- Disk space utilization
- System status information

The application provides a user-friendly interface to monitor your infrastructure with powerful filtering and sorting capabilities.
## Technologies
- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript
- **UI Components**: Cloudscape Design System
- **Data Fetching**: SWR (stale-while-revalidate)
- **Routing**: React Router 7.2.0
- **Build System**: RSBuild
- **Code Quality**: Biome


## Getting Started
### Prerequisites
- Node.js (LTS version recommended)
- Yarn package manager

### Installation
1. Install dependencies:
``` bash
   yarn install
```
2. Start the development server:
``` bash
   yarn dev
```
### Development Scripts
- `yarn dev` - Start the development server with hot reloading
- `yarn build` - Build the application for production
- `yarn lint` - Run the linter to check code quality
- `yarn format` - Automatically format code
